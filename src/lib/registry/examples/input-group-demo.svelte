<script lang="ts">
  import * as InputGroup from '$lib/components/ui/input-group/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import ArrowUpIcon from 'phosphor-svelte/lib/ArrowUpIcon';
  import CheckIcon from 'phosphor-svelte/lib/CheckIcon';
  import InfoIcon from 'phosphor-svelte/lib/InfoIcon';
  import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
  import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
</script>

<div class="grid w-full max-w-sm gap-6">
  <InputGroup.Root>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <MagnifyingGlassIcon />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
  </InputGroup.Root>
  <InputGroup.Root>
    <InputGroup.Input placeholder="example.com" class="!ps-1" />
    <InputGroup.Addon>
      <InputGroup.Text>https://</InputGroup.Text>
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
      <Tooltip.Root>
        <Tooltip.Trigger>
          {#snippet child({ props })}
            <InputGroup.Button {...props} class="rounded-full" size="icon-xs">
              <InfoIcon />
            </InputGroup.Button>
          {/snippet}
        </Tooltip.Trigger>
        <Tooltip.Content>This is content in a tooltip.</Tooltip.Content>
      </Tooltip.Root>
    </InputGroup.Addon>
  </InputGroup.Root>
  <InputGroup.Root>
    <InputGroup.Textarea placeholder="Ask, Search or Chat..." />
    <InputGroup.Addon align="block-end">
      <InputGroup.Button variant="outline" class="rounded-full" size="icon-xs">
        <PlusIcon />
      </InputGroup.Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <InputGroup.Button {...props} variant="ghost">Auto</InputGroup.Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content side="top" align="start" class="[--radius:0.95rem]">
          <DropdownMenu.Item>Auto</DropdownMenu.Item>
          <DropdownMenu.Item>Agent</DropdownMenu.Item>
          <DropdownMenu.Item>Manual</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <InputGroup.Text class="ms-auto">52% used</InputGroup.Text>
      <Separator orientation="vertical" class="!h-4" />
      <InputGroup.Button variant="default" class="rounded-full" size="icon-xs" disabled>
        <ArrowUpIcon />
        <span class="sr-only">Send</span>
      </InputGroup.Button>
    </InputGroup.Addon>
  </InputGroup.Root>
  <InputGroup.Root>
    <InputGroup.Input placeholder="@kura" />
    <InputGroup.Addon align="inline-end">
      <div
        class="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full"
      >
        <CheckIcon class="size-3" />
      </div>
    </InputGroup.Addon>
  </InputGroup.Root>
</div>
