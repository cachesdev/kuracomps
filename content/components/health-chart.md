---
title: Health Chart
description: A chart-like component composed of vertical bars of multiple colors, representing the health state of something.
component: true
links:
  source: /r/health-chart.json
  doc: https://bits-ui.com/docs/components/health-chart
---

<script>
 import ComponentPreview from "$lib/components/component-preview.svelte";
 import ComponentSource from "$lib/components/component-source.svelte";
 import PMAddComp from "$lib/components/pm-add-comp.svelte";
 import PMInstall from "$lib/components/pm-install.svelte";
 import Steps from "$lib/components/steps.svelte";
 import InstallTabs from "$lib/components/install-tabs.svelte";
 import Step from "$lib/components/step.svelte";

 let { viewerData } = $props();

</script>

<ComponentPreview name="health-chart-demo"  description="A health chart with some red and orange states.">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>

{#snippet cli()}

<PMAddComp name="health-chart" />

{/snippet}

{#snippet manual()}

<Steps>

<Step>

Install `bits-ui`

</Step>

<PMInstall command="bits-ui" />

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

The chart will automatically order spans by the timestamp. Every timestamp should be unique, otherwise it will trigger a duplicate each key error.

```svelte showLineNumbers
<script lang="ts">
  import { HealthChart } from '$lib/components/ui/health-chart/index.js';
</script>
```

```svelte showLineNumbers
<HealthChart/>
```
