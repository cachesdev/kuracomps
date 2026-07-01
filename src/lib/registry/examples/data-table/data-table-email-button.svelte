<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import ArrowsDownUpIcon from 'phosphor-svelte/lib/ArrowsDownUpIcon';
  import { Button } from '$lib/components/ui/button/index.js';

  let { variant = 'ghost', ...restProps }: ComponentProps<typeof Button> = $props();
</script>

<Button {variant} {...restProps}>
  Email
  <ArrowsDownUpIcon class="ms-2 size-4" />
</Button>
