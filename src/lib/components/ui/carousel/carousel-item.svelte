<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { getEmblaContext } from './context.js';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Item/>');
</script>

<div
  bind:this={ref}
  data-slot="carousel-item"
  role="group"
  aria-roledescription="slide"
  class={cn(
    'min-w-0 shrink-0 grow-0 basis-full border-border',
    emblaCtx.orientation === 'horizontal' ? 'border-l ps-px' : 'border-t pt-px',
    className
  )}
  data-embla-slide=""
  {...restProps}
>
  {@render children?.()}
</div>
