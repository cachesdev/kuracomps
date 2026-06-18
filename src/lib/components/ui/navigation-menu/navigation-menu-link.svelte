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
    "flex items-center gap-1.5 border border-transparent p-3 font-mono text-xs uppercase tracking-[0.04em] text-zinc-400 outline-none transition-colors hover:border-[#b9d765]/50 hover:bg-[#18181b] hover:text-zinc-50 focus:border-[#b9d765]/50 focus:bg-[#18181b] focus:text-zinc-50 focus-visible:ring-2 focus-visible:ring-zinc-300/60 focus-visible:outline-1 data-[active=true]:border-[#b9d765]/50 data-[active=true]:bg-[#18181b] data-[active=true]:text-[#d0e891] data-[active=true]:focus:bg-[#18181b] data-[active=true]:hover:bg-[#18181b] in-data-[slot=navigation-menu-content]:rounded-none [&_svg:not([class*='size-'])]:size-3.5",
    className
  )}
  {...restProps}
/>
