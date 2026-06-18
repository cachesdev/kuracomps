<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import MenubarPortal from './menubar-portal.svelte';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    sideOffset = 8,
    alignOffset = -4,
    align = 'start',
    side = 'bottom',
    portalProps,
    ...restProps
  }: MenubarPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof MenubarPortal>>;
  } = $props();
</script>

<MenubarPortal {...portalProps}>
  <MenubarPrimitive.Content
    bind:ref
    data-slot="menubar-content"
    {align}
    {alignOffset}
    {side}
    {sideOffset}
    class={cn(
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 z-50 min-w-36 origin-(--bits-menubar-content-transform-origin) overflow-hidden border border-[#222225] bg-[#09090b] p-1 text-zinc-50 shadow-none duration-100',
      className
    )}
    {...restProps}
  />
</MenubarPortal>
