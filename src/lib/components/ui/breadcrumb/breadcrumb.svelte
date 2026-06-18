<script lang="ts">
  import type { WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<nav
  bind:this={ref}
  data-slot="breadcrumb"
  aria-label="breadcrumb"
  class={cn('cn-breadcrumb font-mono text-[0.7rem] tracking-[0.14em]', className)}
  {...restProps}
>
  {@render children?.()}
</nav>
