<script lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CollapsiblePrimitive.TriggerProps = $props();
</script>

<CollapsiblePrimitive.Trigger
  bind:ref
  data-slot="collapsible-trigger"
  class={cn(
    'flex w-full items-center justify-between border-b border-zinc-900 px-3 py-2 font-mono text-xs font-semibold tracking-[0.14em] text-zinc-300 uppercase transition-colors hover:bg-zinc-950 hover:text-white focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:outline-none',
    className
  )}
  {...restProps}
/>
