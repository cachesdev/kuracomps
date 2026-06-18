<script lang="ts">
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Spinner } from '$lib/components/ui/spinner/index.js';
</script>

<div class="flex items-center gap-2">
  <Badge>
    <Spinner />
    Syncing
  </Badge>
  <Badge variant="secondary">
    <Spinner />
    Updating
  </Badge>
  <Badge variant="outline">
    <Spinner />
    Loading
  </Badge>
</div>
