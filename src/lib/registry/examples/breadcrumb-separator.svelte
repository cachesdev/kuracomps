<script lang="ts">
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator>
      <CaretRightIcon />
    </Breadcrumb.Separator>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator>
      <CaretRightIcon />
    </Breadcrumb.Separator>
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
