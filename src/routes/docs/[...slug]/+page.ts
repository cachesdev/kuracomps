import { getDoc } from '$lib/docs.js';
import type { EntryGenerator, PageLoad } from './$types.js';

type RegistryItem = {
  name: string;
  files?: {
    target?: string;
    path?: string;
    content?: string;
  }[];
};

export const prerender = true;

function contentSlug(path: string) {
  return path
    .replace('/content/', '')
    .replace('.md', '')
    .replace(/(^|\/)index$/, '')
    .replace(/\/$/, '');
}

export const entries: EntryGenerator = () => {
  const modules = import.meta.glob('/content/**/*.md');

  return Object.keys(modules).map((path) => ({
    slug: contentSlug(path)
  }));
};

export const load: PageLoad = async ({ params, fetch }) => {
  const slug = params.slug ?? '';
  const doc = await getDoc(slug);
  const componentName = doc.metadata.slug;
  const metadata =
    doc.metadata.path.startsWith('components/') && componentName
      ? {
          ...doc.metadata,
          links: {
            ...doc.metadata.links,
            source: `/r/${componentName}.json`
          }
        }
      : doc.metadata;

  if (doc.metadata.path.startsWith('components/') && componentName) {
    const response = await fetch(`/r/${componentName}.json`);

    if (response.ok) {
      const viewerData: RegistryItem = await response.json();
      return { ...doc, metadata, viewerData };
    }
  }

  return { ...doc, metadata, viewerData: null };
};
