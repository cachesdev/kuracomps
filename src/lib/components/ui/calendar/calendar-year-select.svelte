<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import { CaretDownIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    value,
    ...restProps
  }: WithoutChildrenOrChild<CalendarPrimitive.YearSelectProps> = $props();
</script>

<span
  class={cn(
    'relative flex h-(--cell-size) border border-border bg-muted text-foreground has-focus:border-ring has-focus:ring-1 has-focus:ring-ring/50',
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
        class="flex h-full items-center gap-1 ps-2 pe-1 text-sm font-medium text-foreground select-none [&>svg]:size-3.5 [&>svg]:text-muted-foreground"
        aria-hidden="true"
      >
        {yearItems.find((item) => item.value === value)?.label || selectedYearItem.label}
        <CaretDownIcon class={cn('size-4', className)} />
      </span>
    {/snippet}
  </CalendarPrimitive.YearSelect>
</span>
