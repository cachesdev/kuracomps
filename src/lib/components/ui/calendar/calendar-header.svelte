<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.HeaderProps = $props();
</script>

<CalendarPrimitive.Header
  bind:ref
  class={cn(
    'flex h-(--cell-size) w-full items-center justify-center gap-1.5 border-b border-zinc-900 text-sm font-medium',
    className
  )}
  {...restProps}
/>
