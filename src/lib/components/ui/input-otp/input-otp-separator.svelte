<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { WithElementRef } from '$lib/utils.js';
  import { cn } from '$lib/utils.js';
  import MinusIcon from 'phosphor-svelte/lib/Minus';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="input-otp-separator"
  role="separator"
  class={cn("text-zinc-600 [&_svg:not([class*='size-'])]:size-3.5 flex items-center", className)}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    <MinusIcon />
  {/if}
</div>
