<script lang="ts">
  import { MediaQuery } from 'svelte/reactivity';
  import TocList, { type TocEntry } from './toc-list.svelte';

  let { items }: { items: TocEntry[] } = $props();

  const desktopViewport = new MediaQuery('min-width: 80rem', false);
</script>

{#if items.length}
  <div>
    <h2 class="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
      On this page
    </h2>
    <TocList {items} enabled={desktopViewport.current} />
  </div>
{/if}
