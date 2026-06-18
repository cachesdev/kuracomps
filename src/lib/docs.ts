import { components, gettingStarted } from '$content/index.js';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

const allDocs = [...gettingStarted, ...components];

type DocMetadata = (typeof allDocs)[number];
type DocResolver = () => Promise<{ default: Component; metadata: DocMetadata }>;

function transformPath(path: string): string {
  return path.replace('/content/', '').replace('.md', '').replace('/index', '').trim();
}

function getDocMetadata(slug: string): DocMetadata | undefined {
  return allDocs.find((doc) => doc.path === slug);
}

export async function getDoc(
  _slug: string
): Promise<{ component: Component; metadata: DocMetadata }> {
  const modules = import.meta.glob('/content/**/*.md');
  const slug = _slug === '' ? 'index' : _slug;

  for (const [path, resolver] of Object.entries(modules)) {
    if (transformPath(path) === slug) {
      const doc = await (resolver as DocResolver)();
      const metadata = getDocMetadata(slug);

      if (!doc || !metadata) {
        break;
      }

      return {
        component: doc.default,
        metadata
      };
    }
  }

  error(404, 'Could not find the documentation page.');
}
