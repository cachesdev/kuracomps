---
title: Kura
description: A shadcn-svelte registry for the Kura component warehouse.
---

Kura is a component registry for Svelte teams that want the Kura component system installed as source through the shadcn-svelte CLI.

## Install From The Registry

Point your project at the Kura registry:

```json title="components.json"
{
  "registry": "https://kura.jfdc.dev/registry",
  "style": "sera"
}
```

Then install components by name:

```bash
pnpm dlx shadcn-svelte@latest add button
pnpm dlx shadcn-svelte@latest add command
```

## Direct URL Installs

Every registry item is also available as a standalone URL:

```bash
pnpm dlx shadcn-svelte@latest add https://kura.jfdc.dev/r/button.json
```

The registry files declare their own dependencies, so components pull shared helpers like `utils` automatically.

## Component Docs

Browse the component reference in [Components](/docs/components). These docs are transplanted from the official shadcn-svelte component docs and scoped to the components that Kura actually ships.
