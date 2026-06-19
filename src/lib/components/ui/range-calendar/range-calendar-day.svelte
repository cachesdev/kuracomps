<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.DayProps = $props();
</script>

<RangeCalendarPrimitive.Day
  bind:ref
  class={cn(
    'flex size-(--cell-size) flex-col items-center justify-center gap-1 rounded-none border border-transparent p-0 text-xs font-medium leading-none whitespace-nowrap text-muted-foreground select-none',
    'not-data-selected:hover:border-border not-data-selected:hover:bg-muted not-data-selected:hover:text-foreground',
    '[&[data-today]:not([data-selected])]:border-link/60 [&[data-today]:not([data-selected])]:bg-muted [&[data-today]:not([data-selected])]:text-link [&[data-today][data-disabled]]:text-muted-foreground data-[range-middle]:rounded-none',
    // range Start
    'data-[range-start]:border-primary data-[range-start]:bg-primary data-[range-start]:text-primary-foreground data-[range-start]:hover:text-primary-foreground',
    // range End
    'data-[range-end]:border-primary data-[range-end]:bg-primary data-[range-end]:text-primary-foreground data-[range-end]:hover:text-primary-foreground',
    // Outside months
    '[&[data-outside-month]:not([data-selected])]:text-muted-foreground/50 [&[data-outside-month]:not([data-selected])]:hover:text-muted-foreground',
    // Disabled
    'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground/50 data-[disabled]:opacity-50',
    // Unavailable
    'data-[unavailable]:line-through',
    'data-[range-middle]:bg-primary/20 data-[range-middle]:text-foreground dark:data-[range-middle]:hover:bg-primary/20',
    // focus
    'focus:relative focus:border-ring focus:ring-1 focus:ring-ring/50',
    // inner spans
    '[&>span]:text-xs [&>span]:opacity-70',
    className
  )}
  {...restProps}
/>
