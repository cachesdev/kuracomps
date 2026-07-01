<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
  import { UseClipboard } from '$lib/hooks/use-clipboard.svelte.js';
  import { cn } from '$lib/utils.js';
  import CheckIcon from 'phosphor-svelte/lib/CheckIcon';
  import CopyIcon from 'phosphor-svelte/lib/CopyIcon';
  import type { ComponentProps } from 'svelte';

  let {
    text,
    variant = 'ghost',
    placement = 'absolute',
    class: className,
    ...restProps
  }: ComponentProps<typeof Button> & {
    text: string;
    placement?: 'absolute' | 'inline';
  } = $props();

  const clipboard = new UseClipboard();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rp = $derived(restProps as any);
</script>

<Tooltip.Root disableCloseOnTriggerClick>
  <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
  <Tooltip.Trigger
    {...rp}
    class={cn(
      placement === 'absolute'
        ? 'absolute end-2 top-1 z-10 size-7 bg-code hover:opacity-100 focus-visible:opacity-100'
        : 'static size-7 bg-transparent hover:opacity-100 focus-visible:opacity-100',
      className
    )}
    onclick={() => clipboard.copy(text)}
  >
    {#snippet child({ props })}
      <Button {...props} data-slot="copy-button" size="icon" {variant}>
        <span class="sr-only" data-llm-ignore>Copy</span>
        {#if clipboard.copied}
          <CheckIcon />
        {:else}
          <CopyIcon />
        {/if}
      </Button>
    {/snippet}
  </Tooltip.Trigger>
  <Tooltip.Content>
    {clipboard.copied ? 'Copied' : 'Copy to Clipboard'}
  </Tooltip.Content>
</Tooltip.Root>
