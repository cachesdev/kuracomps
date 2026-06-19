---
title: Kura
description: A jsrepo registry for the Kura component warehouse.
---

Kura is a component registry for Svelte teams that want the Kura component system installed as source through jsrepo.

## Install From The Registry

Point your project at the Kura registry:

```bash
pnpm dlx jsrepo@latest init https://kura.gfdc.dev/r
```

Then install components by name:

```bash
pnpm dlx jsrepo@latest add button
pnpm dlx jsrepo@latest add command
```

## Registry URL Installs

You can also pass the registry URL directly:

```bash
pnpm dlx jsrepo@latest add button --registry https://kura.gfdc.dev/r
```

The registry files declare their own dependencies, so components pull shared helpers like `utils` automatically.

## Component Docs

Browse the component reference in [Components](/docs/components). These docs are scoped to the components that Kura ships.
