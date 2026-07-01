<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card/index.js';
  import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemTitle
  } from '$lib/components/ui/item/index.js';
  import XIcon from 'phosphor-svelte/lib/XIcon';

  const holdings = [
    {
      name: 'Vanguard',
      shares: '450 Shares',
      data: [
        { q: 'Q1', value: 380 },
        { q: 'Q2', value: 420 },
        { q: 'Q3', value: 390 },
        { q: 'Q4', value: 652 }
      ]
    },
    {
      name: 'S&P 500 VOO',
      shares: '112 Shares',
      data: [
        { q: 'Q1', value: 180 },
        { q: 'Q2', value: 210 },
        { q: 'Q3', value: 320 },
        { q: 'Q4', value: 218 }
      ]
    },
    {
      name: 'Apple AAPL',
      shares: '85 Shares',
      data: [
        { q: 'Q1', value: 60 },
        { q: 'Q2', value: 70 },
        { q: 'Q3', value: 120 },
        { q: 'Q4', value: 90 }
      ]
    },
    {
      name: 'Realty Income',
      shares: '320 Shares',
      data: [
        { q: 'Q1', value: 240 },
        { q: 'Q2', value: 260 },
        { q: 'Q3', value: 280 },
        { q: 'Q4', value: 360 }
      ]
    }
  ].map((holding) => ({
    ...holding,
    max: Math.max(1, ...holding.data.map((point) => point.value))
  }));
</script>

<Card>
  <CardHeader>
    <CardTitle>Q2 Dividend Income</CardTitle>
    <CardDescription>Quarterly dividend payouts across your portfolio holdings.</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon-sm" class="bg-muted" aria-label="Dismiss dividend income">
        <XIcon />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <ItemGroup>
      {#each holdings as holding (holding.name)}
        <Item role="listitem" variant="muted">
          <ItemContent>
            <ItemTitle>{holding.name}</ItemTitle>
            <ItemDescription>{holding.shares}</ItemDescription>
          </ItemContent>
          <div
            class="hidden h-8 w-24 items-end gap-1 md:flex"
            role="img"
            aria-label="{holding.name} quarterly dividends"
          >
            {#each holding.data as item (item.q)}
              <div
                class="min-h-1 flex-1 rounded-t-sm bg-chart-2"
                style={`height: ${(item.value / holding.max) * 100}%`}
              ></div>
            {/each}
          </div>
        </Item>
      {/each}
    </ItemGroup>
  </CardContent>
</Card>
