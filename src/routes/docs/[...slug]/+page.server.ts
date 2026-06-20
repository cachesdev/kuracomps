import { highlightCode, languageFromPath } from '$lib/highlight-code.js';
import type { PageServerLoad } from './$types.js';

type RegistryFile = {
  target?: string;
  path?: string;
  content?: string;
};

type RegistryItem = {
  name: string;
  files?: RegistryFile[];
};

export const load: PageServerLoad = async ({ fetch, params }) => {
  const slug = params.slug ?? '';

  if (!slug.startsWith('components/')) {
    return { viewerData: null };
  }

  const componentName = slug.replace(/^components\//, '');
  const response = await fetch(`/r/${componentName}.json`);

  if (!response.ok) {
    return { viewerData: null };
  }

  const item: RegistryItem = await response.json();
  const files = await Promise.all(
    (item.files ?? []).map(async (file) => {
      const path = file.target ?? file.path;
      const content = file.content ?? '';

      return {
        ...file,
        highlightedContent: await highlightCode(content, languageFromPath(path))
      };
    })
  );

  return {
    viewerData: {
      ...item,
      files
    }
  };
};
