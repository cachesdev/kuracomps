<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { buttonVariants, type ButtonSize } from '$lib/components/ui/button/index.js';
  let {
    ref = $bindable(null),
    class: className,
    size = 'icon',
    isActive,
    page,
    children,
    ...restProps
  }: PaginationPrimitive.PageProps & {
    size?: ButtonSize;
    isActive: boolean;
  } = $props();
</script>

{#snippet Fallback()}
  {page.value}
{/snippet}

<PaginationPrimitive.Page
  bind:ref
  {page}
  aria-current={isActive ? 'page' : undefined}
  data-slot="pagination-link"
  data-active={isActive}
  data-size={size}
  class={cn(
    buttonVariants({ size, variant: isActive ? 'outline' : 'ghost' }),
    'cn-pagination-link rounded-full border-zinc-800 font-mono text-xs font-semibold text-zinc-400 data-active:border-[#d0e891] data-active:bg-[#b9d765] data-active:text-[#101207] hover:bg-zinc-950 hover:text-white',
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    {@render Fallback()}
  {/if}
</PaginationPrimitive.Page>
