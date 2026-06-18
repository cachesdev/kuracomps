<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.HeadCellProps = $props();
</script>

<RangeCalendarPrimitive.HeadCell
  bind:ref
  class={cn(
    'w-(--cell-size) py-1 font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-zinc-500 uppercase',
    className
  )}
  {...restProps}
/>
