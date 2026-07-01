<script lang="ts">
  import MinusIcon from 'phosphor-svelte/lib/MinusIcon';
  import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
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
