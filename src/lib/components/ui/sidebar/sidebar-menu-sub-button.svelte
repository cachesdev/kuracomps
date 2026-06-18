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
      'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden border border-transparent px-3 font-mono text-zinc-400 outline-hidden hover:border-[#b9d765]/50 hover:bg-[#18181b] hover:text-zinc-50 active:border-[#b9d765]/50 active:bg-[#18181b] active:text-zinc-50 data-active:border-[#b9d765]/50 data-active:bg-[#18181b] data-active:text-[#d0e891] focus-visible:ring-2 focus-visible:ring-zinc-300/60 data-[size=md]:text-xs data-[size=sm]:text-[11px] data-[size=md]:uppercase data-[size=sm]:uppercase data-[size=md]:tracking-[0.04em] data-[size=sm]:tracking-[0.04em] group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-3.5 [&>svg]:shrink-0 [&>svg]:text-[#d0e891]',
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
