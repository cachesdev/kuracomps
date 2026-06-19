<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';
  import { CaretRightIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    inset = undefined,
    children,
    ...restProps
  }: WithoutChild<MenubarPrimitive.SubTriggerProps> & {
    inset?: boolean;
  } = $props();
</script>

<MenubarPrimitive.SubTrigger
  bind:ref
  data-slot="menubar-sub-trigger"
  data-inset={inset}
  class={cn(
    "flex cursor-default items-center gap-2 border border-transparent px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-300 outline-none select-none focus:border-[#b9d765]/50 focus:bg-[#18181b] focus:text-zinc-50 data-open:border-[#b9d765]/50 data-open:bg-[#18181b] data-open:text-zinc-50 data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {@render children?.()}
  <CaretRightIcon class="cn-rtl-flip ml-auto size-4 text-[#d0e891]" />
</MenubarPrimitive.SubTrigger>
