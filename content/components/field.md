---
title: Field
description: Combine labels, controls, and help text to compose accessible form fields and grouped inputs.
component: true
links:
  source: /r/field.json
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="field-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="field" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Copy and paste the following code into your project.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

</Steps>
{/snippet}
</InstallTabs>

## Usage

```svelte showLineNumbers
<script lang="ts">
  import * as Field from '$lib/components/ui/field/index.js';
</script>
```

```svelte showLineNumbers
<Field.Set>
  <Field.Legend>Profile</Field.Legend>
  <Field.Description>This appears on invoices and emails.</Field.Description>
  <Field.Group>
    <Field.Field>
      <Field.Label for="name">Full name</Field.Label>
      <Input id="name" autocomplete="off" placeholder="Evil Rabbit" />
      <Field.Description>This appears on invoices and emails.</Field.Description>
    </Field.Field>
    <Field.Field>
      <Field.Label for="username">Username</Field.Label>
      <Input id="username" autocomplete="off" aria-invalid />
      <Field.Error>Choose another username.</Field.Error>
    </Field.Field>
    <Field.Field orientation="horizontal">
      <Switch id="newsletter" />
      <Field.Label for="newsletter">Subscribe to the newsletter</Field.Label>
    </Field.Field>
  </Field.Group>
</Field.Set>
```

## Anatomy

The `Field` family is designed for composing accessible forms. A typical field is structured as follows:

```svelte
<Field.Field>
  <Field.Label for="input-id">Label</Field.Label>
  <!-- Input, Select, Switch, etc. -->
  <Field.Description>Optional helper text.</Field.Description>
  <Field.Error>Validation message.</Field.Error>
</Field.Field>
```

- `Field.Field` is the core wrapper for a single field.
- `Field.Content` is a flex column that groups label and description. Not required if you have no description.
- Wrap related fields with `Field.Group`, and use `Field.Set` with `Field.Legend` for semantic grouping.

## Examples

### Input

<ComponentPreview name="field-input">

<div></div>

</ComponentPreview>

### Textarea

<ComponentPreview name="field-textarea">

<div></div>

</ComponentPreview>

### Select

<ComponentPreview name="field-select">

<div></div>

</ComponentPreview>

### Slider

<ComponentPreview name="field-slider">

<div></div>

</ComponentPreview>

### Fieldset

<ComponentPreview name="field-field-set-demo">

<div></div>

</ComponentPreview>

### Checkbox

<ComponentPreview name="field-checkbox">

<div></div>

</ComponentPreview>

### Radio

<ComponentPreview name="field-radio">

<div></div>

</ComponentPreview>

### Switch

<ComponentPreview name="field-switch">

<div></div>

</ComponentPreview>

### Choice Card

Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioItem`, `Checkbox` and `Switch` components.

<ComponentPreview name="field-choice-card">

<div></div>

</ComponentPreview>

### Field Group

Stack `Field` components with `Field.Group`. Add `Field.Separator` to divide them.

<ComponentPreview name="field-field-group-demo">

<div></div>

</ComponentPreview>

### Responsive Layout

- **Vertical fields:** Default orientation stacks label, control, and helper text—ideal for mobile-first layouts.
- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `Field.Content` to keep descriptions aligned.
- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `Field.Group` to switch orientations at specific breakpoints.

<ComponentPreview name="field-responsive-layout-demo">

<div></div>

</ComponentPreview>

## Validation and Errors

- Add `data-invalid` to `Field` to switch the entire block into an error state.
- Add `aria-invalid` on the input itself for assistive technologies.
- Render `FieldError` immediately after the control or inside `FieldContent` to keep error messages aligned with the field.

```svelte
<Field.Field data-invalid>
  <Field.Label for="email">Email</Field.Label>
  <Input id="email" type="email" aria-invalid />
  <Field.Error>Enter a valid email address.</Field.Error>
</Field.Field>
```

## SvelteKit Forms

`Field` components do not own form state or validation. Use native form controls with `name` attributes, then pair them with SvelteKit form actions, remote forms, or any validation library you prefer.

```ts title="src/routes/settings/+page.server.ts" showLineNumbers
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.js';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = String(data.get('username') ?? '').trim();

    if (username.length < 2) {
      return fail(400, {
        values: { username },
        errors: {
          username: [{ message: 'Username must be at least 2 characters.' }]
        }
      });
    }

    return { success: true };
  }
};
```

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Field from '$lib/components/ui/field/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import type { PageProps } from './$types.js';

  let { form }: PageProps = $props();

  const usernameValue = $derived(form && 'values' in form ? form.values.username : '');
  const usernameErrors = $derived(form && 'errors' in form ? form.errors.username : []);
  const usernameInvalid = $derived(usernameErrors.length > 0);
</script>

<form method="POST" use:enhance>
  <Field.Field data-invalid={usernameInvalid ? 'true' : undefined}>
    <Field.Label for="username">Username</Field.Label>
    <Input
      id="username"
      name="username"
      value={usernameValue}
      aria-invalid={usernameInvalid ? 'true' : undefined}
    />
    <Field.Description>This is your public display name.</Field.Description>
    <Field.Error errors={usernameErrors} />
  </Field.Field>
  <Button type="submit">Save</Button>
</form>
```

## Accessibility

- `Field.Set` and `Field.Legend` keep related controls grouped for keyboard and assistive tech users.
- `Field` outputs `role="group"` so nested controls inherit labeling from `Field.Label` and `Field.Legend` when combined.
- Apply `Field.Separator` sparingly to ensure screen readers encounter clear section boundaries.
