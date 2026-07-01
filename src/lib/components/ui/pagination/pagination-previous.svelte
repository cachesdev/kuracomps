<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeftIcon';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

<PaginationPrimitive.PrevButton
  bind:ref
  aria-label="Go to previous page"
  class={cn(
    buttonVariants({ variant: 'ghost', size: 'default' }),
    'rounded-control border border-border bg-background pl-2! text-xs font-medium text-muted-foreground hover:border-link hover:bg-primary hover:text-primary-foreground',
    className
  )}
  {...restProps}
>
  <CaretLeftIcon data-icon="inline-start" />
  <span class="cn-pagination-previous-text hidden sm:block">Previous</span>
</PaginationPrimitive.PrevButton>
