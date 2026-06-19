<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { CaretRightIcon } from 'phosphor-svelte';
  import { buttonVariants, type ButtonVariant } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    variant = 'ghost',
    ...restProps
  }: CalendarPrimitive.NextButtonProps & {
    variant?: ButtonVariant;
  } = $props();
</script>

{#snippet Fallback()}
  <CaretRightIcon class={cn('size-4', className)} />
{/snippet}

<CalendarPrimitive.NextButton
  bind:ref
  class={cn(
    buttonVariants({ variant }),
    'size-(--cell-size) rounded-full border border-zinc-800 bg-transparent p-0 text-zinc-300 select-none hover:border-[#d0e891] hover:bg-[#b9d765] hover:text-[#101207] disabled:opacity-50 rtl:rotate-180',
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    {@render Fallback()}
  {/if}
</CalendarPrimitive.NextButton>
