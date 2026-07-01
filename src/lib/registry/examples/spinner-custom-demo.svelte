<script lang="ts">
  import { cn } from '$lib/utils.js';
  import SpinnerGapIcon from 'phosphor-svelte/lib/SpinnerGapIcon';
  import type { ComponentProps } from 'svelte';

  type Props = ComponentProps<typeof SpinnerGapIcon>;

  let { class: className, ...restProps }: Props = $props();
</script>

<SpinnerGapIcon
  role="status"
  aria-label="Loading"
  class={cn('size-4 animate-spin', className)}
  {...restProps}
/>
