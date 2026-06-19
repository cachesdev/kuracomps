<script lang="ts">
  import { BookmarkSimpleIcon } from 'phosphor-svelte';
  import { Toggle } from '$lib/components/ui/toggle/index.js';
</script>

<Toggle
  aria-label="Toggle bookmark"
  size="sm"
  variant="outline"
  class="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
>
  <BookmarkSimpleIcon />
  Bookmark
</Toggle>
