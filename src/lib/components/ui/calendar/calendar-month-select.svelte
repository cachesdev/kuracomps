<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import { CaretDownIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    value,
    onchange,
    ...restProps
  }: WithoutChildrenOrChild<CalendarPrimitive.MonthSelectProps> = $props();
</script>

<span
  class={cn(
    'relative flex border border-zinc-800 bg-zinc-950 text-zinc-100 has-focus:border-zinc-300 has-focus:ring-2 has-focus:ring-zinc-300/30',
    className
  )}
>
  <CalendarPrimitive.MonthSelect
    bind:ref
    class="bg-background dark:bg-popover dark:text-popover-foreground absolute inset-0 opacity-0"
    {...restProps}
  >
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
        class="flex h-(--cell-size) items-center gap-1 ps-2 pe-1 text-sm font-medium text-zinc-100 select-none [&>svg]:size-3.5 [&>svg]:text-zinc-500"
        aria-hidden="true"
      >
        {monthItems.find((item) => item.value === value)?.label || selectedMonthItem.label}
        <CaretDownIcon class={cn('size-4', className)} />
      </span>
    {/snippet}
  </CalendarPrimitive.MonthSelect>
</span>
