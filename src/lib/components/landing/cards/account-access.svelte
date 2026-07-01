<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card/index.js';
  import { Field, FieldGroup, FieldLabel } from '$lib/components/ui/field/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle
  } from '$lib/components/ui/item/index.js';
  import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';
  import LockKeyIcon from 'phosphor-svelte/lib/LockKeyIcon';
  import WarningCircleIcon from 'phosphor-svelte/lib/WarningCircleIcon';
</script>

<Card>
  <CardHeader>
    <CardTitle>Account Access</CardTitle>
    <CardDescription>Update your credentials or re-authenticate.</CardDescription>
  </CardHeader>
  <CardContent>
    <FieldGroup>
      <Field>
        <FieldLabel for="email-address">Email Address</FieldLabel>
        <Input id="email-address" type="email" placeholder="artist@studio.inc" />
      </Field>
      <Field>
        <div class="flex items-center justify-between">
          <FieldLabel for="current-password">Current Password</FieldLabel>
          <a
            href="/"
            class="text-xs font-medium tracking-wider text-muted-foreground uppercase hover:text-foreground"
          >
            Forgot?
          </a>
        </div>
        <Input id="current-password" type="password" placeholder="........................" />
      </Field>
    </FieldGroup>
  </CardContent>
  <CardFooter class="flex-col gap-4">
    <Button class="w-full">
      <LockKeyIcon data-icon="inline-start" />
      Update Security
    </Button>
    <Item variant="muted">
      <ItemMedia variant="icon">
        <WarningCircleIcon class="text-destructive" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Danger Zone</ItemTitle>
        <ItemDescription class="line-clamp-1">Archive account and remove catalog</ItemDescription>
      </ItemContent>
      <ArrowRightIcon class="text-muted-foreground" />
    </Item>
  </CardFooter>
</Card>
