<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
  import { CircleIcon } from 'phosphor-svelte';
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
    'border-zinc-700 bg-background data-checked:border-[#b9d765] aria-invalid:aria-checked:border-[#b9d765] aria-invalid:border-destructive focus-visible:border-zinc-300 focus-visible:ring-zinc-300/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50 flex size-4.5 rounded-full border focus-visible:ring-2 aria-invalid:ring-2 group/radio-group-item peer relative aspect-square shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  )}
  {...restProps}
>
  {#snippet children({ checked })}
    <div data-slot="radio-group-indicator" class="flex size-4.5 items-center justify-center">
      {#if checked}
        <CircleIcon
          class="bg-[#d0e891] text-[#d0e891] absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      {/if}
    </div>
  {/snippet}
</RadioGroupPrimitive.Item>
