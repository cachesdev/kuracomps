import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'jsrepo';
import { distributed } from 'jsrepo/outputs';

const uiRoot = 'src/lib/components/ui';
const hooksRoot = 'src/lib/hooks';
const packageJson = JSON.parse(readFileSync('package.json', 'utf8')) as { version: string };

type JsDependency = {
  ecosystem: 'js';
  name: string;
  version?: string;
};

type UiOverride = {
  registryDependencies?: string[];
  dependencies?: JsDependency[];
  devDependencies?: JsDependency[];
};

const uiOverrides: Record<string, UiOverride> = {
  'health-chart': {
    devDependencies: [{ ecosystem: 'js', name: '@types/luxon', version: '^3.7.2' }]
  }
};

function titleCase(name: string) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getDirectoryNames(root: string) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function getHookNames(root: string) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.svelte.ts'))
    .map((entry) => path.basename(entry.name, '.svelte.ts'))
    .sort((a, b) => a.localeCompare(b));
}

export default defineConfig({
  registry: {
    name: 'kura',
    description: 'Kura component source for dense Svelte product interfaces.',
    homepage: 'https://kura.gfdc.dev',
    repository: 'https://github.com/cachesdev/kuracomps',
    version: packageJson.version,
    tags: ['svelte', 'components', 'ui'],
    excludeDeps: ['svelte'],
    defaultPaths: {
      ui: 'src/lib/components/ui',
      hook: 'src/lib/hooks',
      lib: 'src/lib'
    },
    outputs: [distributed({ dir: './static/r', format: { space: '  ' } })],
    items: [
      {
        name: 'utils',
        type: 'lib',
        title: 'Utils',
        description: 'Kura utility helpers used by the component source.',
        add: 'when-needed',
        files: [{ path: 'src/lib/utils.ts' }]
      },
      {
        name: 'styles',
        type: 'lib',
        title: 'Kura Styles',
        description:
          'Global Kura theme tokens, variants, animation utilities, and shared CSS utilities.',
        add: 'when-needed',
        files: [{ path: 'src/lib/styles' }]
      },
      ...getHookNames(hooksRoot).map((name) => ({
        name,
        type: 'hook' as const,
        title: titleCase(name),
        description: `Kura ${titleCase(name)} hook.`,
        files: [{ path: `${hooksRoot}/${name}.svelte.ts` }]
      })),
      ...getDirectoryNames(uiRoot).map((name) => {
        const override = uiOverrides[name] ?? {};

        return {
          name,
          type: 'ui' as const,
          title: titleCase(name),
          description: `Kura ${titleCase(name)} component source.`,
          registryDependencies: ['styles', ...(override.registryDependencies ?? [])],
          dependencies: override.dependencies,
          devDependencies: override.devDependencies,
          files: [{ path: `${uiRoot}/${name}` }]
        };
      })
    ]
  }
});
