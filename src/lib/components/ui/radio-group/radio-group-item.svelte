<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
  import CircleIcon from 'phosphor-svelte/lib/CircleIcon';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> = $props();
</script>

<RadioGroupPrimitive.Item
  bind:ref
  data-slot="radio-group-item"
  class={cn(
    'border-border bg-background data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50 flex size-4.5 rounded-full border focus-visible:ring-1 aria-invalid:ring-1 group/radio-group-item peer relative aspect-square shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  )}
  {...restProps}
>
  {#snippet children({ checked })}
    <div data-slot="radio-group-indicator" class="flex size-4.5 items-center justify-center">
      {#if checked}
        <CircleIcon
          class="bg-primary text-link absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      {/if}
    </div>
  {/snippet}
</RadioGroupPrimitive.Item>
