<script lang="ts">
  import { MagnifyingGlassIcon } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
</script>

<ButtonGroup.Root>
  <Input placeholder="Search..." />
  <Button variant="outline" size="icon" aria-label="Search">
    <MagnifyingGlassIcon />
  </Button>
</ButtonGroup.Root>
