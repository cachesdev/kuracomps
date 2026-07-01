<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';
  import CheckIcon from 'phosphor-svelte/lib/CheckIcon';

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
    "relative flex cursor-default items-center gap-2 border border-transparent py-1 pr-3 pl-7 text-xs font-medium text-muted-foreground outline-hidden select-none focus:border-primary/50 focus:bg-muted focus:text-foreground focus:**:text-link data-[checked=true]:text-link data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked })}
    <span
      class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center text-link [&_svg:not([class*='size-'])]:size-3.5"
    >
      {#if checked}
        <CheckIcon />
      {/if}
    </span>
    {@render childrenProp?.({ checked })}
  {/snippet}
</MenubarPrimitive.RadioItem>
