<script lang="ts">
  import { on } from 'svelte/events';
  import { CaretDownIcon } from 'phosphor-svelte';
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import TocList, { flattenToc, type TocActiveChange, type TocEntry } from './toc-list.svelte';

  let { items, title = 'On this page' }: { items: TocEntry[]; title?: string } = $props();

  const flat = $derived(flattenToc(items));
  const radius = 7;
  const circumference = 2 * Math.PI * radius;

  let open = $state(false);
  let rootEl = $state<HTMLDivElement | null>(null);
  let activeTitle = $state<string | null>(null);
  let progress = $state(0);

  const triggerLabel = $derived(open ? title : (activeTitle ?? title));
  const progressOffset = $derived(circumference - circumference * clamp(progress, 0, 1));
  const progressValue = $derived(Math.round(clamp(progress, 0, 1) * 100));

  function clamp(value: number, min: number, max: number): number {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }

  function handleActiveChange(details: TocActiveChange) {
    activeTitle = details.item?.title ?? null;
    progress = details.progress;
  }

  function close() {
    open = false;
  }

  $effect(() => {
    const root = rootEl;
    if (!root) return;

    const cleanupClick = on(document, 'click', (event) => {
      if (!open || !(event.target instanceof Node)) return;
      if (!root.contains(event.target)) open = false;
    });

    const cleanupKeydown = on(document, 'keydown', (event) => {
      if (event.key === 'Escape') open = false;
    });

    return () => {
      cleanupClick();
      cleanupKeydown();
    };
  });
</script>

{#if flat.length}
  <Collapsible.Root
    bind:open
    bind:ref={rootEl}
    class={[
      'sticky top-(--header-height) z-40 -mx-4 border-x-0 border-y border-border bg-background/94 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/80 xl:hidden',
      open && 'shadow-lg shadow-background/40'
    ]}
    data-llm-ignore
  >
    <Collapsible.Trigger
      class="h-10 border-b-0 px-4 py-0 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground"
      aria-label="Toggle table of contents"
    >
      <span class="flex min-w-0 items-center gap-2.5">
        <svg
          role="progressbar"
          aria-label="Reading progress"
          aria-valuenow={progressValue}
          aria-valuemin="0"
          aria-valuemax="100"
          viewBox="0 0 18 18"
          class={['size-4 shrink-0', open ? 'text-primary' : 'text-muted-foreground']}
        >
          <circle
            cx="9"
            cy="9"
            r={radius}
            fill="none"
            stroke-width="1.5"
            class="stroke-current/25"
          />
          <circle
            cx="9"
            cy="9"
            r={radius}
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-dasharray={circumference}
            stroke-dashoffset={progressOffset}
            stroke-linecap="round"
            transform="rotate(-90 9 9)"
            class="transition-[stroke-dashoffset] duration-200 motion-reduce:transition-none"
          />
        </svg>
        <span class="grid min-w-0 flex-1 text-left">
          <span class="truncate font-medium text-foreground">{triggerLabel}</span>
        </span>
      </span>
      <CaretDownIcon
        class={[
          'size-4 shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none',
          open && 'rotate-180 text-foreground'
        ]}
      />
    </Collapsible.Trigger>

    <Collapsible.Content
      class="overflow-hidden border-t border-border bg-background/96 p-0 text-sm text-muted-foreground data-open:animate-collapsible-down data-closed:animate-collapsible-up motion-reduce:animate-none"
    >
      <div
        class="no-scrollbar max-h-[min(54vh,28rem)] overflow-y-auto overscroll-contain px-4 py-3"
      >
        <TocList
          {items}
          headerOffset={112}
          onactivechange={handleActiveChange}
          onclickitem={close}
          navClass="gap-0.5"
          linkClass="py-1.5"
        />
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
{/if}
