<script lang="ts" module>
  export type TocEntry = {
    title: string;
    url: string;
    items?: TocEntry[];
  };

  export type FlatTocEntry = {
    title: string;
    url: string;
    depth: number;
    index: number;
  };

  export type TocActiveChange = {
    item: FlatTocEntry | null;
    index: number;
    progress: number;
    total: number;
  };

  export function flattenToc(items: TocEntry[]): FlatTocEntry[] {
    const out: FlatTocEntry[] = [];

    function walk(entries: TocEntry[], depth: number) {
      for (const entry of entries) {
        out.push({
          title: entry.title,
          url: entry.url,
          depth,
          index: out.length
        });

        if (entry.items?.length) walk(entry.items, depth + 1);
      }
    }

    walk(items, 1);
    return out;
  }
</script>

<script lang="ts">
  import { on } from 'svelte/events';
  import type { ClassValue } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  type Segment = {
    top: number;
    bottom: number;
    x: number;
  };

  type PathDistance = {
    top: number;
    bottom: number;
  };

  const thumbSize = 5;

  type Props = {
    items: TocEntry[];
    ariaLabel?: string;
    class?: ClassValue;
    navClass?: ClassValue;
    linkClass?: ClassValue;
    headerOffset?: number;
    enabled?: boolean;
    onactivechange?: (details: TocActiveChange) => void;
    onclickitem?: () => void;
  };

  let {
    items,
    ariaLabel = 'On this page',
    class: className,
    navClass,
    linkClass,
    headerOffset = 120,
    enabled = true,
    onactivechange,
    onclickitem
  }: Props = $props();

  const flat = $derived(flattenToc(items));

  let containerEl = $state<HTMLElement | null>(null);
  let linkEls = $state<Record<string, HTMLAnchorElement | null>>({});
  let activeUrl = $state<string | null>(null);
  let activeRangeStartUrl = $state<string | null>(null);
  let activeRangeEndUrl = $state<string | null>(null);
  let trackPath = $state('');
  let trackWidth = $state(0);
  let trackHeight = $state(0);
  let segments = $state<Record<string, Segment>>({});
  let pathDistances = $state<Record<string, PathDistance>>({});
  let thumbEdge = $state<'start' | 'end'>('end');

  const activeIndex = $derived(flat.findIndex((item) => item.url === activeUrl));
  const activeItem = $derived(activeIndex >= 0 ? flat[activeIndex] : null);
  const activeSegment = $derived(activeUrl ? (segments[activeUrl] ?? null) : null);
  const activeDistance = $derived(activeUrl ? (pathDistances[activeUrl] ?? null) : null);
  const activeRangeStartIndex = $derived(
    flat.findIndex((item) => item.url === activeRangeStartUrl)
  );
  const activeRangeEndIndex = $derived(flat.findIndex((item) => item.url === activeRangeEndUrl));
  const rangeStartSegment = $derived(
    activeRangeStartUrl ? (segments[activeRangeStartUrl] ?? null) : null
  );
  const rangeEndSegment = $derived(
    activeRangeEndUrl ? (segments[activeRangeEndUrl] ?? null) : null
  );
  const rangeStartDistance = $derived(
    activeRangeStartUrl ? (pathDistances[activeRangeStartUrl] ?? null) : null
  );
  const rangeEndDistance = $derived(
    activeRangeEndUrl ? (pathDistances[activeRangeEndUrl] ?? null) : null
  );
  const thumbDistanceSegment = $derived(
    thumbEdge === 'start'
      ? (rangeStartDistance ?? activeDistance)
      : (rangeEndDistance ?? activeDistance)
  );
  const hasThumb = $derived(thumbDistanceSegment !== null);
  const thumbDistance = $derived(
    thumbDistanceSegment
      ? thumbEdge === 'start'
        ? thumbDistanceSegment.top
        : thumbDistanceSegment.bottom
      : 0
  );
  const progress = $derived(flat.length ? (Math.max(activeIndex, 0) + 1) / flat.length : 0);
  const clipTop = $derived((rangeStartSegment ?? activeSegment)?.top ?? 0);
  const clipBottom = $derived((rangeEndSegment ?? activeSegment)?.bottom ?? 0);
  const clipPath = $derived(
    clipBottom > clipTop
      ? `polygon(0 ${clipTop}px, 100% ${clipTop}px, 100% ${clipBottom}px, 0 ${clipBottom}px)`
      : 'polygon(0 0, 100% 0, 100% 0, 0 0)'
  );

  let lastActiveUrl: string | null = null;
  let lastScrollY = 0;

  function headingId(url: string): string {
    return url.startsWith('#') ? url.slice(1) : url;
  }

  function lineX(depth: number): number {
    if (depth <= 1) return 8;
    if (depth === 2) return 16;
    if (depth === 3) return 24;
    return 32;
  }

  function itemOffset(depth: number): number {
    return lineX(depth) + 16;
  }

  function itemStyle(depth: number): string {
    return `padding-inline-start:${itemOffset(depth)}px`;
  }

  function pathDistanceAtY(
    path: SVGPathElement,
    totalLength: number,
    targetY: number,
    start: number
  ) {
    let min = start;
    let max = totalLength;

    for (let i = 0; i < 24; i++) {
      const mid = (min + max) / 2;
      if (path.getPointAtLength(mid).y < targetY) min = mid;
      else max = mid;
    }

    return max;
  }

  function measurePathDistances(d: string, nextSegments: Record<string, Segment>) {
    if (!d) return {};

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);

    const totalLength = path.getTotalLength();
    let cursor = 0;
    const nextDistances: Record<string, PathDistance> = {};

    for (const item of flat) {
      const segment = nextSegments[item.url];
      if (!segment) continue;

      const top = pathDistanceAtY(path, totalLength, segment.top, cursor);
      const bottom = pathDistanceAtY(path, totalLength, segment.bottom, top);

      nextDistances[item.url] = { top, bottom };
      cursor = bottom;
    }

    return nextDistances;
  }

  function updateGeometry() {
    const container = containerEl;
    if (!container || flat.length === 0) {
      trackPath = '';
      trackWidth = 0;
      trackHeight = 0;
      segments = {};
      pathDistances = {};
      return;
    }

    let d = '';
    let width = 0;
    let height = 0;
    let previous: Segment | null = null;
    const nextSegments: Record<string, Segment> = {};

    for (const item of flat) {
      const link = linkEls[item.url];
      if (!link) continue;

      const styles = getComputedStyle(link);
      const x = lineX(item.depth) + 0.5;
      const top = link.offsetTop + parseFloat(styles.paddingTop || '0');
      const bottom = link.offsetTop + link.clientHeight - parseFloat(styles.paddingBottom || '0');
      const segment = { top, bottom, x };

      width = Math.max(width, x + 8);
      height = Math.max(height, bottom);

      if (!previous) {
        d += `M ${x} ${top} L ${x} ${bottom}`;
      } else if (previous.x === x) {
        d += ` L ${x} ${top} L ${x} ${bottom}`;
      } else {
        d += ` C ${previous.x} ${top - 4} ${x} ${previous.bottom + 4} ${x} ${top} L ${x} ${bottom}`;
      }

      nextSegments[item.url] = segment;
      previous = segment;
    }

    trackPath = d;
    trackWidth = width;
    trackHeight = height;
    segments = nextSegments;
    pathDistances = measurePathDistances(d, nextSegments);
  }

  function visibleHeadings(
    headings: { item: FlatTocEntry; el: HTMLElement }[],
    isAtBottom: boolean
  ) {
    const viewportTop = headerOffset;
    const viewportBottom = window.innerHeight;
    const visible = headings.filter(({ el }) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= viewportBottom && rect.bottom >= viewportTop;
    });

    if (isAtBottom) {
      const last = headings[headings.length - 1];
      if (last && visible[visible.length - 1]?.item.url !== last.item.url) visible.push(last);
    }

    return visible;
  }

  function updateActiveRange(
    headings: { item: FlatTocEntry; el: HTMLElement }[],
    current: string | null,
    isAtBottom: boolean
  ) {
    const visible = visibleHeadings(headings, isAtBottom);
    const first = visible[0]?.item.url ?? current;
    const last = visible[visible.length - 1]?.item.url ?? current;

    if (activeRangeStartUrl !== first) activeRangeStartUrl = first;
    if (activeRangeEndUrl !== last) activeRangeEndUrl = last;
  }

  function itemIsActive(item: FlatTocEntry): boolean {
    if (activeRangeStartIndex === -1 || activeRangeEndIndex === -1) return activeUrl === item.url;
    return item.index >= activeRangeStartIndex && item.index <= activeRangeEndIndex;
  }

  function updateActive(headings: { item: FlatTocEntry; el: HTMLElement }[]) {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY) thumbEdge = 'end';
    else if (scrollY < lastScrollY) thumbEdge = 'start';
    lastScrollY = scrollY;

    const scrollBottom = scrollY + window.innerHeight;
    const documentHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const isAtBottom = documentHeight - scrollBottom <= 2;
    let current = headings[0]?.item.url ?? null;

    if (isAtBottom) {
      current = headings[headings.length - 1]?.item.url ?? current;
    } else {
      for (const { item, el } of headings) {
        if (el.getBoundingClientRect().top <= headerOffset) current = item.url;
        else break;
      }
    }

    updateActiveRange(headings, current, isAtBottom);

    if (current && current !== lastActiveUrl) {
      lastActiveUrl = current;
      activeUrl = current;
    }
  }

  function scrollableAncestor(element: HTMLElement): HTMLElement | null {
    let parent = element.parentElement;

    while (parent) {
      const styles = getComputedStyle(parent);
      const canScroll = /(auto|scroll)/.test(styles.overflowY);

      if (canScroll && parent.scrollHeight > parent.clientHeight) return parent;
      parent = parent.parentElement;
    }

    return null;
  }

  function keepActiveItemVisible(link: HTMLAnchorElement) {
    const scrollParent = scrollableAncestor(link);
    if (!scrollParent) return;

    const parentRect = scrollParent.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const padding = 24;
    let nextScrollTop = scrollParent.scrollTop;

    if (linkRect.top < parentRect.top + padding) {
      nextScrollTop -= parentRect.top + padding - linkRect.top;
    } else if (linkRect.bottom > parentRect.bottom - padding) {
      nextScrollTop += linkRect.bottom - (parentRect.bottom - padding);
    } else {
      return;
    }

    scrollParent.scrollTo({
      top: nextScrollTop,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  }

  $effect(() => {
    if (!enabled) return;

    const headings = flat
      .map((item) => ({ item, el: document.getElementById(headingId(item.url)) }))
      .filter((h): h is { item: FlatTocEntry; el: HTMLElement } => h.el !== null);

    if (headings.length === 0) return;

    let ticking = false;

    function requestUpdate() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        updateActive(headings);
      });
    }

    updateActive(headings);

    const cleanupScroll = on(window, 'scroll', requestUpdate, { passive: true });
    const cleanupResize = on(
      window,
      'resize',
      () => {
        updateGeometry();
        requestUpdate();
      },
      { passive: true }
    );

    return () => {
      cleanupScroll();
      cleanupResize();
    };
  });

  $effect(() => {
    if (!enabled) return;

    const link = activeUrl ? linkEls[activeUrl] : null;
    if (!link) return;

    requestAnimationFrame(() => keepActiveItemVisible(link));
  });

  $effect(() => {
    if (!enabled) return;

    const container = containerEl;
    const itemCount = flat.length;

    if (!container || itemCount === 0) return;

    const observer = new ResizeObserver(updateGeometry);
    observer.observe(container);
    updateGeometry();

    return () => observer.disconnect();
  });

  $effect(() => {
    if (!enabled) return;

    onactivechange?.({
      item: activeItem,
      index: activeIndex,
      progress,
      total: flat.length
    });
  });
