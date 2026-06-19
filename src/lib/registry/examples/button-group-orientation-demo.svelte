<script lang="ts">
  import { MinusIcon, PlusIcon } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
</script>

<ButtonGroup.Root orientation="vertical" aria-label="Media controls" class="h-fit">
  <Button variant="outline" size="icon">
    <PlusIcon />
  </Button>
  <Button variant="outline" size="icon">
    <MinusIcon />
  </Button>
</ButtonGroup.Root>
