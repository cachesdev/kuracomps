<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
  bind:this={ref}
  data-slot="command-shortcut"
  class={cn(
    'ml-auto font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 group-data-selected/command-item:text-[#d0e891]',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</span>
