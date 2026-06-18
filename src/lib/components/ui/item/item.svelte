<script lang="ts" module>
  import { tv, type VariantProps } from 'tailwind-variants';

  export const itemVariants = tv({
    base: 'group/item flex w-full flex-wrap items-center rounded-none border bg-background text-sm text-zinc-200 outline-none transition-colors duration-100 [a]:transition-colors [a]:hover:bg-zinc-950 focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-300/30',
    variants: {
      variant: {
        default: 'border-zinc-900',
        outline: 'border-zinc-800',
        muted: 'border-zinc-900 bg-zinc-950/80'
      },
      size: {
        default: 'gap-3 px-4 py-3',
        sm: 'gap-3 px-3.5 py-2.5',
        xs: 'gap-2.5 px-3 py-2 in-data-[slot=dropdown-menu-content]:p-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });

  export type ItemSize = VariantProps<typeof itemVariants>['size'];
  export type ItemVariant = VariantProps<typeof itemVariants>['variant'];
</script>

<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    child,
    variant,
    size,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
    variant?: ItemVariant;
    size?: ItemSize;
  } = $props();

  const mergedProps = $derived({
    class: cn(itemVariants({ variant, size }), className),
    'data-slot': 'item',
    'data-variant': variant,
    'data-size': size,
    ...restProps
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render mergedProps.children?.()}
  </div>
{/if}
