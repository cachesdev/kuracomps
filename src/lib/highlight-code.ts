import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const jsEngine = createJavaScriptRegexEngine();
const highlightCache = new Map<string, string>();

async function getHighlighter() {
  if (!globalThis.__shikiHighlighterPromise) {
    globalThis.__shikiHighlighterPromise = createHighlighterCore({
      themes: [
        import('@shikijs/themes/github-dark'),
        import('@shikijs/themes/github-light-default')
      ],
      langs: [
        import('@shikijs/langs/typescript'),
        import('@shikijs/langs/svelte'),
        import('@shikijs/langs/css'),
        import('@shikijs/langs/json'),
        import('@shikijs/langs/bash'),
        import('@shikijs/langs/diff')
      ],
      engine: jsEngine
    }).then(
      (highlighter) => {
        globalThis.__shikiHighlighter = highlighter;
        return highlighter;
      },
      (error) => {
        globalThis.__shikiHighlighterPromise = undefined;
        throw error;
      }
    );
  }

  return globalThis.__shikiHighlighterPromise;
}

export async function highlightCode(code: string, language = 'svelte') {
  const cacheKey = `${language}:${code}`;
  const cached = highlightCache.get(cacheKey);
  if (cached) return cached;

  const highlighter = await getHighlighter();
  const html = highlighter.codeToHtml(code.replace(/\t/g, '  '), {
    lang: language,
    themes: {
      dark: 'github-dark',
      light: 'github-light-default'
    },
    defaultColor: 'dark',
    rootStyle: false,
    transformers: [
      {
        pre(node) {
          delete node.properties.style;
          node.properties.class =
            'no-scrollbar min-w-0 overflow-x-auto outline-none bg-transparent';
        },
        code(node) {
          node.properties['data-line-numbers'] = '';
        },
        line(node) {
          node.properties['data-line'] = '';
        }
      }
    ]
  });

  highlightCache.set(cacheKey, html);
  return html;
}

export function languageFromPath(path: string | undefined) {
  const extension = path?.split('.').pop();

  if (extension === 'svelte') return 'svelte';
  if (extension === 'ts' || extension === 'js') return 'typescript';
  if (extension === 'css') return 'css';
  if (extension === 'json') return 'json';
  if (extension === 'sh' || extension === 'bash') return 'bash';
  if (extension === 'diff') return 'diff';

  return 'svelte';
}
