<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CommandPrimitive.LinkItemProps = $props();
</script>

<CommandPrimitive.LinkItem
  bind:ref
  data-slot="command-item"
  class={cn(
    "relative flex cursor-default items-center gap-2 border border-transparent px-2 py-1.5 font-mono text-xs uppercase tracking-[0.04em] text-zinc-300 outline-hidden select-none aria-selected:border-[#b9d765]/50 aria-selected:bg-[#18181b] aria-selected:text-zinc-50 [&_svg:not([class*='text-'])]:text-[#d0e891] data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    className
  )}
  {...restProps}
/>
