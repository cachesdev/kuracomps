<script lang="ts">
  import type { HTMLOlAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLOlAttributes> = $props();
</script>

<ol
  bind:this={ref}
  data-slot="breadcrumb-list"
  class={cn(
    'flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 uppercase wrap-break-word sm:gap-2.5',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</ol>
