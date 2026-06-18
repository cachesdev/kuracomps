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
  data-slot="field-label"
  class={cn(
    'gap-2 font-mono text-xs leading-normal font-semibold tracking-widest text-zinc-100 uppercase group-data-[disabled=true]/field:opacity-50 in-data-[slot=field-label]:font-semibold flex w-fit items-center leading-snug',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
