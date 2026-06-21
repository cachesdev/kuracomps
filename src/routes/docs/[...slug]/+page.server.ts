import { highlightCode, languageFromPath } from '$lib/highlight-code.js';
import { components } from '$content/index.js';
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

function registryNameFromSource(source: string | undefined): string | null {
  if (!source?.startsWith('/r/') || !source.endsWith('.json')) {
    return null;
  }

  return source.slice('/r/'.length, -'.json'.length) || null;
}

export const load: PageServerLoad = async ({ fetch, params }) => {
  const slug = params.slug ?? '';

  if (!slug.startsWith('components/')) {
    return { viewerData: null };
  }

  const componentName = slug.replace(/^components\//, '');
  const metadata = components.find((doc) => doc.path === slug);
  const registryName = registryNameFromSource(metadata?.links?.source) ?? componentName;
  const response = await fetch(`/r/${registryName}.json`);

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
