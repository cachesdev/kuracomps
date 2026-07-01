<script lang="ts">
  import * as Empty from '$lib/components/ui/empty/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import ArrowUpRightIcon from 'phosphor-svelte/lib/ArrowUpRightIcon';
  import FolderOpenIcon from 'phosphor-svelte/lib/FolderOpenIcon';
</script>

<Empty.Root>
  <Empty.Header>
    <Empty.Media variant="icon">
      <FolderOpenIcon />
    </Empty.Media>
    <Empty.Title>No Projects Yet</Empty.Title>
    <Empty.Description>
      You haven't created any projects yet. Get started by creating your first project.
    </Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <div class="flex gap-2">
      <Button>Create Project</Button>
      <Button variant="outline">Import Project</Button>
    </div>
  </Empty.Content>
  <Button variant="link" class="text-muted-foreground" size="sm">
    <a href="/docs">
      Learn More <ArrowUpRightIcon class="inline" />
    </a>
  </Button>
</Empty.Root>
