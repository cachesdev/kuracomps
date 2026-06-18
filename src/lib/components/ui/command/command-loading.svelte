<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CommandPrimitive.LoadingProps = $props();
</script>

<CommandPrimitive.Loading
  bind:ref
  class={cn('px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] text-zinc-500', className)}
  {...restProps}
/>
