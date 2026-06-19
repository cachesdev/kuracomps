<script lang="ts">
  import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from 'phosphor-svelte';
  import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
</script>

<ToggleGroup.Root variant="outline" type="multiple">
  <ToggleGroup.Item value="bold" aria-label="Toggle bold">
    <TextBIcon class="size-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="italic" aria-label="Toggle italic">
    <TextItalicIcon class="size-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
    <TextUnderlineIcon class="size-4" />
  </ToggleGroup.Item>
</ToggleGroup.Root>
