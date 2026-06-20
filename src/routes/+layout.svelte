<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
  import { Toaster } from '$lib/components/ui/sonner/index.js';
  import { ModeWatcher } from 'mode-watcher';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="description" content="Kura is my component warehouse, for you." />
  <meta property="og:title" content="Kura components" />
  <meta property="og:description" content="Kura is my component warehouse, for you." />
</svelte:head>
<a
  href="#main-content"
  class="focus-ring fixed top-3 left-3 z-70 -translate-y-16 border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-transform focus-visible:translate-y-0"
>
  Skip to content
</a>
<ModeWatcher defaultMode="dark" />
<Tooltip.Provider>
  {@render children()}
  <Toaster />
</Tooltip.Provider>
<div class="noise-overlay" aria-hidden="true"></div>
