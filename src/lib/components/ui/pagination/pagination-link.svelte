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
    'cn-pagination-link rounded-control border-border text-xs font-medium text-muted-foreground data-active:border-link data-active:bg-primary data-active:text-primary-foreground hover:bg-muted hover:text-foreground',
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
