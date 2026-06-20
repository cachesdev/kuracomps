// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { createHighlighterCore } from 'shiki/core';

type ShikiHighlighter = Awaited<ReturnType<typeof createHighlighterCore>>;

declare global {
  var __shikiHighlighter: ShikiHighlighter | undefined;
  var __shikiHighlighterPromise: Promise<ShikiHighlighter> | undefined;

  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
