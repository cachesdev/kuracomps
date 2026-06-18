<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    inset?: boolean;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="dropdown-menu-label"
  data-inset={inset}
  class={cn(
    'px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500 data-inset:pl-9.5 data-[inset]:pl-8',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
