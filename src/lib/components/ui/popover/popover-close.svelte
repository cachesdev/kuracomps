<script lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PopoverPrimitive.CloseProps = $props();
</script>

<PopoverPrimitive.Close
  bind:ref
  data-slot="popover-close"
  class={cn(
    'outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/30',
    className
  )}
  {...restProps}
/>
