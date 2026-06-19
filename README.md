# Kura Components

Kura is a jsrepo registry and documentation site for the component system.

## Development

```sh
pnpm install
pnpm dev
```

## Registry

Regenerate the registry from `src/lib/components/ui`, `src/lib/hooks`, and `src/lib/utils.ts`:

```sh
pnpm registry:build
```

This writes the jsrepo HTTP registry to `static/r`:

```sh
pnpm dlx jsrepo@latest init https://kura.gfdc.dev/r
pnpm dlx jsrepo@latest add button
```

Consumers can configure paths in `jsrepo.config.ts`:

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

Then install by name:

```sh
pnpm dlx jsrepo@latest add button
```
