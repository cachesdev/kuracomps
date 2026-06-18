<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLThAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLThAttributes> = $props();
</script>

<th
  bind:this={ref}
  data-slot="table-head"
  class={cn(
    'h-10 border-r border-zinc-900 px-3 text-left align-middle font-mono text-xs font-semibold tracking-[0.14em] whitespace-nowrap text-zinc-500 uppercase last:border-r-0 [&:has([role=checkbox])]:pr-0',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</th>
