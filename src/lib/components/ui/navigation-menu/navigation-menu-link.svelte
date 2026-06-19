<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.LinkProps = $props();
</script>

<NavigationMenuPrimitive.Link
  bind:ref
  data-slot="navigation-menu-link"
  class={cn(
    "flex items-center gap-1.5 border border-transparent p-3  text-xs   text-muted-foreground outline-none transition-colors hover:border-primary/50 hover:bg-muted hover:text-foreground focus:border-primary/50 focus:bg-muted focus:text-foreground focus-visible:ring-1 focus-visible:ring-ring/60 focus-visible:outline-1 data-[active=true]:border-primary/50 data-[active=true]:bg-muted data-[active=true]:text-link data-[active=true]:focus:bg-muted data-[active=true]:hover:bg-muted in-data-[slot=navigation-menu-content]:rounded-none [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
/>
