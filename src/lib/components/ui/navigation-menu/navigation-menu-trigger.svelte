<script lang="ts" module>
  import { cn } from '$lib/utils.js';
  import { tv } from 'tailwind-variants';

  export const navigationMenuTriggerStyle = tv({
    base: 'inline-flex h-8 w-max items-center justify-center rounded-none px-2.5 py-1.5 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-1 data-open:bg-muted data-open:hover:bg-muted data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted disabled:pointer-events-none disabled:opacity-50 group/navigation-menu-trigger'
  });
</script>

<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import CaretDownIcon from 'phosphor-svelte/lib/CaretDownIcon';
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
