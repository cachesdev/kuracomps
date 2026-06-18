import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import MagicString from 'magic-string';
import { mdsx } from 'mdsx';
import { mdsxConfig } from './mdsx.config.js';
import type { PreprocessorGroup } from 'svelte/compiler';

const root = process.cwd();

export default defineConfig({
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(root),
        // Markdown docs are compiled through Vite in dev via import.meta.glob('/content/**/*.md').
        join(root, 'content')
      ]
    }
  },
  resolve: {
    alias: {
      $content: join(root, '.velite'),
      '$lib/registry/ui': join(root, 'src/lib/components/ui'),
      '$lib/registry/hooks': join(root, 'src/lib/hooks')
    }
  },
  plugins: [
    tailwindcss(),
    sveltekit({
      preprocess: [mdsx(mdsxConfig), componentPreviews()],
      extensions: ['.svelte', '.md'],
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in Svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
        experimental: { async: true }
      },
      adapter: adapter(),
      alias: {
        '$content/*': '.velite/*',
        '$lib/registry/ui': 'src/lib/components/ui',
        '$lib/registry/hooks': 'src/lib/hooks'
      },
      prerender: {
        handleMissingId: (details) => {
          if (details.id === '#') return;
          console.warn(details.message);
        }
      },
      experimental: { remoteFunctions: true, handleRenderingErrors: true }
    })
  ]
});

function componentPreviews(): PreprocessorGroup {
  const target = '<ComponentPreview';
  const camelize = (value: string) => value.replace(/-./g, (part) => part[1].toUpperCase());

  return {
    name: 'inject-component-preview',
    markup: ({ content, filename }) => {
      if (!filename?.endsWith('.md') || !content.includes(target)) return;

      const ms = new MagicString(content);
      const results = content.matchAll(/<ComponentPreview name=["']([^\s"']*)["']/g);
      const components = new Set<string>();

      for (const exec of results) {
        const [, name] = exec;
        const insertIndex = exec.index + target.length;
        const identifier = camelize(name);
        const prop = ` component={${identifier}}`;

        ms.appendRight(insertIndex, prop);
        components.add(name);
      }

      const importIndex = content.search('import ComponentPreview');
      if (importIndex === -1) return { code: ms.toString(), map: ms.generateMap() };

      for (const name of components) {
        const identifier = camelize(name);
        const source = getPreviewSource(name);
        if (!source) continue;

        ms.appendLeft(
          importIndex,
          `import ${identifier} from "$lib/registry/${source}/${name}.svelte";`
        );
      }

      return { code: ms.toString(), map: ms.generateMap() };
    }
  };
}

function getPreviewSource(name: string): 'examples' | 'blocks' | null {
  if (existsSync(join(root, 'src/lib/registry/examples', `${name}.svelte`))) {
    return 'examples';
  }

  if (existsSync(join(root, 'src/lib/registry/blocks', `${name}.svelte`))) {
    return 'blocks';
  }

  return null;
}
