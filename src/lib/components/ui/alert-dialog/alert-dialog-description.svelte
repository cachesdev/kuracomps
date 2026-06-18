<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AlertDialogPrimitive.DescriptionProps = $props();
</script>

<AlertDialogPrimitive.Description
  bind:ref
  data-slot="alert-dialog-description"
  class={cn(
    'mt-0.5 text-sm leading-relaxed text-zinc-400 text-balance md:text-pretty *:[a]:text-[#d0e891] *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-zinc-50',
    className
  )}
  {...restProps}
/>
