<script lang="ts">
  import CopyIcon from '@tabler/icons-svelte/icons/copy';
  import CheckIcon from '@tabler/icons-svelte/icons/check';
  import {
    CaretDownIcon,
    ShareIcon,
    SpeakerSlashIcon,
    TrashIcon,
    UserMinusIcon,
    WarningIcon
  } from 'phosphor-svelte';
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
