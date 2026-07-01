<script lang="ts">
  import * as Item from '$lib/components/ui/item/index.js';
  import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOutIcon';
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
</script>

<div class="flex w-full max-w-md flex-col gap-4">
  <Item.Root>
    {#snippet child({ props })}
      <a href="/docs" {...props}>
        <Item.Content>
          <Item.Title>Visit our documentation</Item.Title>
          <Item.Description>Learn how to get started with our components.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <CaretRightIcon class="size-4" />
        </Item.Actions>
      </a>
    {/snippet}
  </Item.Root>
  <Item.Root variant="outline">
    {#snippet child({ props })}
      <a href="https://kura.gfdc.dev/docs" target="_blank" rel="noopener noreferrer" {...props}>
        <Item.Content>
          <Item.Title>External resource</Item.Title>
          <Item.Description>Opens in a new tab with security attributes.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <ArrowSquareOutIcon class="size-4" />
        </Item.Actions>
      </a>
    {/snippet}
  </Item.Root>
</div>
