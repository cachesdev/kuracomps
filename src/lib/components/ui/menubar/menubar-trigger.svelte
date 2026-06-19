<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.TriggerProps = $props();
</script>

<MenubarPrimitive.Trigger
  bind:ref
  data-slot="menubar-trigger"
  class={cn(
    'flex items-center rounded-none px-1.5 py-[calc(--spacing(0.8))] text-xs font-medium text-muted-foreground outline-hidden select-none transition-colors hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
    className
  )}
  {...restProps}
/>
