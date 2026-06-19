<script lang="ts">
  import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
  import { mode } from 'mode-watcher';
  import {
    CheckCircleIcon,
    InfoIcon,
    SpinnerIcon,
    WarningIcon,
    XCircleIcon
  } from 'phosphor-svelte';

  let { ...restProps }: SonnerProps = $props();
</script>

<Sonner
  theme={mode.current}
  class="toaster group"
  style="--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border); --success-bg: var(--popover); --success-text: var(--popover-foreground); --success-border: var(--border); --error-bg: var(--popover); --error-text: var(--destructive); --error-border: var(--destructive); --warning-bg: var(--popover); --warning-text: var(--warning); --warning-border: var(--border); --info-bg: var(--popover); --info-text: var(--link); --info-border: var(--border);"
  {...restProps}
>
  {#snippet loadingIcon()}
    <SpinnerIcon class="size-4 animate-spin text-link" />
  {/snippet}
  {#snippet successIcon()}
    <CheckCircleIcon class="size-4 text-success" />
  {/snippet}
  {#snippet errorIcon()}
    <XCircleIcon class="size-4 text-destructive" />
  {/snippet}
  {#snippet infoIcon()}
    <InfoIcon class="size-4 text-link" />
  {/snippet}
  {#snippet warningIcon()}
    <WarningIcon class="size-4 text-warning" />
  {/snippet}
</Sonner>
