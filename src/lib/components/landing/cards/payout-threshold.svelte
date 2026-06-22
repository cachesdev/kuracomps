<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card/index.js';
  import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel
  } from '$lib/components/ui/field/index.js';
  import { Progress } from '$lib/components/ui/progress/index.js';
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger
  } from '$lib/components/ui/select/index.js';
  import { Textarea } from '$lib/components/ui/textarea/index.js';
  import { XIcon } from 'phosphor-svelte';

  const currencies = [
    { label: 'USD - United States Dollar', value: 'usd' },
    { label: 'EUR - Euro', value: 'eur' },
    { label: 'GBP - British Pound', value: 'gbp' },
    { label: 'JPY - Japanese Yen', value: 'jpy' }
  ];

  let currency = $state('usd');
  const selectedCurrency = $derived(currencies.find((item) => item.value === currency));
</script>

<Card>
  <CardHeader>
    <CardTitle>Payout Threshold</CardTitle>
    <CardDescription>Set the minimum balance required before a payout is triggered.</CardDescription
    >
    <CardAction>
      <Button variant="ghost" size="icon-sm" class="bg-muted" aria-label="Dismiss payout threshold">
        <XIcon />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <FieldGroup>
      <Field>
        <FieldLabel for="preferred-currency">Preferred Currency</FieldLabel>
        <Select type="single" bind:value={currency}>
          <SelectTrigger id="preferred-currency" class="w-full">
            {selectedCurrency?.label}
          </SelectTrigger>
          <SelectContent class="w-(--bits-select-anchor-width)">
            <SelectGroup>
              {#each currencies as item (item.value)}
                <SelectItem value={item.value}>{item.label}</SelectItem>
              {/each}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <div class="flex items-baseline justify-between gap-3">
          <FieldLabel id="min-payout-label">Minimum Payout Amount</FieldLabel>
          <span class="text-2xl font-semibold tabular-nums">$2500.00</span>
        </div>
        <Progress
          value={25}
          aria-labelledby="min-payout-label"
          aria-valuetext="$2,500 of $10,000"
        />
        <div class="flex items-center justify-between">
          <FieldDescription>$50 (MIN)</FieldDescription>
          <FieldDescription>$10,000 (MAX)</FieldDescription>
        </div>
      </Field>
      <Field>
        <FieldLabel for="payout-notes">Notes</FieldLabel>
        <Textarea
          id="payout-notes"
          placeholder="Add any notes for this payout configuration..."
          class="min-h-[100px]"
        />
      </Field>
    </FieldGroup>
  </CardContent>
  <CardFooter>
    <Button class="w-full">Save Threshold</Button>
  </CardFooter>
</Card>
