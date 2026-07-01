<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import CaretDownIcon from 'phosphor-svelte/lib/CaretDownIcon';

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
    class="border-border bg-muted text-foreground placeholder:text-muted-foreground/50 selection:bg-primary selection:text-primary-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/25 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-control border py-1 pr-8 pl-3 text-sm transition-[color,border-color,box-shadow] select-none data-[size=sm]:h-7 outline-none disabled:pointer-events-none disabled:cursor-not-allowed"
    {...restProps}
  >
    {@render children?.()}
  </select>
  <CaretDownIcon
    class="text-muted-foreground/50 top-1/2 right-3 size-3.5 -translate-y-1/2 pointer-events-none absolute select-none"
    aria-hidden
    data-slot="native-select-icon"
  />
</div>
