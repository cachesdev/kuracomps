<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import CheckIcon from 'phosphor-svelte/lib/CheckIcon';

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
    "relative flex cursor-default items-center gap-2 border border-transparent py-1 pr-8 pl-2 text-xs font-medium text-muted-foreground outline-hidden select-none focus:border-primary/50 focus:bg-muted focus:text-foreground data-[checked=true]:text-link data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked })}
    <span class="pointer-events-none absolute right-2 text-link">
      {#if checked}
        <CheckIcon />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</ContextMenuPrimitive.CheckboxItem>
