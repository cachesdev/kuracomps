<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import { CaretDownIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SelectPrimitive.ScrollDownButtonProps> = $props();
</script>

<SelectPrimitive.ScrollDownButton
  bind:ref
  data-slot="select-scroll-down-button"
  class={cn(
    "bg-zinc-950 text-zinc-500 z-10 flex cursor-default items-center justify-center border-t border-zinc-900 py-1 [&_svg:not([class*='size-'])]:size-3.5 bottom-0 w-full",
    className
  )}
  {...restProps}
>
  <CaretDownIcon />
</SelectPrimitive.ScrollDownButton>
