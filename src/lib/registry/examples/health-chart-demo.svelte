<script lang="ts">
  import { HealthChart, type DataPoint } from '$lib/components/ui/health-chart/index.js';
  import { DateTime } from 'luxon';

  const day = DateTime.now().startOf('day');

  const data: DataPoint[] = [
    {
      status: 'orange',
      description: 'Image processing latency increased',
      timestamp: day.minus({ days: 52 }).plus({ hours: 8 }).toJSDate()
    },
    {
      status: 'red',
      description: 'Checkout writes were unavailable',
      timestamp: day.minus({ days: 41 }).plus({ hours: 3 }).toJSDate()
    },
    {
      status: 'orange',
      description: 'Checkout writes recovered with degraded queue depth',
      timestamp: day.minus({ days: 41 }).plus({ hours: 16 }).toJSDate()
    },
    {
      status: 'orange',
      description: 'Search indexing lagged behind ingestion',
      timestamp: day.minus({ days: 24 }).plus({ hours: 11 }).toJSDate()
    },
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

<HealthChart
  {data}
  range="60d"
  emptyStatus="green"
  emptyText="No incident recorded"
  class="max-w-2xl"
/>
