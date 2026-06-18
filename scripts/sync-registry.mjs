import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const cwd = process.cwd();
const uiRoot = path.join(cwd, 'src/lib/components/ui');
const hooksRoot = path.join(cwd, 'src/lib/hooks');
const aliases = {
  ui: '$lib/components/ui',
  hooks: '$lib/hooks',
  utils: '$lib/utils',
  lib: '$lib'
};

const uiNames = (
  await readdir(uiRoot, {
    withFileTypes: true
  })
)
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

const uiNameSet = new Set(uiNames);
const hookFiles = (await listFiles(hooksRoot)).filter((file) => file.endsWith('.svelte.ts'));
const hookNames = hookFiles
  .map((file) => path.basename(file, '.svelte.ts'))
  .sort((a, b) => a.localeCompare(b));
const hookNameSet = new Set(hookNames);

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function titleCase(name) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) return listFiles(absolute);
      return absolute;
    })
  );

  return files.flat().sort((a, b) => a.localeCompare(b));
}

async function registryDependencies(files, self) {
  const deps = new Set();
  const uiImportPattern = /\$lib\/components\/ui\/([^/'"]+)\//g;
  const hookImportPattern = /\$lib\/hooks\/([^/'"]+)\.svelte\.js/g;
  const utilsImportPattern = /\$lib\/utils(?:\.js)?/;

  for (const file of files) {
    if (!/\.(svelte|ts|js)$/.test(file)) continue;
    const source = await readFile(file, 'utf8');
    if (utilsImportPattern.test(source)) deps.add('utils');
    for (const match of source.matchAll(uiImportPattern)) {
      const name = match[1];
      if (name !== self && uiNameSet.has(name)) deps.add(name);
    }
    for (const match of source.matchAll(hookImportPattern)) {
      const name = match[1];
      if (hookNameSet.has(name)) deps.add(name);
    }
  }

  return [...deps].sort((a, b) => a.localeCompare(b));
}

async function buildItems({ standalone }) {
  const items = [];

  items.push({
    name: 'utils',
    type: 'registry:lib',
    title: 'Utils',
    description: 'Kura utility helpers used by the component source.',
    registryDependencies: [],
    files: [
      {
        path: 'src/lib/utils.ts',
        type: 'registry:lib'
      }
    ]
  });

  for (const file of hookFiles) {
    const name = path.basename(file, '.svelte.ts');
    items.push({
      name,
      type: 'registry:hook',
      title: titleCase(name),
      description: `Kura ${titleCase(name)} hook.`,
      registryDependencies: [],
      files: [
        {
          path: toPosix(path.relative(cwd, file)),
          type: 'registry:hook'
        }
      ]
    });
  }

  for (const name of uiNames) {
    const absoluteDir = path.join(uiRoot, name);
    const files = await listFiles(absoluteDir);
    const deps = await registryDependencies(files, name);

    items.push({
      name,
      type: 'registry:ui',
      title: titleCase(name),
      description: `Kura ${titleCase(name)} component source.`,
      registryDependencies: deps.map((dep) => (standalone ? `local:${dep}` : dep)),
      files: files.map((file) => ({
        path: toPosix(path.relative(cwd, file)),
        type: 'registry:file'
      }))
    });
  }

  return items;
}

async function writeRegistry(filename, { standalone }) {
  const registry = {
    $schema: 'https://shadcn-svelte.com/schema/registry.json',
    name: standalone ? 'kura' : 'kura/sera',
    homepage: 'https://kura.gfdc.dev',
    aliases,
    items: await buildItems({ standalone })
  };

  await writeFile(path.join(cwd, filename), `${JSON.stringify(registry, null, 2)}\n`);
}

await writeRegistry('registry.json', { standalone: true });
await writeRegistry('registry.sera.json', { standalone: false });
