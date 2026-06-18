<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="popover-header"
  class={cn('flex flex-col gap-1 border-b border-[#222225] pb-3 text-sm', className)}
  {...restProps}
>
  {@render children?.()}
</div>
