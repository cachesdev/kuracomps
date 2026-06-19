<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Calendar as CalendarPrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.DayProps = $props();
</script>

<CalendarPrimitive.Day
  bind:ref
  class={cn(
    'flex size-(--cell-size) flex-col items-center justify-center gap-1 rounded-none border border-transparent p-0 text-xs font-medium leading-none whitespace-nowrap text-muted-foreground select-none',
    '[&:last-child[data-selected=true]_button]:rounded-r-none',
    'not-data-selected:hover:border-border not-data-selected:hover:bg-muted not-data-selected:hover:text-foreground',
    '[&[data-today]:not([data-selected])]:border-link/60 [&[data-today]:not([data-selected])]:bg-muted [&[data-today]:not([data-selected])]:text-link [&[data-today][data-disabled]]:text-muted-foreground',
    'data-[selected]:border-primary data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:text-primary-foreground',
    // Outside months
    '[&[data-outside-month]:not([data-selected])]:text-muted-foreground/50 [&[data-outside-month]:not([data-selected])]:hover:text-muted-foreground',
    // Disabled
    'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground/50 data-[disabled]:opacity-50',
    // Unavailable
    'data-[unavailable]:text-muted-foreground/50 data-[unavailable]:line-through',
    // focus
    'focus:relative focus:border-ring focus:ring-1 focus:ring-ring/50',
    // inner spans
    '[&>span]:text-xs [&>span]:opacity-70',
    className
  )}
  {...restProps}
/>
