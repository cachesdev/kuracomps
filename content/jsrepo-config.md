---
title: jsrepo.config
description: The project configuration jsrepo uses for Kura.
---

`jsrepo.config.ts` tells jsrepo where to install files and which registry to read from.

For Kura, the important fields are:

```ts
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

The `registries` field lets you install by component name. The `paths` field tells jsrepo where each Kura item type should land and how imports should be rewritten after files are copied.
