<script lang="ts">
  import { PlusIcon } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
</script>

<div class="flex flex-col items-start gap-8">
  <ButtonGroup.Root>
    <Button variant="outline" size="sm">Small</Button>
    <Button variant="outline" size="sm">Button</Button>
    <Button variant="outline" size="sm">Group</Button>
    <Button variant="outline" size="icon-sm">
      <PlusIcon />
    </Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button variant="outline">Default</Button>
    <Button variant="outline">Button</Button>
    <Button variant="outline">Group</Button>
    <Button variant="outline" size="icon">
      <PlusIcon />
    </Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button variant="outline" size="lg">Large</Button>
    <Button variant="outline" size="lg">Button</Button>
    <Button variant="outline" size="lg">Group</Button>
    <Button variant="outline" size="icon-lg">
      <PlusIcon />
    </Button>
  </ButtonGroup.Root>
</div>
