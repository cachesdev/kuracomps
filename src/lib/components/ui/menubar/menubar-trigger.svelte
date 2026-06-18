<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.TriggerProps = $props();
</script>

<MenubarPrimitive.Trigger
  bind:ref
  data-slot="menubar-trigger"
  class={cn(
    'flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-400 outline-hidden select-none transition-colors hover:bg-zinc-50 hover:text-zinc-950 aria-expanded:bg-zinc-50 aria-expanded:text-zinc-950',
    className
  )}
  {...restProps}
/>
