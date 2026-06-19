<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    showOnHover = false,
    children,
    child,
    ...restProps
  }: WithElementRef<HTMLButtonAttributes> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
    showOnHover?: boolean;
  } = $props();

  const mergedProps = $derived({
    class: cn(
      'absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center border border-transparent p-0 text-muted-foreground/50 outline-hidden transition-colors hover:border-primary/50 hover:bg-muted hover:text-link focus-visible:ring-1 focus-visible:ring-ring/60 peer-hover/menu-button:text-link peer-data-[size=default]/menu-button:top-2 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:size-3.5 [&>svg]:shrink-0',
      showOnHover &&
        'peer-data-active/menu-button:text-link group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-open:opacity-100 md:opacity-0',
      className
    ),
    'data-slot': 'sidebar-menu-action',
    'data-sidebar': 'menu-action',
    ...restProps
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
