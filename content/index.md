---
title: Kura
description: Simple, boring components for applications that get real use.
---

Kura is a shadcn-svelte fork that host the components used by [cachesdev](https://github.com/cachesdev/) in multiple websites and applications.

Kura works similar to shadcn, using a registry and providing components you can directly modify, but we don't use their registry system. That means Kura is not fully compatible with shadcn projects, though you can still copy over the files and styles directly without hitting our registry.

install Kura via our jsrepo registry.

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

The registry files declare their own dependencies, so components pull shared helpers and libraries automatically.

## Component Docs

Browse the component reference in [Components](/docs/components).
