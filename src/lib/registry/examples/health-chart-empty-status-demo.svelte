<script lang="ts">
  import { HealthChart, type DataPoint } from '$lib/components/ui/health-chart/index.js';
  import { DateTime } from 'luxon';

  const day = DateTime.now().startOf('day');

  function point(status: DataPoint['status'], description: string, timestamp: DateTime): DataPoint {
    return { status, description, timestamp: timestamp.toJSDate() };
  }

  const data: DataPoint[] = [
    point(
      'orange',
      'Read replicas lagged behind primary',
      day.minus({ days: 24 }).plus({ hours: 7 })
    ),
    point('red', 'Billing API requests timed out', day.minus({ days: 13 }).plus({ hours: 11 })),
    point(
      'orange',
      'Billing API recovered with elevated latency',
      day.minus({ days: 13 }).plus({ hours: 20 })
    ),
    point('red', 'Ingestion endpoint rejected events', day.minus({ days: 4 }).plus({ hours: 3 }))
  ];
</script>

<div class="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
  <div class="flex flex-col gap-2">
    <span class="font-mono text-xs text-muted-foreground">emptyStatus="green"</span>
    <HealthChart {data} range="30d" emptyStatus="green" emptyText="No incident recorded" />
  </div>
  <div class="flex flex-col gap-2">
    <span class="font-mono text-xs text-muted-foreground">emptyStatus="gray"</span>
    <HealthChart {data} range="30d" emptyStatus="gray" emptyText="No sample recorded" />
  </div>
</div>
