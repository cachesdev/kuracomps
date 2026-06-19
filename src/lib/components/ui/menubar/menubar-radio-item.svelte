<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';
  import { CheckIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children: childrenProp,
    ...restProps
  }: WithoutChild<MenubarPrimitive.RadioItemProps> & {
    inset?: boolean;
  } = $props();
</script>

<MenubarPrimitive.RadioItem
  bind:ref
  data-slot="menubar-radio-item"
  data-inset={inset}
  class={cn(
    "relative flex cursor-default items-center gap-2.5 border border-transparent py-2 pr-3 pl-9.5 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-300 outline-hidden select-none focus:border-[#b9d765]/50 focus:bg-[#18181b] focus:text-zinc-50 focus:**:text-[#d0e891] data-[checked=true]:text-[#d0e891] data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked })}
    <span
      class="pointer-events-none absolute left-3 flex size-4 items-center justify-center text-[#d0e891] [&_svg:not([class*='size-'])]:size-4"
    >
      {#if checked}
        <CheckIcon />
      {/if}
    </span>
    {@render childrenProp?.({ checked })}
  {/snippet}
</MenubarPrimitive.RadioItem>
