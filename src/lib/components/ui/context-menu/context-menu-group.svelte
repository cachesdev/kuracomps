<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ContextMenuPrimitive.GroupProps = $props();
</script>

<ContextMenuPrimitive.Group
  bind:ref
  data-slot="context-menu-group"
  class={cn('border-border/60 py-1 not-first:border-t', className)}
  {...restProps}
/>
