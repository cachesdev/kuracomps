<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { CaretRightIcon } from 'phosphor-svelte';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '../button/index.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
  <span>Next</span>
  <CaretRightIcon class={cn('size-4', className)} />
{/snippet}

<PaginationPrimitive.NextButton
  bind:ref
  aria-label="Go to next page"
  class={cn(
    buttonVariants({ variant: 'ghost' }),
    'rounded-full border border-zinc-800 bg-background pr-2! font-mono text-xs font-semibold tracking-[0.08em] text-zinc-400 uppercase hover:border-[#d0e891] hover:bg-[#b9d765] hover:text-[#101207]',
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    {@render Fallback()}
  {/if}
</PaginationPrimitive.NextButton>
