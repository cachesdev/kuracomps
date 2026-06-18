<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import CaretDownIcon from 'phosphor-svelte/lib/CaretDown';

  let {
    ref = $bindable(null),
    class: className,
    value,
    ...restProps
  }: WithoutChildrenOrChild<CalendarPrimitive.YearSelectProps> = $props();
</script>

<span
  class={cn(
    'relative flex border border-zinc-800 bg-zinc-950 text-zinc-100 has-focus:border-zinc-300 has-focus:ring-2 has-focus:ring-zinc-300/30',
    className
  )}
>
  <CalendarPrimitive.YearSelect
    bind:ref
    class="dark:bg-popover dark:text-popover-foreground absolute inset-0 opacity-0"
    {...restProps}
  >
    {#snippet child({ props, yearItems, selectedYearItem })}
      <select {...props} {value}>
        {#each yearItems as yearItem (yearItem.value)}
          <option
            value={yearItem.value}
            selected={value !== undefined
              ? yearItem.value === value
              : yearItem.value === selectedYearItem.value}
          >
            {yearItem.label}
          </option>
        {/each}
      </select>
      <span
        class="flex h-(--cell-size) items-center gap-1 ps-2 pe-1 text-sm font-medium text-zinc-100 select-none [&>svg]:size-3.5 [&>svg]:text-zinc-500"
        aria-hidden="true"
      >
        {yearItems.find((item) => item.value === value)?.label || selectedYearItem.label}
        <CaretDownIcon class={cn('size-4', className)} />
      </span>
    {/snippet}
  </CalendarPrimitive.YearSelect>
</span>
