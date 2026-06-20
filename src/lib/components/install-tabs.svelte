<script lang="ts">
  import CodeTabs from './code-tabs.svelte';
  import * as DocTabs from './doc-tabs/index.js';
  import type { Snippet } from 'svelte';

  let {
    cli,
    manual
  }: {
    cli: Snippet;
    manual: Snippet;
  } = $props();
</script>

<div>
  <CodeTabs>
    <DocTabs.List>
      <DocTabs.Trigger value="cli">CLI</DocTabs.Trigger>
      <DocTabs.Trigger value="manual">Manual</DocTabs.Trigger>
    </DocTabs.List>
    <DocTabs.Content value="cli">
      {@render cli?.()}
    </DocTabs.Content>
    <DocTabs.Content value="manual" data-manual-install data-llm-ignore>
      {@render manual?.()}
    </DocTabs.Content>
  </CodeTabs>
</div>
