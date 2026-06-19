<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import { CaretRightIcon } from 'phosphor-svelte';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

<PaginationPrimitive.NextButton
  bind:ref
  aria-label="Go to next page"
  class={cn(
    buttonVariants({ variant: 'ghost', size: 'default' }),
    'rounded-none border border-border bg-background pr-2!  text-xs font-medium  text-muted-foreground  hover:border-link hover:bg-primary hover:text-primary-foreground',
    className
  )}
  {...restProps}
>
  <span class="cn-pagination-next-text hidden sm:block">Next</span>
  <CaretRightIcon data-icon="inline-end" />
</PaginationPrimitive.NextButton>
