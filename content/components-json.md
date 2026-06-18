---
title: components.json
description: The project configuration the shadcn-svelte CLI uses for Kura.
---

`components.json` tells the shadcn-svelte CLI where to install files and which registry to read from.

For Kura, the important fields are:

```json
{
  "registry": "https://kura.jfdc.dev/registry",
  "style": "sera",
  "iconLibrary": "phosphor",
  "aliases": {
    "ui": "$lib/components/ui",
    "hooks": "$lib/hooks",
    "utils": "$lib/utils"
  }
}
```

The `registry` and `style` fields let you install by component name. The aliases tell the CLI how to rewrite imports after it copies source files into your project.
