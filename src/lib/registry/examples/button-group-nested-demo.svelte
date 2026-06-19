<script lang="ts">
  import { ArrowLeftIcon, ArrowRightIcon } from 'phosphor-svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
</script>

<ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button variant="outline" size="sm">1</Button>
    <Button variant="outline" size="sm">2</Button>
    <Button variant="outline" size="sm">3</Button>
    <Button variant="outline" size="sm">4</Button>
    <Button variant="outline" size="sm">5</Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button variant="outline" size="icon-sm" aria-label="Previous">
      <ArrowLeftIcon />
    </Button>
    <Button variant="outline" size="icon-sm" aria-label="Next">
      <ArrowRightIcon />
    </Button>
  </ButtonGroup.Root>
</ButtonGroup.Root>
