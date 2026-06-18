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
  data-slot="empty-description"
  class={cn(
    'mt-0.5 text-sm/relaxed text-zinc-500 [&>a]:text-[#d0e891] [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-[#d0e891]',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
