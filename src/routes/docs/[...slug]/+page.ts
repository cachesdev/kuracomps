import { getDoc } from '$lib/docs.js';
import type { EntryGenerator, PageLoad } from './$types.js';

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

export const load: PageLoad = async ({ params, data }) => {
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

  return { ...doc, metadata, viewerData: data.viewerData };
};
