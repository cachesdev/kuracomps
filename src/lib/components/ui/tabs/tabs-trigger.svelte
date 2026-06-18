<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
  bind:ref
  data-slot="tabs-trigger"
  class={cn(
    "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-2 rounded-full border border-transparent px-4 py-1.5 font-mono text-xs font-semibold tracking-[0.12em] whitespace-nowrap text-zinc-500 uppercase transition-all hover:text-white group-data-vertical/tabs:px-4 group-data-vertical/tabs:py-2 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-300/30 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    'group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent',
    'data-active:border-[#d0e891] data-active:bg-[#b9d765] data-active:text-[#101207] dark:data-active:border-[#d0e891] dark:data-active:bg-[#b9d765] dark:data-active:text-[#101207]',
    'after:absolute after:bg-[#d0e891] after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-px group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-px group-data-[variant=line]/tabs-list:data-active:after:opacity-100',
    className
  )}
  {...restProps}
/>
