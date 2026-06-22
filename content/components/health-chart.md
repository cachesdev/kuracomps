---
title: Health Chart
description: A health or uptime chart that maps datapoints onto a fixed time range.
component: true
links:
  source: /r/health-chart.json
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

<ComponentPreview name="health-chart-demo">

<div></div>

</ComponentPreview>

Each bar covers a fixed time slot within the selected `range`. A datapoint's timestamp decides which bar it lands in; when several land in the same slot, the latest by timestamp is shown. Empty slots take the `emptyStatus` color.

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="health-chart" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install runtime dependencies:

</Step>

<PMInstall command="bits-ui luxon clsx tailwind-merge" />

<Step>

Install the Luxon types and Kura style dependencies:

</Step>

<PMInstall command="@types/luxon tw-animate-css @fontsource-variable/geist -D" />

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

```svelte showLineNumbers
<script lang="ts">
  import { HealthChart, type DataPoint } from '$lib/components/ui/health-chart/index.js';
  import { DateTime } from 'luxon';

  const day = DateTime.now().startOf('day');

  const data: DataPoint[] = [
    {
      status: 'red',
      description: 'Public API returned elevated 5xx responses',
      timestamp: day.minus({ days: 9 }).plus({ hours: 5 }).toJSDate()
    },
    {
      status: 'green',
      description: 'Synthetic checks passed after remediation',
      timestamp: day.minus({ days: 9 }).plus({ hours: 21 }).toJSDate()
    }
  ];
</script>

<HealthChart {data} range="60d" emptyStatus="green" emptyText="No incident recorded" />
```

## Data Model

```ts showLineNumbers
type DataPoint = {
  status: 'red' | 'orange' | 'green' | 'gray';
  description: string;
  timestamp: Date;
};
```

Data may be unsorted.

## Examples

### Ranges

<ComponentPreview name="health-chart-ranges-demo" class="[&_.preview]:min-h-0">

<div></div>

</ComponentPreview>

| Range | Bars | Slot size |
| ----- | ---- | --------- |
| `60m` | 60   | 1 minute  |
| `24h` | 24   | 1 hour    |
| `30d` | 30   | 1 day     |
| `60d` | 60   | 1 day     |

Minute ranges anchor to the current minute, hour ranges to the current hour, and day ranges to the start of today.

### Empty state

<ComponentPreview name="health-chart-empty-status-demo" class="[&_.preview]:min-h-0">

<div></div>

</ComponentPreview>

Use `emptyStatus="green"` when your data records incidents only, an empty slot means nothing went wrong. Use `emptyStatus="gray"` when your data is sampled, an empty slot means no sample exists.

## Props

| Prop          | Type                                     | Default     | Description                                  |
| ------------- | ---------------------------------------- | ----------- | -------------------------------------------- |
| `data`        | `DataPoint[]`                            | `[]`        | Datapoints plotted within the visible range. |
| `range`       | `'60m' \| '24h' \| '30d' \| '60d'`       | `'60d'`     | The visible time range.                      |
| `emptyStatus` | `'green' \| 'orange' \| 'red' \| 'gray'` | `'gray'`    | Status color for slots without a datapoint.  |
| `emptyText`   | `string`                                 | `'No data'` | Tooltip text for slots without a datapoint.  |
| `class`       | `ClassValue`                             | -           | Classes merged onto the chart root.          |

The component also accepts native `div` attributes.
