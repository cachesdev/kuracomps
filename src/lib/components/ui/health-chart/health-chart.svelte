<script module lang="ts">
  export type DataPoint = {
    status: 'red' | 'orange' | 'green' | 'gray';
    description: string;
    timestamp: Date;
  };
</script>

<script lang="ts">
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
  import { DateTime, Duration, Interval } from 'luxon';

  type Bucket = {
    start: DateTime;
    end: DateTime;
    point?: DataPoint;
  };

  type Props = {
    data: Array<DataPoint>;
    range: '60m' | '24h' | '7d' | '30d' | '60d';
    emptyStatus: 'green' | 'orange' | 'red' | 'gray';
    emptyText: string;
  };

  let { data, range = '60d', emptyStatus = 'gray', emptyText = 'No Data' }: Props = $props();

  function getChartLength(range: Props['range']): number {
    switch (range) {
      case '24h':
        return 24;
      case '7d':
        return 7;
      case '30d':
        return 30;
      // 60m, 60d
      default:
        return 60;
    }
  }

  function getLatestStart(range: Props['range']) {
    const now = DateTime.now();
    switch (range) {
      case '24h':
        return now.startOf('hour');
      case '60m':
        return now.startOf('minute');
      // 60d, 30d, 7d
      default:
        return now.startOf('day');
    }
  }

  function getUnitDuration(range: Props['range']): Duration {
    switch (range) {
      case '24h':
        return Duration.fromObject({ hour: 1 });
      case '60m':
        return Duration.fromObject({ minute: 1 });
      // 60d, 30d, 7d
      default:
        return Duration.fromObject({ day: 1 });
    }
  }

  function scaleDuration(duration: Duration, amount: number): Duration {
    return duration.mapUnits((value) => value * amount);
  }

  function sortDataPoints(points: Array<DataPoint>) {
    return points.toSorted((a, b) => {
      return a.timestamp.getTime() - b.timestamp.getTime();
    });
  }

  function isInBucket(date: DateTime, bucket: Bucket) {
    return Interval.fromDateTimes(bucket.start, bucket.end).contains(date);
  }

  const buckets = $derived.by(() => {
    const unit = getUnitDuration(range);
    const count = getChartLength(range);
    const oldestStart = getLatestStart(range).minus(scaleDuration(unit, count - 1));
    const newestFirst = sortDataPoints(data).toReversed();

    return Array.from({ length: count }, (_, i): Bucket => {
      const start = oldestStart.plus(scaleDuration(unit, i));
      const end = start.plus(unit);

      const point = newestFirst.find((point) => {
        const date = DateTime.fromJSDate(point.timestamp);
        return isInBucket(date, { start, end });
      });

      return {
        start,
        end,
        point
      };
    });
  });

  const size = { w: '2', h: '10' };
</script>

<Tooltip.Provider>
  <div class="flex gap-0.5">
    {#each buckets as bucket (bucket.start.toUnixInteger())}
      {#if !bucket.point}
        <Tooltip.Root>
          <Tooltip.Trigger>
            <div class="bg-{emptyStatus}-500 w-{size.w} h-{size.h}"></div>
          </Tooltip.Trigger>
          <Tooltip.Content>{emptyText}</Tooltip.Content>
        </Tooltip.Root>
      {:else}
        {#if bucket.point.status === 'green'}
          <Tooltip.Root>
            <Tooltip.Trigger>
              <div class="bg-primary w-{size.w} h-{size.h}"></div>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {@render tooltipContent(bucket.point)}
            </Tooltip.Content>
          </Tooltip.Root>
        {:else if bucket.point.status === 'orange'}
          <Tooltip.Root>
            <Tooltip.Trigger>
              <div class="bg-orange-300 w-{size.w} h-{size.h}"></div>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {@render tooltipContent(bucket.point)}
            </Tooltip.Content>
          </Tooltip.Root>
        {:else if bucket.point.status === 'red'}
          <Tooltip.Root>
            <Tooltip.Trigger>
              <div class="bg-red-400 w-{size.w} h-{size.h}"></div>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {@render tooltipContent(bucket.point)}
            </Tooltip.Content>
          </Tooltip.Root>
        {/if}
      {/if}
    {/each}
  </div>
</Tooltip.Provider>

{#snippet tooltipContent(span: DataPoint)}
  <div class="w-full h-full bg-red-500 p-0 m-0">
    {JSON.stringify(span, null, 4)}
  </div>
{/snippet}
