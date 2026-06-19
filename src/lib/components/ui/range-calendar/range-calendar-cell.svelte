<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.CellProps = $props();
</script>

<RangeCalendarPrimitive.Cell
  bind:ref
  class={cn(
    'relative size-(--cell-size) border-r border-b border-border p-0 text-center text-xs focus-within:z-20 data-[range-middle]:rounded-e-none [&:has([data-range-middle])]:bg-primary/20 [&:has([data-selected])]:bg-primary/15 [&:first-child[data-selected]_[data-bits-day]]:rounded-s-none [&:has([data-range-end])]:rounded-e-none [&:has([data-range-middle])]:rounded-none first:[&:has([data-range-middle])]:rounded-s-none last:[&:has([data-range-middle])]:rounded-e-none [&:has([data-range-start])]:rounded-s-none [&:last-child[data-selected]_[data-bits-day]]:rounded-e-none',
    className
  )}
  {...restProps}
/>
