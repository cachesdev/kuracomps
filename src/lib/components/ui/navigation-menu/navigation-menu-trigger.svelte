<script lang="ts" module>
  import { cn } from '$lib/utils.js';
  import { tv } from 'tailwind-variants';

  export const navigationMenuTriggerStyle = tv({
    base: 'inline-flex h-9 w-max items-center justify-center rounded-full px-4.5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.04em] text-zinc-400 outline-none transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus:bg-zinc-50 focus:text-zinc-950 focus-visible:ring-2 focus-visible:ring-zinc-300/60 focus-visible:outline-1 data-open:bg-zinc-50 data-open:text-zinc-950 data-open:hover:bg-zinc-50 data-open:focus:bg-zinc-50 data-popup-open:bg-zinc-50 data-popup-open:text-zinc-950 data-popup-open:hover:bg-zinc-50 disabled:pointer-events-none disabled:opacity-50 group/navigation-menu-trigger'
  });
</script>

<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { CaretDownIcon } from 'phosphor-svelte';
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: NavigationMenuPrimitive.TriggerProps = $props();
</script>

<NavigationMenuPrimitive.Trigger
  bind:ref
  data-slot="navigation-menu-trigger"
  class={cn(navigationMenuTriggerStyle(), 'group', className)}
  {...restProps}
>
  {@render children?.()}
  <CaretDownIcon
    class="relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180"
    aria-hidden="true"
  />
</NavigationMenuPrimitive.Trigger>
