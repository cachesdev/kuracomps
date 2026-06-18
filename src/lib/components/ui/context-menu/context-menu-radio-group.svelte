<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: ContextMenuPrimitive.RadioGroupProps = $props();
</script>

<ContextMenuPrimitive.RadioGroup
  bind:ref
  bind:value
  data-slot="context-menu-radio-group"
  class={cn('border-border/60 py-1 not-first:border-t', className)}
  {...restProps}
/>
