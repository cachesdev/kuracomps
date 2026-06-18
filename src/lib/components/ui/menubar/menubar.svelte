<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.RootProps = $props();
</script>

<MenubarPrimitive.Root
  bind:ref
  data-slot="menubar"
  class={cn(
    'flex h-10 items-center gap-0.5 border border-[#222225] bg-[#09090b] p-1 text-zinc-50 shadow-none',
    className
  )}
  {...restProps}
/>
