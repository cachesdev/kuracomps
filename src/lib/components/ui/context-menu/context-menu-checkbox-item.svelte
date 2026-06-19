<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import { CheckIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    inset,
    children: childrenProp,
    ...restProps
  }: WithoutChildrenOrChild<ContextMenuPrimitive.CheckboxItemProps> & {
    inset?: boolean;
    children?: Snippet;
  } = $props();
</script>

<ContextMenuPrimitive.CheckboxItem
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="context-menu-checkbox-item"
  data-inset={inset}
  class={cn(
    "relative flex cursor-default items-center gap-2.5 border border-transparent py-2 pr-8 pl-3 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-300 outline-hidden select-none focus:border-[#b9d765]/50 focus:bg-[#18181b] focus:text-zinc-50 data-[checked=true]:text-[#d0e891] data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked })}
    <span class="pointer-events-none absolute right-2 text-[#d0e891]">
      {#if checked}
        <CheckIcon />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</ContextMenuPrimitive.CheckboxItem>
