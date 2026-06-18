<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="item-title"
  class={cn(
    'line-clamp-1 flex w-fit items-center gap-2 font-mono text-xs leading-snug font-semibold tracking-[0.14em] text-zinc-100 uppercase underline-offset-4',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
