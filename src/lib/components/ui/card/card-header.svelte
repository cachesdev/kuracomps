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
  data-slot="card-header"
  class={cn(
    'grid auto-rows-min items-start gap-1.5 border-b border-[#222225] px-8 pb-6 group-data-[size=sm]/card:px-5 group-data-[size=sm]/card:pb-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group/card-header @container/card-header',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
