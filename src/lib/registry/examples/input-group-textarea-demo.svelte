<script lang="ts">
  import { ArrowBendDownLeftIcon, ArrowClockwiseIcon, CopyIcon, FileJsIcon } from 'phosphor-svelte';

  import * as InputGroup from '$lib/components/ui/input-group/index.js';
</script>

<div class="grid w-full max-w-md gap-4">
  <InputGroup.Root>
    <InputGroup.Addon align="block-start" class="border-b">
      <InputGroup.Text class="font-mono font-medium">
        <FileJsIcon />
        script.js
      </InputGroup.Text>
      <InputGroup.Button class="ms-auto" size="icon-xs">
        <ArrowClockwiseIcon />
      </InputGroup.Button>
      <InputGroup.Button variant="ghost" size="icon-xs">
        <CopyIcon />
      </InputGroup.Button>
    </InputGroup.Addon>
    <InputGroup.Textarea placeholder="console.log('Hello, world!');" class="min-h-[200px]" />
    <InputGroup.Addon align="block-end" class="border-t">
      <InputGroup.Text>Line 1, Column 1</InputGroup.Text>
      <InputGroup.Button size="sm" class="ms-auto" variant="default">
        Run <ArrowBendDownLeftIcon />
      </InputGroup.Button>
    </InputGroup.Addon>
  </InputGroup.Root>
</div>
