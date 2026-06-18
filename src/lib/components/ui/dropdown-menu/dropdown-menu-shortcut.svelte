<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
  bind:this={ref}
  data-slot="dropdown-menu-shortcut"
  class={cn(
    'ml-auto font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 group-focus/dropdown-menu-item:text-[#d0e891]',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</span>
