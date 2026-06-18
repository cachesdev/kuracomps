<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    child,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const mergedProps = $derived({
    ...restProps,
    class: cn(
      "border-zinc-800 group-has-[>[data-variant=outline]]/button-group:border-zinc-800 gap-2 border bg-background px-2.5 font-mono text-xs font-semibold tracking-widest text-zinc-400 uppercase [&_svg:not([class*='size-'])]:size-3.5 flex items-center [&_svg]:pointer-events-none",
      className
    ),
    'data-slot': 'button-group-text'
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render mergedProps.children?.()}
  </div>
{/if}
