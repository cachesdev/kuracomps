<script lang="ts" module>
  import { type VariantProps, tv } from 'tailwind-variants';

  export const badgeVariants = tv({
    base: 'gap-1.5 rounded-full border border-zinc-800 bg-background px-2 py-0.5 font-mono text-[0.625rem] font-semibold tracking-widest uppercase text-zinc-300 transition-colors has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! focus-visible:border-zinc-300 focus-visible:ring-zinc-300/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-2 [&>svg]:pointer-events-none',
    variants: {
      variant: {
        default: 'border-[#b9d765]/45 bg-[#b9d765]/15 text-zinc-50 [a]:hover:bg-[#b9d765]/25',
        secondary: 'border-zinc-800 bg-zinc-900 text-zinc-300 [a]:hover:text-zinc-50',
        destructive:
          'border-destructive/40 bg-destructive/10 text-destructive [a]:hover:bg-destructive/15 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline: 'border-zinc-700 bg-transparent text-zinc-50 [a]:hover:bg-zinc-900',
        ghost: 'border-transparent bg-transparent px-0 text-zinc-400 hover:text-zinc-50',
        link: 'border-transparent bg-transparent px-0 text-[#d0e891] underline-offset-4 hover:text-zinc-50 hover:underline'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  });

  export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
</script>

<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
  } = $props();
</script>

<svelte:element
  this={href ? 'a' : 'span'}
  bind:this={ref}
  data-slot="badge"
  {href}
  class={cn(badgeVariants({ variant }), className)}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
