<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    children,
    child,
    class: className,
    size = 'md',
    isActive = false,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
    size?: 'sm' | 'md';
    isActive?: boolean;
  } = $props();

  const mergedProps = $derived({
    class: cn(
      'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden border border-transparent px-3  text-muted-foreground outline-hidden hover:border-primary/50 hover:bg-muted hover:text-foreground active:border-primary/50 active:bg-muted active:text-foreground data-active:border-primary/50 data-active:bg-muted data-active:text-link focus-visible:ring-1 focus-visible:ring-ring/60 data-[size=md]:text-xs data-[size=sm]:text-[11px] data-[size=md]: data-[size=sm]: data-[size=md]: data-[size=sm]: group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-3.5 [&>svg]:shrink-0 [&>svg]:text-link',
      className
    ),
    'data-slot': 'sidebar-menu-sub-button',
    'data-sidebar': 'menu-sub-button',
    'data-size': size,
    'data-active': isActive,
    ...restProps
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <a bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </a>
{/if}
