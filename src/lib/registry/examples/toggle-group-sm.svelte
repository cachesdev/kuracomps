<script lang="ts">
  import TextBIcon from 'phosphor-svelte/lib/TextBIcon';
  import TextItalicIcon from 'phosphor-svelte/lib/TextItalicIcon';
  import TextUnderlineIcon from 'phosphor-svelte/lib/TextUnderlineIcon';
  import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
</script>

<ToggleGroup.Root size="sm" type="single">
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
