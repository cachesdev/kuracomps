<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import { CaretDownIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    value,
    onchange,
    ...restProps
  }: WithoutChildrenOrChild<RangeCalendarPrimitive.MonthSelectProps> = $props();
</script>

<span
  class={cn(
    'relative flex h-(--cell-size) border border-border bg-muted text-foreground has-focus:border-ring has-focus:ring-1 has-focus:ring-ring/50',
    className
  )}
>
  <RangeCalendarPrimitive.MonthSelect bind:ref class="absolute inset-0 opacity-0" {...restProps}>
    {#snippet child({ props, monthItems, selectedMonthItem })}
      <select {...props} {value} {onchange}>
        {#each monthItems as monthItem (monthItem.value)}
          <option
            value={monthItem.value}
            selected={value !== undefined
              ? monthItem.value === value
              : monthItem.value === selectedMonthItem.value}
          >
            {monthItem.label}
          </option>
        {/each}
      </select>
      <span
        class="flex h-full items-center gap-1 ps-2 pe-1 text-sm font-medium text-foreground select-none [&>svg]:size-3.5 [&>svg]:text-muted-foreground"
        aria-hidden="true"
      >
        {monthItems.find((item) => item.value === value)?.label || selectedMonthItem.label}
        <CaretDownIcon class={cn('size-4', className)} />
      </span>
    {/snippet}
  </RangeCalendarPrimitive.MonthSelect>
</span>
