<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ViewportProps = $props();
</script>

<div class={cn('absolute start-0 top-full isolate z-50 flex justify-center')}>
  <NavigationMenuPrimitive.Viewport
    bind:ref
    data-slot="navigation-menu-viewport"
    class={cn(
      'relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden bg-popover text-popover-foreground ring-1 ring-foreground/10 shadow-md duration-100 data-open:animate-in data-closed:animate-out data-closed:zoom-out-90 data-open:zoom-in-90 md:w-[var(--bits-navigation-menu-viewport-width)]',
      className
    )}
    {...restProps}
  />
</div>
