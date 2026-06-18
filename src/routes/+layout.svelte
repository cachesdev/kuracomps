<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta
    name="description"
    content="Kura is a shadcn-svelte component warehouse for dense product screens."
  />
  <meta property="og:title" content="Kura components" />
  <meta
    property="og:description"
    content="A shadcn-svelte registry and documentation site tuned for dense product interfaces."
  />
</svelte:head>
<a
  href="#main-content"
  class="terminal-focus fixed top-3 left-3 z-70 -translate-y-16 border border-border bg-card px-3 py-2 font-mono text-xs font-semibold tracking-widest text-foreground uppercase transition-transform focus-visible:translate-y-0"
>
  Skip to content
</a>
<Tooltip.Provider>
  {@render children()}
</Tooltip.Provider>
<div class="noise-overlay" aria-hidden="true"></div>
