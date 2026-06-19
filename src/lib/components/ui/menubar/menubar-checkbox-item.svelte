<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import { CheckIcon, MinusIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    checked = $bindable(false),
    indeterminate = $bindable(false),
    inset,
    children: childrenProp,
    ...restProps
  }: WithoutChildrenOrChild<MenubarPrimitive.CheckboxItemProps> & {
    inset?: boolean;
    children?: Snippet;
  } = $props();
</script>

<MenubarPrimitive.CheckboxItem
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="menubar-checkbox-item"
  data-inset={inset}
  class={cn(
    'relative flex cursor-default items-center gap-2.5 border border-transparent py-2 pr-3 pl-9.5  text-xs font-medium   text-muted-foreground outline-hidden select-none focus:border-primary/50 focus:bg-muted focus:text-foreground focus:**:text-link data-[checked=true]:text-link data-inset:pl-9.5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    className
  )}
  {...restProps}
>
  {#snippet children({ checked: checked, indeterminate: indeterminate })}
    <span
      class="pointer-events-none absolute left-3 flex size-4 items-center justify-center text-link [&_svg:not([class*='size-'])]:size-4"
    >
      {#if indeterminate}
        <MinusIcon />
      {:else if checked}
        <CheckIcon />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</MenubarPrimitive.CheckboxItem>
