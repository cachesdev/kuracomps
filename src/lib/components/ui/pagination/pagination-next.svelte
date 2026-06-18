<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRight';

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
    'rounded-full border border-zinc-800 bg-background pr-2! font-mono text-xs font-semibold tracking-[0.08em] text-zinc-400 uppercase hover:border-[#d0e891] hover:bg-[#b9d765] hover:text-[#101207]',
    className
  )}
  {...restProps}
>
  <span class="cn-pagination-next-text hidden sm:block">Next</span>
  <CaretRightIcon data-icon="inline-end" />
</PaginationPrimitive.NextButton>
