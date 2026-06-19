<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.CellProps = $props();
</script>

<CalendarPrimitive.Cell
  bind:ref
  class={cn(
    'relative size-(--cell-size) border-r border-b border-border p-0 text-center text-xs focus-within:z-20 [&:first-child[data-selected]_[data-bits-day]]:rounded-s-none [&:last-child[data-selected]_[data-bits-day]]:rounded-e-none',
    className
  )}
  {...restProps}
/>
