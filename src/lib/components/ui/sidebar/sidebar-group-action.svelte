<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    child,
    ...restProps
  }: WithElementRef<HTMLButtonAttributes> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const mergedProps = $derived({
    class: cn(
      'absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center border border-transparent p-0 text-muted-foreground/50 outline-hidden transition-colors hover:border-primary/50 hover:bg-muted hover:text-link focus-visible:ring-1 focus-visible:ring-ring/60 group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:size-3.5 [&>svg]:shrink-0',
      className
    ),
    'data-slot': 'sidebar-group-action',
    'data-sidebar': 'group-action',
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
