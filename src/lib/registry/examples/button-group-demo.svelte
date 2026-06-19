<script lang="ts">
  import {
    ArchiveIcon,
    ArrowLeftIcon,
    CalendarPlusIcon,
    ClockIcon,
    DotsThreeIcon,
    EnvelopeSimpleIcon,
    FunnelSimpleIcon,
    TagIcon,
    TrashIcon
  } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

  let label = $state('personal');
</script>

<ButtonGroup.Root>
  <ButtonGroup.Root class="hidden sm:flex">
    <Button variant="outline" size="icon-sm" aria-label="Go Back">
      <ArrowLeftIcon />
    </Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button size="sm" variant="outline">Archive</Button>
    <Button size="sm" variant="outline">Report</Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button size="sm" variant="outline">Snooze</Button>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Button {...props} variant="outline" size="icon-sm" aria-label="More Options">
            <DotsThreeIcon />
          </Button>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" class="w-52">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <EnvelopeSimpleIcon />
            Mark as Read
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <ArchiveIcon />
            Archive
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <ClockIcon />
            Snooze
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <CalendarPlusIcon />
            Add to Calendar
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <FunnelSimpleIcon />
            Add to List
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <TagIcon />
              Label As...
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.RadioGroup bind:value={label}>
                <DropdownMenu.RadioItem value="personal">Personal</DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="work">Work</DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="other">Other</DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item class="text-destructive focus:text-destructive">
            <TrashIcon />
            Trash
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </ButtonGroup.Root>
</ButtonGroup.Root>
