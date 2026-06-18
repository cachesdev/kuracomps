<script lang="ts">
  import { resolve } from '$app/paths';
  import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
  <title>Kura components</title>
  <meta
    name="description"
    content="Kura is a shadcn-svelte registry and documentation site for the Sera component style."
  />
</svelte:head>

<main id="main-content" class="min-h-[100dvh] bg-background text-foreground">
  <section class="terminal-grid border-b border-border">
    <div class="container grid min-h-[82dvh] content-center gap-8 py-10">
      <nav class="flex items-center justify-between gap-4" aria-label="Primary">
        <a
          href={resolve('/')}
          class="terminal-focus font-mono text-sm font-semibold tracking-widest uppercase"
        >
          kura
        </a>
        <Button href={resolve('/docs')} size="sm">Docs</Button>
      </nav>

      <div
        class="grid gap-8 border border-border bg-background/72 p-5 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10"
      >
        <div class="grid content-center gap-6">
          <div class="grid gap-4">
            <p class="terminal-label text-primary">shadcn-svelte registry</p>
            <h1
              class="max-w-4xl text-balance text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Kura component warehouse.
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              Documentation and registry files for the Sera component system, packaged for
              shadcn-svelte projects.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <Button href={resolve('/docs')} size="lg">Open docs</Button>
            <Button href={resolve('/docs/components')} variant="outline" size="lg">
              Browse components
            </Button>
          </div>
        </div>

        <div
          class="grid content-center gap-4 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8"
        >
          <figure data-rehype-pretty-code-figure>
            <figcaption>components.json</figcaption>
            <pre
              class="no-scrollbar min-w-0 overflow-x-auto rounded-lg border border-border bg-card px-4 py-3.5 outline-none"><code
                >&#123;
  "registry": "https://kura.jfdc.dev/registry",
  "style": "sera"
&#125;</code
              ></pre>
          </figure>

          <figure data-rehype-pretty-code-figure>
            <figcaption>add a component</figcaption>
            <pre
              class="no-scrollbar min-w-0 overflow-x-auto rounded-lg border border-border bg-card px-4 py-3.5 outline-none"><code
                >pnpm dlx shadcn-svelte@latest add https://kura.jfdc.dev/r/button.json</code
              ></pre>
          </figure>
        </div>
      </div>
    </div>
  </section>
</main>
