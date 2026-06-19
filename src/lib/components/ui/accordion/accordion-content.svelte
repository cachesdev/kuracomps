<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
  bind:ref
  data-slot="accordion-content"
  class="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm text-muted-foreground"
  {...restProps}
>
  <div
    class={cn(
      'px-4 pt-0 pb-4 leading-6 [&_a]:text-link [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
      className
    )}
  >
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>
