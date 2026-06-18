<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import type { ComponentProps } from 'svelte';

  let { children, ...restProps }: ComponentProps<typeof Tabs.Root> = $props();
</script>

<Tabs.Root value="cli" class="relative mt-6 w-full" {...restProps}>
  {@render children?.()}
</Tabs.Root>
