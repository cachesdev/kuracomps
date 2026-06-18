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
  import { Field, FieldGroup, FieldLabel } from '$lib/components/ui/field/index.js';
  import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText
  } from '$lib/components/ui/input-group/index.js';
  import { Item, ItemContent } from '$lib/components/ui/item/index.js';
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger
  } from '$lib/components/ui/select/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import XIcon from 'phosphor-svelte/lib/X';

  const fromAccounts = [
    { label: 'Main Checking (8402) - $12,450.00', value: 'checking' },
    { label: 'Business (7731) - $8,920.00', value: 'business' }
  ];

  const toAccounts = [
    { label: 'High Yield Savings (1192) - $42,100.00', value: 'savings' },
    { label: 'Investment (3349) - $18,200.00', value: 'investment' }
  ];

  let fromAccount = $state('checking');
  let toAccount = $state('savings');

  const selectedFromAccount = $derived(
    fromAccounts.find((account) => account.value === fromAccount)
  );
  const selectedToAccount = $derived(toAccounts.find((account) => account.value === toAccount));
</script>

<Card>
  <CardHeader>
    <CardTitle>Transfer Funds</CardTitle>
    <CardDescription>Move money between your connected accounts.</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon-sm" class="bg-muted" aria-label="Dismiss transfer funds">
        <XIcon />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <FieldGroup>
      <Field>
        <FieldLabel for="transfer-amount">Amount to Transfer</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="transfer-amount" value="1,200.00" />
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel for="from-account">From Account</FieldLabel>
        <Select type="single" bind:value={fromAccount}>
          <SelectTrigger id="from-account" class="w-full">
            {selectedFromAccount?.label}
          </SelectTrigger>
          <SelectContent class="w-(--bits-select-anchor-width)" portalProps={{ disabled: true }}>
            <SelectGroup>
              {#each fromAccounts as item (item.value)}
                <SelectItem value={item.value}>{item.label}</SelectItem>
              {/each}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel for="to-account">To Account</FieldLabel>
        <Select type="single" bind:value={toAccount}>
          <SelectTrigger id="to-account" class="w-full">
            {selectedToAccount?.label}
          </SelectTrigger>
          <SelectContent class="w-(--bits-select-anchor-width)" portalProps={{ disabled: true }}>
            <SelectGroup>
              {#each toAccounts as item (item.value)}
                <SelectItem value={item.value}>{item.label}</SelectItem>
              {/each}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Item variant="muted" class="flex-col items-stretch">
        <ItemContent class="gap-3">
          <div class="flex items-center justify-between">
            <span class="text-sm text-muted-foreground">Estimated arrival</span>
            <span class="text-sm font-medium">Today, Apr 14</span>
          </div>
          <Separator />
          <div class="flex items-center justify-between">
            <span class="text-sm text-muted-foreground">Transaction fee</span>
            <span class="text-sm font-medium tabular-nums">$0.00</span>
          </div>
          <Separator />
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium">Total amount</span>
            <span class="text-sm font-semibold tabular-nums">$1,200.00</span>
          </div>
        </ItemContent>
      </Item>
    </FieldGroup>
  </CardContent>
  <CardFooter>
    <Button class="w-full">Confirm Transfer</Button>
  </CardFooter>
</Card>
