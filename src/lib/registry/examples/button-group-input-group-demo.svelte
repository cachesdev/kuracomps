<script lang="ts">
  import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
  import WaveformIcon from 'phosphor-svelte/lib/WaveformIcon';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
  import * as InputGroup from '$lib/components/ui/input-group/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';

  let voiceEnabled = $state(false);
</script>

<ButtonGroup.Root class="[--radius:9999rem]">
  <ButtonGroup.Root>
    <Button variant="outline" size="icon">
      <PlusIcon />
    </Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root class="flex-1">
    <InputGroup.Root>
      <InputGroup.Input
        placeholder={voiceEnabled ? 'Record and send audio...' : 'Send a message...'}
        disabled={voiceEnabled}
      />
      <InputGroup.Addon align="inline-end">
        <Tooltip.Root>
          <Tooltip.Trigger>
            {#snippet child({ props })}
              <InputGroup.Button
                {...props}
                onclick={() => (voiceEnabled = !voiceEnabled)}
                size="icon-xs"
                data-active={voiceEnabled}
                class="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                aria-pressed={voiceEnabled}
              >
                <WaveformIcon />
              </InputGroup.Button>
            {/snippet}
          </Tooltip.Trigger>
          <Tooltip.Content>Voice Mode</Tooltip.Content>
        </Tooltip.Root>
      </InputGroup.Addon>
    </InputGroup.Root>
  </ButtonGroup.Root>
</ButtonGroup.Root>
