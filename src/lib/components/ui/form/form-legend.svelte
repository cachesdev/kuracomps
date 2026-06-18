<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LegendProps> = $props();
</script>

<FormPrimitive.Legend
  bind:ref
  data-slot="form-legend"
  class={cn(
    'font-mono text-xs leading-none font-semibold tracking-widest text-zinc-100 uppercase data-[fs-error]:text-destructive',
    className
  )}
  {...restProps}
/>
