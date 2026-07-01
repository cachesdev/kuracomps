<script lang="ts">
  import { resolve } from '$app/paths';
  import LandingShowcase from '$lib/components/landing/showcase.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';
  import Header from '$lib/components/header.svelte';
</script>

<Header />

<main id="main-content" class="min-h-dvh bg-background text-foreground">
  <section class="bg-grid">
    <div
      class="container flex min-h-[calc(100dvh-var(--header-height))] items-center justify-center py-16"
    >
      <div class="mx-auto flex w-full max-w-5xl min-w-0 flex-col items-center gap-7 text-center">
        <!-- <LandingPill
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
        /> -->
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
            Simple, boring components for applications that get real use.
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
