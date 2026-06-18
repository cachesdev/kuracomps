<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Card, CardContent } from '$lib/components/ui/card/index.js';
  import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle
  } from '$lib/components/ui/empty/index.js';
  import PlusIcon from 'phosphor-svelte/lib/Plus';
</script>

<Card>
  <CardContent>
    <Empty class="p-4">
      <EmptyMedia variant="icon">
        <PlusIcon />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Distribute Track</EmptyTitle>
        <EmptyDescription>
          Upload your first master to start reaching listeners on Spotify, Apple Music, and more.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Release</Button>
      </EmptyContent>
    </Empty>
  </CardContent>
</Card>