</script>

{#if flat.length}
  <nav
    bind:this={containerEl}
    class={cn('relative min-w-0 py-1', className)}
    aria-label={ariaLabel}
    data-toc-list
  >
    {#if trackPath && trackWidth && trackHeight}
      <div
        class="pointer-events-none absolute top-1 left-0 origin-center"
        style="width:{trackWidth}px;height:{trackHeight}px"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${trackWidth} ${trackHeight}`}
          class="absolute inset-0 overflow-visible"
          style="width:{trackWidth}px;height:{trackHeight}px"
        >
          <path d={trackPath} class="stroke-border/90" stroke-width="1" fill="none" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${trackWidth} ${trackHeight}`}
          class="absolute inset-0 overflow-visible transition-[clip-path] duration-200 ease-out motion-reduce:transition-none"
          style="width:{trackWidth}px;height:{trackHeight}px;clip-path:{clipPath}"
        >
          <path d={trackPath} class="stroke-primary" stroke-width="1" fill="none" />
        </svg>
        <span
          class={[
            'absolute top-0 left-0 rounded-full bg-primary transition-[offset-distance,opacity] duration-200 ease-out motion-reduce:transition-none',
            hasThumb ? 'opacity-100' : 'opacity-0'
          ]}
          style={`width:${thumbSize}px;height:${thumbSize}px;offset-path:path("${trackPath}");offset-distance:${thumbDistance}px;offset-anchor:50% 50%;offset-rotate:0deg;will-change:offset-distance`}
        ></span>
      </div>
    {/if}

    <div class={cn('relative z-1 flex flex-col gap-0.5', navClass)}>
      {#each flat as item (item.url)}
        <a
          bind:this={linkEls[item.url]}
          href={item.url}
          data-active={itemIsActive(item)}
          aria-current={item.url === activeUrl ? 'location' : undefined}
          onclick={onclickitem}
          class={cn(
            'focus-ring relative py-1.5 text-sm leading-5 text-muted-foreground transition-colors hover:text-foreground data-active:text-primary',
            linkClass
          )}
          style={itemStyle(item.depth)}
        >
          {item.title}
        </a>
      {/each}
    </div>
  </nav>
{/if}
