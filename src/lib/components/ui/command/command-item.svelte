<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import CheckIcon from 'phosphor-svelte/lib/Check';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: CommandPrimitive.ItemProps = $props();
</script>

<CommandPrimitive.Item
  bind:ref
  data-slot="command-item"
  class={cn(
    "group/command-item relative flex cursor-default items-center gap-2 border border-transparent px-2 py-1.5 font-mono text-xs uppercase tracking-[0.04em] text-zinc-300 outline-hidden select-none data-selected:border-[#b9d765]/50 data-selected:bg-[#18181b] data-selected:text-zinc-50 data-selected:*:[svg]:text-[#d0e891] data-[checked=true]:text-[#d0e891] in-data-[slot=dialog-content]:rounded-none! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    className
  )}
  {...restProps}
>
  {@render children?.()}
  <CheckIcon
    class="cn-command-item-indicator ml-auto text-[#d0e891] opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
  />
</CommandPrimitive.Item>
