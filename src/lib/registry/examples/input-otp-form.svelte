<script lang="ts">
  import { toast } from 'svelte-sonner';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Field from '$lib/components/ui/field/index.js';
  import * as InputOTP from '$lib/components/ui/input-otp/index.js';

  const pinId = 'input-otp-form-pin';
  const descriptionId = 'input-otp-form-description';
  const errorId = 'input-otp-form-error';

  let pin = $state('');
  let errors = $state<{ message: string }[]>([]);

  const invalid = $derived(errors.length > 0);
  const describedBy = $derived(`${descriptionId}${invalid ? ` ${errorId}` : ''}`);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (pin.length !== 6) {
      errors = [{ message: 'Your one-time password must be 6 characters.' }];
      toast.error('Please fix the errors in the form.');
      return;
    }

    errors = [];
    toast.success(`You submitted ${JSON.stringify({ pin }, null, 2)}`);
  }
</script>

<form method="POST" class="w-2/3 space-y-6" onsubmit={handleSubmit}>
  <Field.Field data-invalid={invalid ? 'true' : undefined}>
    <Field.Label for={pinId}>One-Time Password</Field.Label>
    <InputOTP.Root
      id={pinId}
      name="pin"
      maxlength={6}
      aria-describedby={describedBy}
      aria-invalid={invalid ? 'true' : undefined}
      bind:value={pin}
    >
      {#snippet children({ cells })}
        <InputOTP.Group>
          {#each cells as cell (cell)}
            <InputOTP.Slot {cell} />
          {/each}
        </InputOTP.Group>
      {/snippet}
    </InputOTP.Root>
    <Field.Description id={descriptionId}>
      Please enter the one-time password sent to your phone.
    </Field.Description>
    <Field.Error id={errorId} {errors} />
  </Field.Field>
  <Button type="submit" class="w-full">Submit</Button>
</form>
