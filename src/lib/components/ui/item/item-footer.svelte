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
  data-slot="item-footer"
  class={cn(
    'flex basis-full items-center justify-between gap-2 border-t border-zinc-900 pt-2 text-zinc-500',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
