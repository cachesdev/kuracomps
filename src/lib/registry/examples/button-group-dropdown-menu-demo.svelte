<script lang="ts">
  import CaretDownIcon from 'phosphor-svelte/lib/CaretDownIcon';
  import CheckIcon from 'phosphor-svelte/lib/CheckIcon';
  import CopyIcon from 'phosphor-svelte/lib/CopyIcon';
  import ShareIcon from 'phosphor-svelte/lib/ShareIcon';
  import SpeakerSlashIcon from 'phosphor-svelte/lib/SpeakerSlashIcon';
  import TrashIcon from 'phosphor-svelte/lib/TrashIcon';
  import UserMinusIcon from 'phosphor-svelte/lib/UserMinusIcon';
  import WarningIcon from 'phosphor-svelte/lib/WarningIcon';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<ButtonGroup.Root>
  <Button variant="outline">Follow</Button>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {#snippet child({ props })}
        <Button {...props} variant="outline" class="!ps-2">
          <CaretDownIcon />
        </Button>
      {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end" class="[--radius:1rem]">
      <DropdownMenu.Group>
        <DropdownMenu.Item>
          <SpeakerSlashIcon />
          Mute Conversation
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <CheckIcon />
          Mark as Read
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <WarningIcon />
          Report Conversation
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <UserMinusIcon />
          Block User
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <ShareIcon />
          Share Conversation
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <CopyIcon />
          Copy Conversation
        </DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
        <DropdownMenu.Item variant="destructive">
          <TrashIcon />
          Delete Conversation
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</ButtonGroup.Root>
