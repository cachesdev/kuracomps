<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    inset = undefined,
    variant = 'default',
    ...restProps
  }: MenubarPrimitive.ItemProps & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
  } = $props();
</script>

<MenubarPrimitive.Item
  bind:ref
  data-slot="menubar-item"
  data-inset={inset}
  data-variant={variant}
  class={cn(
    "flex cursor-default items-center gap-2.5 border border-transparent px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-300 outline-hidden select-none focus:border-[#b9d765]/50 focus:bg-[#18181b] focus:text-zinc-50 data-[variant=destructive]:text-[#f85149] data-[variant=destructive]:focus:bg-[#d1242f]/10 data-[variant=destructive]:focus:text-[#f85149] data-[variant=destructive]:*:[svg]:text-[#f85149]! not-data-[variant=destructive]:focus:**:text-[#d0e891] data-disabled:opacity-50 data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-3.5 group/menubar-item",
    className
  )}
  {...restProps}
/>
