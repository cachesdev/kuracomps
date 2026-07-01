<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
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
    'rounded-none border border-border bg-background pr-2!  text-xs font-medium  text-muted-foreground  hover:border-link hover:bg-primary hover:text-primary-foreground',
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
