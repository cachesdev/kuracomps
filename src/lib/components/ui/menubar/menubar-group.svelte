<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.GroupProps & {
    inset?: boolean;
  } = $props();
</script>

<MenubarPrimitive.Group
  bind:ref
  data-slot="menubar-group"
  class={cn('border-border/60 py-1 not-first:border-t', className)}
  {...restProps}
/>
