<script lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    open = $bindable(false),
    class: className,
    ...restProps
  }: CollapsiblePrimitive.RootProps = $props();
</script>

<CollapsiblePrimitive.Root
  bind:ref
  bind:open
  data-slot="collapsible"
  class={cn('border border-zinc-800 bg-background text-zinc-100', className)}
  {...restProps}
/>
