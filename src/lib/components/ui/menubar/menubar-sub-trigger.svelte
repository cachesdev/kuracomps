<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';

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
    "flex cursor-default items-center gap-2 border border-transparent px-2 py-1 text-xs font-medium text-muted-foreground outline-none select-none focus:border-primary/50 focus:bg-muted focus:text-foreground data-open:border-primary/50 data-open:bg-muted data-open:text-foreground data-inset:pl-7 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {@render children?.()}
  <CaretRightIcon class="cn-rtl-flip ml-auto size-4 text-link" />
</MenubarPrimitive.SubTrigger>
