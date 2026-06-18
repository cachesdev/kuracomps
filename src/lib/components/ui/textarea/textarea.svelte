<script lang="ts">
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    'data-slot': dataSlot = 'textarea',
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
  bind:this={ref}
  data-slot={dataSlot}
  class={cn(
    'border-zinc-800 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500 focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-300/25 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 resize-none rounded-none border px-3 py-2.5 text-base transition-[color,border-color,box-shadow] md:text-sm flex field-sizing-content min-h-20 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50',
    className
  )}
  bind:value
  {...restProps}></textarea>
