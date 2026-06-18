# Kura Components

Kura is a shadcn-svelte registry and documentation site for the component system.

## Development

```sh
pnpm install
pnpm dev
```

## Registry

Regenerate the registry manifests from `src/lib/components/ui`:

```sh
pnpm registry:build
```

This writes standalone URL install files to `static/r`:

```sh
pnpm dlx shadcn-svelte@latest add https://kura.gfdc.dev/r/button.json
```

Component files declare their registry dependencies, so `button` and other UI items pull `utils` automatically when needed.

It also writes shadcn-style registry files to `static/registry/styles/sera`, so a consumer project can set:

```json
{
  "registry": "https://kura.gfdc.dev/registry",
  "style": "sera"
}
```

Then install by name:

```sh
pnpm dlx shadcn-svelte@latest add button
```
