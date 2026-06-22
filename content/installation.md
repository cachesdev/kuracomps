---
title: Installation
description: Configure a SvelteKit project to install components from Kura.
---

Kura is served as a jsrepo registry from the same site as these docs.

## Initialize The Registry

```bash
pnpm dlx jsrepo@latest init https://kura.gfdc.dev/r
```

For SvelteKit projects, use `$lib` aliases in `jsrepo.config.ts` so copied imports stay readable:

```ts title="jsrepo.config.ts"
import { defineConfig } from 'jsrepo';

export default defineConfig({
  registries: ['https://kura.gfdc.dev/r'],
  paths: {
    ui: '$lib/components/ui',
    hook: '$lib/hooks',
    lib: '$lib'
  }
});
```

## Add Components

```bash
pnpm dlx jsrepo@latest add button
pnpm dlx jsrepo@latest add dialog
pnpm dlx jsrepo@latest add sidebar
```

UI components pull the shared Kura stylesheet into `src/lib/styles/kura.css`. Import it once from your Tailwind CSS entry, for example `src/routes/layout.css`:

```css title="src/routes/layout.css"
@import 'tailwindcss';
@import '../lib/styles/kura.css';
```

## Direct Registry Mode

For one-off installs, pass the registry URL with the item name:

```bash
pnpm dlx jsrepo@latest add button --registry https://kura.gfdc.dev/r
```

Kura publishes one jsrepo registry under `/r`.
