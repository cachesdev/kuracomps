<script lang="ts">
  import { HealthChart, type DataPoint } from '$lib/components/ui/health-chart/index.js';
  import { DateTime } from 'luxon';

  const now = DateTime.now();
  const minuteAnchor = now.startOf('minute');
  const hourAnchor = now.startOf('hour');
  const dayAnchor = now.startOf('day');

  function point(status: DataPoint['status'], description: string, timestamp: DateTime): DataPoint {
    return {
      status,
      description,
      timestamp: timestamp.toJSDate()
    };
  }

  const minuteData: DataPoint[] = [
    point(
      'green',
      'Recovered after a short blip',
      minuteAnchor.minus({ minutes: 2 }).plus({ seconds: 12 })
    ),
    point('orange', 'Queue depth rising', minuteAnchor.minus({ minutes: 17 }).plus({ seconds: 8 })),
    point(
      'orange',
      'Latency warning - earlier sample',
      minuteAnchor.minus({ minutes: 38 }).plus({ seconds: 10 })
    ),
    point(
      'red',
      'Latency warning escalated - latest sample wins',
      minuteAnchor.minus({ minutes: 38 }).plus({ seconds: 45 })
    ),
    point('green', 'Healthy sample', minuteAnchor.minus({ minutes: 54 }).plus({ seconds: 30 }))
  ];

  const hourlyData: DataPoint[] = [
    point(
      'orange',
      'Database failover started',
      hourAnchor.minus({ hours: 22 }).plus({ minutes: 10 })
    ),
    point(
      'green',
      'Database failover recovered - latest sample wins',
      hourAnchor.minus({ hours: 22 }).plus({ minutes: 45 })
    ),
    point('red', 'Payments unavailable', hourAnchor.minus({ hours: 9 }).plus({ minutes: 20 })),
    point('orange', 'API latency elevated', hourAnchor.minus({ hours: 3 }).plus({ minutes: 5 })),
    point('green', 'Current hour healthy', now.minus({ minutes: 5 }))
  ];

  const weeklyData: DataPoint[] = [
    point('green', 'Clean deploy', dayAnchor.minus({ days: 6 }).plus({ hours: 9 })),
    point('orange', 'Partial degradation opened', dayAnchor.minus({ days: 4 }).plus({ hours: 10 })),
    point(
      'red',
      'Partial degradation escalated - latest sample wins',
      dayAnchor.minus({ days: 4 }).plus({ hours: 13 })
    ),
    point('orange', 'Cache pressure', dayAnchor.minus({ days: 2 }).plus({ hours: 16 })),
    point('green', 'All clear today', now.minus({ hours: 1 }))
  ];

  const monthlyData: DataPoint[] = [
    point('orange', 'Regional latency', dayAnchor.minus({ days: 28 }).plus({ hours: 11 })),
    point('green', 'Regional latency resolved', dayAnchor.minus({ days: 28 }).plus({ hours: 18 })),
    point('red', 'Upload service outage', dayAnchor.minus({ days: 19 }).plus({ hours: 7 })),
    point('orange', 'Search indexing delayed', dayAnchor.minus({ days: 11 }).plus({ hours: 14 })),
    point('green', 'Maintenance completed', dayAnchor.minus({ days: 5 }).plus({ hours: 2 })),
    point('orange', 'Webhook retries elevated', now.minus({ hours: 6 }))
  ];

  const sixtyDayData: DataPoint[] = [
    point('green', 'Baseline healthy', dayAnchor.minus({ days: 58 }).plus({ hours: 8 })),
    point('orange', 'Background jobs delayed', dayAnchor.minus({ days: 49 }).plus({ hours: 17 })),
    point('red', 'Major incident', dayAnchor.minus({ days: 37 }).plus({ hours: 6 })),
    point(
      'orange',
      'Major incident mitigated - latest sample wins',
      dayAnchor.minus({ days: 37 }).plus({ hours: 22 })
    ),
    point('green', 'Post-incident stable', dayAnchor.minus({ days: 31 }).plus({ hours: 9 })),
    point('orange', 'Deploy rollback', dayAnchor.minus({ days: 18 }).plus({ hours: 15 })),
    point('red', 'API unavailable', dayAnchor.minus({ days: 7 }).plus({ hours: 12 })),
    point('green', 'Healthy today', now.minus({ hours: 2 }))
  ];
</script>

<div class="flex w-full flex-col gap-4">
  <section class="space-y-1">
    <p class="text-muted-foreground text-sm">Last 60 minutes</p>
    <HealthChart
      data={minuteData}
      range="60m"
      emptyStatus="gray"
      emptyText="No sample in this minute"
    />
  </section>

  <section class="space-y-1">
    <p class="text-muted-foreground text-sm">Last 24 hours</p>
    <HealthChart
      data={hourlyData}
      range="24h"
      emptyStatus="gray"
      emptyText="No sample in this hour"
    />
  </section>

  <section class="space-y-1">
    <p class="text-muted-foreground text-sm">Last 7 days</p>
    <HealthChart
      data={weeklyData}
      range="7d"
      emptyStatus="gray"
      emptyText="No sample on this day"
    />
  </section>

  <section class="space-y-1">
    <p class="text-muted-foreground text-sm">Last 30 days</p>
    <HealthChart
      data={monthlyData}
      range="30d"
      emptyStatus="gray"
      emptyText="No sample on this day"
    />
  </section>

  <section class="space-y-1">
    <p class="text-muted-foreground text-sm">Last 60 days</p>
    <HealthChart
      data={sixtyDayData}
      range="60d"
      emptyStatus="gray"
      emptyText="No sample on this day"
    />
  </section>
</div>
