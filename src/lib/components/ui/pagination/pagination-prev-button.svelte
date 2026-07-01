<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeftIcon';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '../button/index.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <CaretLeftIcon class={cn('size-4', className)} />
  <span>Previous</span>
{/snippet}

<PaginationPrimitive.PrevButton
  bind:ref
  aria-label="Go to previous page"
  class={cn(
    buttonVariants({ variant: 'ghost' }),
    'rounded-control border border-border bg-background pl-2! text-xs font-medium text-muted-foreground hover:border-link hover:bg-primary hover:text-primary-foreground',
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    {@render Fallback()}
  {/if}
</PaginationPrimitive.PrevButton>
