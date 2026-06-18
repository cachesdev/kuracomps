<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { Input } from '$lib/components/ui/input/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: ComponentProps<typeof Input> = $props();
</script>

<Input
  bind:ref
  bind:value
  data-slot="sidebar-input"
  data-sidebar="input"
  class={cn(
    'h-8 w-full border-[#222225] bg-[#18181b] font-mono text-xs text-zinc-50 shadow-[inset_0_0_0_1px_rgba(161,161,170,0.1)] placeholder:text-zinc-500',
    className
  )}
  {...restProps}
/>
