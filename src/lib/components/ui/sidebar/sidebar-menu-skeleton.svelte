<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import { Skeleton } from '$lib/components/ui/skeleton/index.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    showIcon = false,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> & {
    showIcon?: boolean;
  } = $props();

  // Random width between 50% and 90%
  const width = `${Math.floor(Math.random() * 40) + 50}%`;
</script>

<div
  bind:this={ref}
  data-slot="sidebar-menu-skeleton"
  data-sidebar="menu-skeleton"
  class={cn('flex h-8 items-center gap-2 border border-transparent px-2', className)}
  {...restProps}
>
  {#if showIcon}
    <Skeleton class="size-3.5 rounded-none bg-muted" data-sidebar="menu-skeleton-icon" />
  {/if}
  <Skeleton
    class="h-3 max-w-(--skeleton-width) flex-1 rounded-none bg-muted"
    data-sidebar="menu-skeleton-text"
    style="--skeleton-width: {width};"
  />
  {@render children?.()}
</div>
