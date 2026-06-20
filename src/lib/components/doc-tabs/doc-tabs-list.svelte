<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import { cn } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let { class: className, ...restProps }: ComponentProps<typeof Tabs.List> = $props();
</script>

<Tabs.List
  class={cn(
    'h-auto justify-start gap-4 rounded-none border-0 bg-transparent p-0 text-xs group-data-horizontal/tabs:h-auto',
    className
  )}
  data-llm-ignore
  {...restProps}
/>
