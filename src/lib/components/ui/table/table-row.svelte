<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLTableRowElement>> = $props();
</script>

<tr
  bind:this={ref}
  data-slot="table-row"
  class={cn(
    'border-b border-zinc-900 transition-colors hover:bg-zinc-950 data-[state=selected]:bg-[#b9d765]/20',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</tr>
