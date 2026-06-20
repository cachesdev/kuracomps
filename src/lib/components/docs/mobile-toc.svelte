<script lang="ts">
  import { CaretDownIcon } from 'phosphor-svelte';

  type TocEntry = {
    title: string;
    url: string;
    items: TocEntry[];
  };

  type FlatEntry = {
    title: string;
    url: string;
    depth: number;
  };

  let { items }: { items: TocEntry[] } = $props();

  const flat = $derived.by(() => {
    const out: FlatEntry[] = [];
    function walk(entries: TocEntry[], depth: number) {
      for (const entry of entries) {
        out.push({ title: entry.title, url: entry.url, depth });
        if (entry.items?.length) walk(entry.items, depth + 1);
      }
    }
    walk(items, 1);
    return out;
  });

  let detailsEl = $state<HTMLDetailsElement | null>(null);

  function close() {
    if (detailsEl) detailsEl.open = false;
  }
</script>

{#if flat.length}
  <details class="group border-b border-border xl:hidden" bind:this={detailsEl}>
    <summary
      class="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium text-foreground"
    >
      On this page
      <CaretDownIcon
        class="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
      />
    </summary>
    <nav class="grid gap-1 pb-4 pt-1" aria-label="On this page">
      {#each flat as item (item.url)}
        <a
          href={item.url}
          onclick={close}
          class={[
            'focus-ring py-1 text-sm leading-5 text-muted-foreground transition-colors hover:text-foreground',
            item.depth >= 4 ? 'pl-6' : item.depth === 3 ? 'pl-4' : item.depth === 2 ? 'pl-2' : ''
          ]}
        >
          {item.title}
        </a>
      {/each}
    </nav>
  </details>
{/if}
