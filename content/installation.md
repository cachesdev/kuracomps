---
title: Installation
description: Configure a SvelteKit project to install components from Kura.
---

Kura is served as a shadcn-svelte registry. You use the official CLI, but point it at Kura.

## Configure Components

In your project, set the registry and style:

```json title="components.json"
{
  "$schema": "https://shadcn-svelte.com/schema.json",
  "tailwind": {
    "css": "src/routes/layout.css",
    "baseColor": "neutral"
  },
  "aliases": {
    "components": "$lib/components",
    "utils": "$lib/utils",
    "ui": "$lib/components/ui",
    "hooks": "$lib/hooks",
    "lib": "$lib"
  },
  "typescript": true,
  "registry": "https://kura.jfdc.dev/registry",
  "style": "sera",
  "iconLibrary": "phosphor"
}
```

## Add Components

```bash
pnpm dlx shadcn-svelte@latest add button
pnpm dlx shadcn-svelte@latest add dialog
pnpm dlx shadcn-svelte@latest add sidebar
```

## Direct URL Mode

For one-off installs, use the `/r` files directly:

```bash
pnpm dlx shadcn-svelte@latest add https://kura.jfdc.dev/r/button.json
```

Kura publishes direct URL files under `/r` and style registry files under `/registry/styles/sera`.
