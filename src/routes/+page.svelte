<script lang="ts">
  import { resolve } from '$app/paths';
  import LandingShowcase from '$lib/components/landing/showcase.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRight';
</script>

<svelte:head>
  <title>Kura components</title>
  <meta
    name="description"
    content="Kura is a jsrepo registry and documentation site for the Sera component system."
  />
</svelte:head>

<main id="main-content" class="min-h-[100dvh] bg-background text-foreground">
  <section class="terminal-grid">
    <div class="container grid min-h-[42rem] content-start gap-16 py-5 md:min-h-[34rem]">
      <nav class="flex items-center justify-between gap-4" aria-label="Primary">
        <a
          href={resolve('/')}
          class="terminal-focus font-mono text-sm font-semibold tracking-widest uppercase"
        >
          kura
        </a>
        <div
          class="hidden items-center gap-6 font-mono text-xs font-semibold tracking-widest uppercase md:flex"
        >
          <a
            class="terminal-focus text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/')}
          >
            Home
          </a>
          <a
            class="terminal-focus text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/docs')}
          >
            Docs
          </a>
          <a
            class="terminal-focus text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/docs/components')}
          >
            Components
          </a>
          <a
            class="terminal-focus text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/docs/installation')}
          >
            Install
          </a>
        </div>
        <Button href={resolve('/docs/components')} size="sm">Browse</Button>
      </nav>

      <div class="mx-auto flex max-w-5xl flex-col items-center gap-7 text-center">
        <a
          href={resolve('/docs/installation')}
          class="terminal-focus inline-flex items-center gap-2 border border-border bg-muted px-3 py-1.5 font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:border-primary/50 hover:text-foreground"
        >
          Kura registry
          <ArrowRightIcon class="size-3.5" />
        </a>
        <div class="grid gap-5">
          <h1
            class="text-balance text-5xl leading-[0.95] font-semibold text-foreground sm:text-6xl lg:text-7xl"
          >
            Kura component warehouse.
          </h1>
          <p
            class="mx-auto max-w-3xl text-balance text-base leading-8 text-muted-foreground sm:text-lg"
          >
            A jsrepo registry for dense, production-minded Sera components that you can install,
            inspect, and make your own. Open source. Open code.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <Button href={resolve('/docs/components')} size="lg">
            Browse Components
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button href={resolve('/docs/installation')} variant="outline" size="lg">
            Install Registry
          </Button>
        </div>
      </div>
    </div>
  </section>

  <LandingShowcase />

  <section class="border-t border-border bg-background">
    <div class="container grid gap-4 py-12 text-center">
      <p class="terminal-label">Install from the warehouse</p>
      <div class="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-2">
        <figure data-rehype-pretty-code-figure class="m-0">
          <figcaption>jsrepo.config.ts</figcaption>
          <pre class="no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none"><code
              >registries: ["https://kura.gfdc.dev/r"]</code
            ></pre>
        </figure>

        <figure data-rehype-pretty-code-figure class="m-0">
          <figcaption>add a component</figcaption>
          <pre class="no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none"><code
              >pnpm dlx jsrepo@latest add button</code
            ></pre>
        </figure>
      </div>
    </div>
  </section>
</main>
