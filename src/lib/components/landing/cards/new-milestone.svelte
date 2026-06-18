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
</script>

<Card>
  <CardHeader>
    <CardTitle>Set a new milestone</CardTitle>
    <CardDescription>
      Define your financial target and we will help you pace your savings.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <FieldGroup>
      <Field>
        <FieldLabel for="goal-name">Goal Name</FieldLabel>
        <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
      </Field>
      <div class="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel for="target-amount">Target Amount</FieldLabel>
          <Input id="target-amount" value="$15,000" />
        </Field>
        <Field>
          <FieldLabel for="target-date">Target Date</FieldLabel>
          <Input id="target-date" value="Dec 2025" />
        </Field>
      </div>
    </FieldGroup>
  </CardContent>
  <CardFooter class="flex-col gap-2">
    <Button class="w-full">Create Goal</Button>
    <Button variant="outline" class="w-full">Cancel</Button>
  </CardFooter>
</Card>
