<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import SidebarIcon from 'phosphor-svelte/lib/Sidebar';
  import { cn } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';
  import { useSidebar } from './context.svelte.js';

  let {
    ref = $bindable(null),
    class: className,
    onclick,
    ...restProps
  }: ComponentProps<typeof Button> & {
    onclick?: (e: MouseEvent) => void;
  } = $props();

  const sidebar = useSidebar();
</script>

<Button
  bind:ref
  data-sidebar="trigger"
  data-slot="sidebar-trigger"
  variant="ghost"
  size="icon-sm"
  class={cn(
    'cn-sidebar-trigger rounded-full border border-[#27272a] bg-[#09090b] text-zinc-300 hover:bg-zinc-50 hover:text-zinc-950',
    className
  )}
  type="button"
  onclick={(e) => {
    onclick?.(e);
    sidebar.toggle();
  }}
  {...restProps}
>
  <SidebarIcon />
  <span class="sr-only">Toggle Sidebar</span>
</Button>
