<script lang="ts">
  import { resolve } from '$app/paths';
  import LandingShowcase from '$lib/components/landing/showcase.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { ArrowRightIcon } from 'phosphor-svelte';
  import LandingPill from './_components/landing-pill.svelte';
</script>

<svelte:head>
  <title>Kura components</title>
  <meta name="description" content="Kura is my component warehouse, for you." />
</svelte:head>

<main id="main-content" class="min-h-dvh bg-background text-foreground">
  <section class="bg-grid">
    <div class="container grid min-h-168 content-start gap-16 py-5 md:min-h-136">
      <nav class="flex items-center justify-between gap-4" aria-label="Primary">
        <a
          href={resolve('/')}
          class="focus-ring font-mono text-sm font-semibold tracking-widest uppercase"
        >
          kura
        </a>
        <div
          class="hidden items-center gap-6 font-mono text-xs font-semibold tracking-widest uppercase md:flex"
        >
          <a
            class="focus-ring text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/')}
          >
            Home
          </a>
          <a
            class="focus-ring text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/docs')}
          >
            Docs
          </a>
          <a
            class="focus-ring text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/docs/components')}
          >
            Components
          </a>
          <a
            class="focus-ring text-muted-foreground transition-colors hover:text-foreground"
            href={resolve('/docs/installation')}
          >
            Install
          </a>
        </div>
        <Button href={resolve('/docs/components')} size="sm">Browse</Button>
      </nav>

      <div class="mx-auto flex max-w-5xl flex-col items-center gap-7 text-center">
        <LandingPill
          phrases={[
            '100% shai-hulud free',
            'Find hot components in your area! click here!',
            'Kura means warehouse according to chat gippity.',
            'Yes I copied this from shadcn.',
            'bet you thought I vibecoded this.',
            'well, half of it.',
            'okay, maybe 90% of it.',
            'Huntabyte please release mdsx',
            'Kura knows where you live. we are shipping you components.',
            'Farm to table components directly from your local unemployed programmer'
          ]}
          holdDelay={5000}
        />
        <div class="grid gap-5">
          <h1
            class="text-balance text-5xl leading-[0.95] font-semibold text-foreground sm:text-6xl lg:text-7xl"
          >
            <span class="text-primary">Kura</span> is my component warehouse, for
            <span class="text-primary">you.</span>
          </h1>
          <p
            class="mx-auto max-w-3xl text-balance text-base leading-8 text-muted-foreground sm:text-lg"
          >
            Buttons? Inputs? Modals? You want it? It's yours, my friend, as long as you have enough
            pnpm install.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <Button href={resolve('/docs/components')} size="lg">
            Browse Components
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button href={resolve('/docs/installation')} variant="outline" size="lg">
            Install Kura
          </Button>
        </div>
      </div>
    </div>
  </section>

  <LandingShowcase />
</main>
