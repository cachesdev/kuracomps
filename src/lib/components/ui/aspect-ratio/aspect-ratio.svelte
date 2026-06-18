<script lang="ts">
  import { AspectRatio as AspectRatioPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AspectRatioPrimitive.RootProps = $props();
</script>

<AspectRatioPrimitive.Root
  bind:ref
  data-slot="aspect-ratio"
  class={cn('overflow-hidden border border-zinc-800 bg-background text-zinc-100', className)}
  {...restProps}
/>
