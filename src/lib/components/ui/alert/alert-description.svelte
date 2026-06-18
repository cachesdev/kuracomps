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
  data-slot="alert-description"
  class={cn(
    'text-sm leading-relaxed text-zinc-400 text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:text-[#d0e891] [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-zinc-50',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
