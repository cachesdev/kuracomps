<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p
  bind:this={ref}
  data-slot="item-description"
  class={cn(
    'line-clamp-2 text-left text-sm leading-relaxed font-normal text-zinc-500 [&>a]:text-[#d0e891] [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-[#d0e891]',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</p>
