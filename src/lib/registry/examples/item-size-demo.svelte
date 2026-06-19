<script lang="ts">
  import * as Item from '$lib/components/ui/item/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { CaretRightIcon, SealCheckIcon } from 'phosphor-svelte';
</script>

<div class="flex w-full max-w-md flex-col gap-6">
  <Item.Root variant="outline">
    <Item.Content>
      <Item.Title>Basic Item</Item.Title>
      <Item.Description>A simple item with title and description.</Item.Description>
    </Item.Content>
    <Item.Actions>
      <Button variant="outline" size="sm">Action</Button>
    </Item.Actions>
  </Item.Root>
  <Item.Root variant="outline" size="sm">
    {#snippet child({ props })}
      <a href="/docs" {...props}>
        <Item.Media>
          <SealCheckIcon class="size-5" />
        </Item.Media>
        <Item.Content>
          <Item.Title>Your profile has been verified.</Item.Title>
        </Item.Content>
        <Item.Actions>
          <CaretRightIcon class="size-4" />
        </Item.Actions>
      </a>
    {/snippet}
  </Item.Root>
</div>
