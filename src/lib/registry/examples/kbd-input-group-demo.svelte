<script lang="ts">
  import * as Kbd from '$lib/components/ui/kbd/index.js';
  import * as InputGroup from '$lib/components/ui/input-group/index.js';
  import { MagnifyingGlassIcon } from 'phosphor-svelte';
</script>

<div class="flex w-full max-w-xs flex-col gap-6">
  <InputGroup.Root>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <MagnifyingGlassIcon />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
      <Kbd.Root>⌘</Kbd.Root>
      <Kbd.Root>K</Kbd.Root>
    </InputGroup.Addon>
  </InputGroup.Root>
</div>
