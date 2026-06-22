<script lang="ts">
  import {
    HealthChart,
    type DataPoint,
    type HealthChartRange
  } from '$lib/components/ui/health-chart/index.js';
  import { DateTime } from 'luxon';

  const now = DateTime.now();
  const minute = now.startOf('minute');
  const hour = now.startOf('hour');
  const day = now.startOf('day');

  function point(status: DataPoint['status'], description: string, timestamp: DateTime): DataPoint {
    return { status, description, timestamp: timestamp.toJSDate() };
  }

  const rows: { range: HealthChartRange; data: DataPoint[] }[] = [
    {
      range: '60m',
      data: [
        point(
          'orange',
          'Queue depth rose above threshold',
          minute.minus({ minutes: 47 }).plus({ seconds: 18 })
        ),
        point(
          'red',
          'Worker pool stopped accepting jobs',
          minute.minus({ minutes: 21 }).plus({ seconds: 33 })
        ),
        point('green', 'Workers recovered', minute.minus({ minutes: 4 }).plus({ seconds: 12 }))
      ]
    },
    {
      range: '24h',
      data: [
        point(
          'orange',
          'Deploy verification slowed down',
          hour.minus({ hours: 22 }).plus({ minutes: 9 })
        ),
        point('red', 'Webhook delivery paused', hour.minus({ hours: 8 }).plus({ minutes: 24 })),
        point('green', 'Webhook delivery resumed', hour.minus({ hours: 2 }).plus({ minutes: 41 }))
      ]
    },
    {
      range: '30d',
      data: [
        point('orange', 'Background jobs delayed', day.minus({ days: 25 }).plus({ hours: 10 })),
        point('red', 'Exports unavailable', day.minus({ days: 17 }).plus({ hours: 6 })),
        point('orange', 'Search freshness delayed', day.minus({ days: 6 }).plus({ hours: 15 }))
      ]
    },
    {
      range: '60d',
      data: [
        point(
          'orange',
          'Scheduled maintenance exceeded window',
          day.minus({ days: 54 }).plus({ hours: 9 })
        ),
        point('red', 'Upload API unavailable', day.minus({ days: 38 }).plus({ hours: 13 })),
        point('orange', 'Notifications degraded', day.minus({ days: 18 }).plus({ hours: 4 }))
      ]
    }
  ];
</script>

<div class="flex w-full max-w-2xl flex-col gap-3">
  {#each rows as row (row.range)}
    <div class="grid grid-cols-[3rem_1fr] items-center gap-3">
      <span class="font-mono text-xs text-muted-foreground">{row.range}</span>
      <HealthChart
        data={row.data}
        range={row.range}
        emptyStatus="gray"
        emptyText="No sample"
        class="h-7"
      />
    </div>
  {/each}
</div>
