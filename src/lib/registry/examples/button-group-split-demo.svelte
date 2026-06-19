<script lang="ts">
  import { PlusIcon } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
</script>

<ButtonGroup.Root>
  <Button variant="secondary">Button</Button>
  <ButtonGroup.Separator />
  <Button variant="secondary" size="icon">
    <PlusIcon />
  </Button>
</ButtonGroup.Root>
