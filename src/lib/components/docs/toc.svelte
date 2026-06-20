<script lang="ts">
  import { ElementRect } from 'runed';

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

  let containerEl = $state<HTMLDivElement | null>(null);
  let linkEls = $state<Record<string, HTMLAnchorElement | null>>({});
  let activeUrl = $state<string | null>(null);

  const activeEl = $derived(activeUrl ? (linkEls[activeUrl] ?? null) : null);
  const containerRect = new ElementRect(() => containerEl);
  const activeRect = new ElementRect(() => activeEl);

  const barTop = $derived(activeEl ? activeRect.top - containerRect.top : 0);
  const barHeight = $derived(activeEl ? activeRect.height : 0);

  let lastUrl: string | null = null;

  $effect(() => {
    const headings = flat
      .map((item) => {
        const id = item.url.startsWith('#') ? item.url.slice(1) : item.url;
        return { item, el: document.getElementById(id) };
      })
      .filter((h): h is { item: FlatEntry; el: HTMLElement } => h.el !== null);
    if (headings.length === 0) return;

    const headerOffset = 120;
    let ticking = false;

    function update() {
      ticking = false;
      let current: string | null = null;
      for (const { item, el } of headings) {
        if (el.getBoundingClientRect().top <= headerOffset) current = item.url;
        else break;
      }
      if (!current) current = headings[0].item.url;
      if (current !== lastUrl) {
        lastUrl = current;
        activeUrl = current;
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  });

  function indentClass(depth: number): string {
    if (depth >= 4) return 'pl-9';
    if (depth === 3) return 'pl-7';
    if (depth === 2) return 'pl-5';
    return 'pl-3';
  }
</script>

{#if flat.length}
  <div bind:this={containerEl} class="relative">
    <span
      class="pointer-events-none absolute left-0 top-0 w-0.5 bg-primary transition-[transform,height,opacity] duration-200 ease-out"
      style="transform:translateY({barTop}px);height:{barHeight}px;opacity:{activeEl ? 1 : 0}"
      aria-hidden="true"
    ></span>
    <h2 class="mb-3 text-xs font-medium text-muted-foreground">On this page</h2>
    <nav class="grid gap-1 border-l border-border pl-3" aria-label="On this page">
      {#each flat as item (item.url)}
        <a
          bind:this={linkEls[item.url]}
          href={item.url}
          data-active={activeUrl === item.url}
          class={[
            'focus-ring py-1 text-sm leading-5 transition-colors',
            activeUrl === item.url ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
            indentClass(item.depth)
          ]}
        >
          {item.title}
        </a>
      {/each}
    </nav>
  </div>
{/if}
