<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AlertDialogPrimitive.TriggerProps = $props();
</script>

<AlertDialogPrimitive.Trigger
  bind:ref
  data-slot="alert-dialog-trigger"
  class={cn(
    'outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/30',
    className
  )}
  {...restProps}
/>
