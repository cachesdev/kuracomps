<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { type WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    inset,
    children,
    class: className,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> & {
    inset?: boolean;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="menubar-label"
  data-inset={inset}
  class={cn(
    'px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500 data-inset:pl-9.5',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
