<script lang="ts">
  import { toggleMode } from 'mode-watcher';
  import { MoonIcon, SunIcon } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="ghost"
        size="icon-sm"
        class="relative"
        aria-label="Toggle theme"
        onclick={() => toggleMode()}
      >
        <SunIcon class="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <MoonIcon
          class="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    {/snippet}
  </Tooltip.Trigger>
  <Tooltip.Content side="bottom">Toggle theme</Tooltip.Content>
</Tooltip.Root>
