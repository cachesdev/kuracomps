<script lang="ts">
  import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
  import { mode } from 'mode-watcher';
  import SpinnerIcon from 'phosphor-svelte/lib/Spinner';
  import CheckCircleIcon from 'phosphor-svelte/lib/CheckCircle';
  import XCircleIcon from 'phosphor-svelte/lib/XCircle';
  import InfoIcon from 'phosphor-svelte/lib/Info';
  import WarningIcon from 'phosphor-svelte/lib/Warning';

  let { ...restProps }: SonnerProps = $props();
</script>

<Sonner
  theme={mode.current}
  class="toaster group"
  style="--normal-bg: #09090b; --normal-text: #fafafa; --normal-border: #222225; --success-bg: #09090b; --success-text: #fafafa; --success-border: #222225; --error-bg: #09090b; --error-text: #f85149; --error-border: rgba(209,36,47,0.6); --warning-bg: #09090b; --warning-text: #d1aa24; --warning-border: #222225; --info-bg: #09090b; --info-text: #d0e891; --info-border: #222225;"
  {...restProps}
>
  {#snippet loadingIcon()}
    <SpinnerIcon class="size-4 animate-spin text-[#d0e891]" />
  {/snippet}
  {#snippet successIcon()}
    <CheckCircleIcon class="size-4 text-[#28c840]" />
  {/snippet}
  {#snippet errorIcon()}
    <XCircleIcon class="size-4 text-[#f85149]" />
  {/snippet}
  {#snippet infoIcon()}
    <InfoIcon class="size-4 text-[#d0e891]" />
  {/snippet}
  {#snippet warningIcon()}
    <WarningIcon class="size-4 text-[#d1aa24]" />
  {/snippet}
</Sonner>
