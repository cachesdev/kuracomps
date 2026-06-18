<script lang="ts">
  import { Button, type ButtonProps } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let { ref = $bindable(null), class: className, ...restProps }: ButtonProps = $props();
</script>

<Button bind:ref type="submit" class={cn('w-full', className)} {...restProps} />
