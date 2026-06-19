<script lang="ts">
  import { TextItalicIcon } from 'phosphor-svelte';
  import { Toggle } from '$lib/components/ui/toggle/index.js';
</script>

<Toggle aria-label="Toggle italic">
  <TextItalicIcon class="me-2 size-4" />
  Italic
</Toggle>
