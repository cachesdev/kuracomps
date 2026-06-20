<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    inset,
    class: className,
    ...restProps
  }: ComponentProps<typeof MenubarPrimitive.GroupHeading> & {
    inset?: boolean;
  } = $props();
</script>

<MenubarPrimitive.GroupHeading
  bind:ref
  data-slot="menubar-group-heading"
  data-inset={inset}
  class={cn(
    'px-2 py-1 text-xs font-medium text-muted-foreground/50 data-inset:pl-7 data-[inset]:ps-7',
    className
  )}
  {...restProps}
/>
