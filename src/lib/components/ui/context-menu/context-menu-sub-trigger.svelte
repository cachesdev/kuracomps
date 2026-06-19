<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';
  import { CaretRightIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...restProps
  }: WithoutChild<ContextMenuPrimitive.SubTriggerProps> & {
    inset?: boolean;
  } = $props();
</script>

<ContextMenuPrimitive.SubTrigger
  bind:ref
  data-slot="context-menu-sub-trigger"
  data-inset={inset}
  class={cn(
    "flex cursor-default items-center border border-transparent px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-300 outline-hidden select-none focus:border-[#b9d765]/50 focus:bg-[#18181b] focus:text-zinc-50 data-open:border-[#b9d765]/50 data-open:bg-[#18181b] data-open:text-zinc-50 data-inset:pl-9.5 data-inset:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {@render children?.()}
  <CaretRightIcon class="ml-auto text-[#d0e891]" />
</ContextMenuPrimitive.SubTrigger>
