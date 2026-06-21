---
title: Pill Button
description: Displays a pill-shaped button.
component: true
links:
  source: /r/button.json
---

<script>
 import ComponentPreview from "$lib/components/component-preview.svelte";
 import ComponentSource from "$lib/components/component-source.svelte";
 import PMAddComp from "$lib/components/pm-add-comp.svelte";
 import Steps from "$lib/components/steps.svelte";
 import Step from "$lib/components/step.svelte";
 import InstallTabs from "$lib/components/install-tabs.svelte";

 let { viewerData } = $props();
</script>

<ComponentPreview name="pill-button-demo">

<div></div>

</ComponentPreview>

## Installation

Install the button component.

<InstallTabs>
{#snippet cli()}
<PMAddComp name="button" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Copy and paste the following code into your project.

</Step>
{#if viewerData}
 <ComponentSource item={viewerData} data-llm-ignore/>
{/if}

</Steps>
{/snippet}
</InstallTabs>

## Usage

```svelte
<script lang="ts">
  import { PillButton } from '$lib/components/ui/button/index.js';
</script>
```

```svelte
<PillButton>Button</PillButton>
```

## Examples

### Default

<ComponentPreview name="pill-button-default">

<div></div>

</ComponentPreview>

```svelte
<PillButton>Button</PillButton>
```

### Outline

<ComponentPreview name="pill-button-outline">

<div></div>

</ComponentPreview>

```svelte
<PillButton href="/docs/components" variant="outline">View components</PillButton>
```

### With Icon

<ComponentPreview name="pill-button-with-icon">

<div></div>

</ComponentPreview>

```svelte
<PillButton href="/docs/installation">
  Continue
  <ArrowRightIcon data-icon="inline-end" />
</PillButton>
```

### Pair

<ComponentPreview name="pill-button-pair">

<div></div>

</ComponentPreview>

```svelte
<div class="hairline-frame grid max-w-sm gap-4 border border-border bg-card p-4">
  <div class="grid gap-1">
    <h3 class="text-base font-semibold">Create project?</h3>
    <p class="text-sm/6 text-muted-foreground">Start with the default component set.</p>
  </div>
  <div class="flex flex-wrap justify-end gap-2">
    <PillButton variant="outline">Review settings</PillButton>
    <PillButton>
      Create project
      <ArrowRightIcon data-icon="inline-end" />
    </PillButton>
  </div>
</div>
```
