// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { createHighlighterCore } from 'shiki/core';

declare global {
  var __shikiHighlighter: Awaited<ReturnType<typeof createHighlighterCore>> | undefined;

  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
