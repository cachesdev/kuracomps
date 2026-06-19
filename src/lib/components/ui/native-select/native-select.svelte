<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import { CaretDownIcon } from 'phosphor-svelte';

  type NativeSelectProps = Omit<WithElementRef<HTMLSelectAttributes>, 'size'> & {
    size?: 'sm' | 'default';
  };

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    size = 'default',
    children,
    ...restProps
  }: NativeSelectProps = $props();
</script>

<div
  class={cn(
    'cn-native-select-wrapper group/native-select relative w-fit has-[select:disabled]:opacity-50',
    className
  )}
  data-slot="native-select-wrapper"
  data-size={size}
>
  <select
    bind:value
    bind:this={ref}
    data-slot="native-select"
    data-size={size}
    class="border-zinc-800 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500 selection:bg-[#b9d765] selection:text-[#101207] focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-300/25 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 h-9 w-full min-w-0 appearance-none rounded-none border py-2 pr-8 pl-3 text-sm transition-[color,border-color,box-shadow] select-none data-[size=sm]:h-8 outline-none disabled:pointer-events-none disabled:cursor-not-allowed"
    {...restProps}
  >
    {@render children?.()}
  </select>
  <CaretDownIcon
    class="text-zinc-500 top-1/2 right-3 size-3.5 -translate-y-1/2 pointer-events-none absolute select-none"
    aria-hidden
    data-slot="native-select-icon"
  />
</div>
