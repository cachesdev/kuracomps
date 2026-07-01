<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
  import { buttonVariants, type ButtonVariant } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    variant = 'ghost',
    ...restProps
  }: RangeCalendarPrimitive.NextButtonProps & {
    variant?: ButtonVariant;
  } = $props();
</script>

{#snippet Fallback()}
  <CaretRightIcon class={cn('size-4', className)} />
{/snippet}

<RangeCalendarPrimitive.NextButton
  bind:ref
  class={cn(
    buttonVariants({ variant }),
    'size-(--cell-size) rounded-none border border-border bg-transparent p-0 text-muted-foreground select-none hover:border-link hover:bg-primary hover:text-primary-foreground disabled:opacity-50 rtl:rotate-180',
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    {@render Fallback()}
  {/if}
</RangeCalendarPrimitive.NextButton>
