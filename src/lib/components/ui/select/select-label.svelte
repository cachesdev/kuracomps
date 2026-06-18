<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {} = $props();
</script>

<div
  bind:this={ref}
  data-slot="select-label"
  class={cn(
    'border-b border-zinc-900 px-3 py-2 font-mono text-[0.625rem] font-semibold tracking-widest text-zinc-500 uppercase',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
