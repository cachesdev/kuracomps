<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeft';

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
    'rounded-full border border-zinc-800 bg-background pl-2! font-mono text-xs font-semibold tracking-[0.08em] text-zinc-400 uppercase hover:border-[#d0e891] hover:bg-[#b9d765] hover:text-[#101207]',
    className
  )}
  {...restProps}
>
  <CaretLeftIcon data-icon="inline-start" />
  <span class="cn-pagination-previous-text hidden sm:block">Previous</span>
</PaginationPrimitive.PrevButton>
