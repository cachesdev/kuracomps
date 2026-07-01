<script lang="ts">
  import * as Empty from '$lib/components/ui/empty/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import CloudIcon from 'phosphor-svelte/lib/CloudIcon';
</script>

<Empty.Root class="border border-dashed">
  <Empty.Header>
    <Empty.Media variant="icon">
      <CloudIcon />
    </Empty.Media>
    <Empty.Title>Cloud Storage Empty</Empty.Title>
    <Empty.Description>
      Upload files to your cloud storage to access them anywhere.
    </Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <Button variant="outline" size="sm">Upload Files</Button>
  </Empty.Content>
</Empty.Root>
