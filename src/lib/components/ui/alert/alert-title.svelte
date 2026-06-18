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
  data-slot="alert-title"
  class={cn(
    'font-mono text-xs font-semibold uppercase tracking-[0.08em] text-zinc-50 group-has-[>svg]/alert:col-start-2 [&_a]:text-[#d0e891] [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-zinc-50',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
