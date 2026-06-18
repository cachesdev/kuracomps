<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';
  import CaretDownIcon from 'phosphor-svelte/lib/CaretDown';
  import CaretUpIcon from 'phosphor-svelte/lib/CaretUp';

  let {
    ref = $bindable(null),
    class: className,
    level = 3,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.TriggerProps> & {
    level?: AccordionPrimitive.HeaderProps['level'];
  } = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    data-slot="accordion-trigger"
    bind:ref
    class={cn(
      'focus-visible:ring-zinc-300/30 focus-visible:border-zinc-300 **:data-[slot=accordion-trigger-icon]:text-zinc-500 gap-6 rounded-none px-4 py-3 text-left font-mono text-xs font-semibold tracking-widest text-zinc-100 uppercase hover:bg-zinc-950 hover:text-white focus-visible:ring-2 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-3.5 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...restProps}
  >
    {@render children?.()}
    <CaretDownIcon
      data-slot="accordion-trigger-icon"
      class="cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
    />
    <CaretUpIcon
      data-slot="accordion-trigger-icon"
      class="cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
    />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
