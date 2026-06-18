<script lang="ts" module>
  import { type VariantProps, tv } from 'tailwind-variants';

  export const toggleVariants = tv({
    base: "hover:text-zinc-50 aria-pressed:border-[#b9d765]/60 aria-pressed:bg-[#b9d765]/15 aria-pressed:text-zinc-50 focus-visible:border-zinc-300 focus-visible:ring-zinc-300/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1.5 rounded-full font-mono text-xs font-semibold tracking-widest uppercase transition-colors duration-200 [&_svg:not([class*='size-'])]:size-3.5 group/toggle hover:bg-zinc-900 inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    variants: {
      variant: {
        default: 'bg-transparent text-zinc-400',
        outline:
          'border border-zinc-800 bg-background text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
      },
      size: {
        default:
          'h-9 min-w-9 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4',
        sm: 'h-8 min-w-8 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        lg: 'h-10 min-w-10 px-7 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });

  export type ToggleVariant = VariantProps<typeof toggleVariants>['variant'];
  export type ToggleSize = VariantProps<typeof toggleVariants>['size'];
  export type ToggleVariants = VariantProps<typeof toggleVariants>;
</script>

<script lang="ts">
  import { Toggle as TogglePrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    pressed = $bindable(false),
    class: className,
    size = 'default',
    variant = 'default',
    ...restProps
  }: TogglePrimitive.RootProps & {
    variant?: ToggleVariant;
    size?: ToggleSize;
  } = $props();
</script>

<TogglePrimitive.Root
  bind:ref
  bind:pressed
  data-slot="toggle"
  class={cn(toggleVariants({ variant, size }), className)}
  {...restProps}
/>
