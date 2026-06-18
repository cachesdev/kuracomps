<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p
  bind:this={ref}
  data-slot="field-description"
  class={cn(
    'text-zinc-500 text-left text-sm tracking-normal normal-case [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
    'last:mt-0 nth-last-2:-mt-1',
    '[&>a]:text-[#d0e891] [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-zinc-50',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</p>
