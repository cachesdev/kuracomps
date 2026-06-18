<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import type Calendar from './calendar.svelte';
  import CalendarMonthSelect from './calendar-month-select.svelte';
  import CalendarYearSelect from './calendar-year-select.svelte';
  import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date';

  let {
    captionLayout,
    months,
    monthFormat,
    years,
    yearFormat,
    month,
    locale,
    placeholder = $bindable(),
    monthIndex = 0
  }: {
    captionLayout: ComponentProps<typeof Calendar>['captionLayout'];
    months: ComponentProps<typeof CalendarMonthSelect>['months'];
    monthFormat: ComponentProps<typeof CalendarMonthSelect>['monthFormat'];
    years: ComponentProps<typeof CalendarYearSelect>['years'];
    yearFormat: ComponentProps<typeof CalendarYearSelect>['yearFormat'];
    month: DateValue;
    placeholder: DateValue | undefined;
    locale: string;
    monthIndex: number;
  } = $props();

  function formatYear(date: DateValue) {
    const dateObj = date.toDate(getLocalTimeZone());
    if (typeof yearFormat === 'function') return yearFormat(dateObj.getFullYear());
    return new DateFormatter(locale, { year: yearFormat }).format(dateObj);
  }

  function formatMonth(date: DateValue) {
    const dateObj = date.toDate(getLocalTimeZone());
    if (typeof monthFormat === 'function') return monthFormat(dateObj.getMonth() + 1);
    return new DateFormatter(locale, { month: monthFormat }).format(dateObj);
  }
</script>

{#snippet MonthSelect()}
  <CalendarMonthSelect
    class="font-mono text-xs font-semibold tracking-[0.14em] uppercase"
    {months}
    {monthFormat}
    value={month.month}
    onchange={(e) => {
      if (!placeholder) return;
      const v = Number.parseInt(e.currentTarget.value);
      const newPlaceholder = placeholder.set({ month: v });
      placeholder = newPlaceholder.subtract({ months: monthIndex });
    }}
  />
{/snippet}

{#snippet YearSelect()}
  <CalendarYearSelect
    class="font-mono text-xs font-semibold tracking-[0.14em] uppercase"
    {years}
    {yearFormat}
    value={month.year}
  />
{/snippet}

{#if captionLayout === 'dropdown'}
  {@render MonthSelect()}
  {@render YearSelect()}
{:else if captionLayout === 'dropdown-months'}
  {@render MonthSelect()}
  {#if placeholder}
    <span class="font-mono text-xs font-semibold tracking-[0.14em] text-zinc-100 uppercase"
      >{formatYear(placeholder)}</span
    >
  {/if}
{:else if captionLayout === 'dropdown-years'}
  {#if placeholder}
    <span class="font-mono text-xs font-semibold tracking-[0.14em] text-zinc-100 uppercase"
      >{formatMonth(placeholder)}</span
    >
  {/if}
  {@render YearSelect()}
{:else}
  <span class="font-mono text-xs font-semibold tracking-[0.14em] text-zinc-100 uppercase"
    >{formatMonth(month)} {formatYear(month)}</span
  >
{/if}
