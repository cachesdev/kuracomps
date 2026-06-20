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
  data-slot="menubar-shortcut"
  class={cn(
    'ml-auto text-[11px] text-muted-foreground/50 group-focus/menubar-item:text-link',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</span>
