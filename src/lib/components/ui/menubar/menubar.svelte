<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.RootProps = $props();
</script>

<MenubarPrimitive.Root
  bind:ref
  data-slot="menubar"
  class={cn(
    'flex h-8 items-center gap-0.5 bg-popover p-1 text-xs text-popover-foreground ring-1 ring-foreground/10 shadow-md',
    className
  )}
  {...restProps}
/>
