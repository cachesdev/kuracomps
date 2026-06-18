<script lang="ts">
  import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;

  type Props = WithElementRef<
    Omit<HTMLInputAttributes, 'type'> &
      ({ type: 'file'; files?: FileList } | { type?: InputType; files?: undefined })
  >;

  let {
    ref = $bindable(null),
    value = $bindable(),
    type,
    files = $bindable(),
    class: className,
    'data-slot': dataSlot = 'input',
    ...restProps
  }: Props = $props();
</script>

{#if type === 'file'}
  <input
    bind:this={ref}
    data-slot={dataSlot}
    class={cn(
      'border-zinc-800 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500 focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-300/25 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 h-9 rounded-none border px-3 py-1 text-base transition-[color,border-color,box-shadow] file:h-7 file:text-sm file:font-medium md:text-sm file:text-zinc-50 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    type="file"
    bind:files
    bind:value
    {...restProps}
  />
{:else}
  <input
    bind:this={ref}
    data-slot={dataSlot}
    class={cn(
      'border-zinc-800 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500 focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-300/25 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 h-9 rounded-none border px-3 py-1 text-base transition-[color,border-color,box-shadow] file:h-7 file:text-sm file:font-medium md:text-sm file:text-zinc-50 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {type}
    bind:value
    {...restProps}
  />
{/if}
