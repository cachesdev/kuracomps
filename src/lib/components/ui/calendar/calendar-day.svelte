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
    'flex size-(--cell-size) flex-col items-center justify-center gap-1 rounded-(--cell-radius) border border-transparent p-0 font-mono text-xs leading-none font-medium whitespace-nowrap text-zinc-300 select-none',
    '[&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)',
    'not-data-selected:hover:border-zinc-700 not-data-selected:hover:bg-zinc-950 not-data-selected:hover:text-white',
    '[&[data-today]:not([data-selected])]:border-[#d0e891]/60 [&[data-today]:not([data-selected])]:bg-zinc-950 [&[data-today]:not([data-selected])]:text-[#d0e891] [&[data-today][data-disabled]]:text-zinc-500',
    'data-[selected]:border-[#b9d765] data-[selected]:bg-[#b9d765] data-[selected]:text-[#101207] data-[selected]:hover:text-[#101207]',
    // Outside months
    '[&[data-outside-month]:not([data-selected])]:text-zinc-700 [&[data-outside-month]:not([data-selected])]:hover:text-zinc-400',
    // Disabled
    'data-[disabled]:pointer-events-none data-[disabled]:text-zinc-600 data-[disabled]:opacity-50',
    // Unavailable
    'data-[unavailable]:text-zinc-600 data-[unavailable]:line-through',
    // focus
    'focus:relative focus:border-zinc-300 focus:ring-2 focus:ring-zinc-300/30',
    // inner spans
    '[&>span]:text-xs [&>span]:opacity-70',
    className
  )}
  {...restProps}
/>
