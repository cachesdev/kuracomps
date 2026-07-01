<script lang="ts">
  import CalculatorIcon from 'phosphor-svelte/lib/CalculatorIcon';
  import CalendarIcon from 'phosphor-svelte/lib/CalendarIcon';
  import CreditCardIcon from 'phosphor-svelte/lib/CreditCardIcon';
  import GearIcon from 'phosphor-svelte/lib/GearIcon';
  import SmileyIcon from 'phosphor-svelte/lib/SmileyIcon';
  import UserIcon from 'phosphor-svelte/lib/UserIcon';
  import * as Command from '$lib/components/ui/command/index.js';
</script>

<Command.Root class="rounded-lg border shadow-md md:min-w-[450px]">
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item>
        <CalendarIcon />
        <span>Calendar</span>
      </Command.Item>
      <Command.Item>
        <SmileyIcon />
        <span>Search Emoji</span>
      </Command.Item>
      <Command.Item disabled>
        <CalculatorIcon />
        <span>Calculator</span>
      </Command.Item>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Settings">
      <Command.Item>
        <UserIcon />
        <span>Profile</span>
        <Command.Shortcut>⌘P</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <CreditCardIcon />
        <span>Billing</span>
        <Command.Shortcut>⌘B</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <GearIcon />
        <span>Settings</span>
        <Command.Shortcut>⌘S</Command.Shortcut>
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Root>
