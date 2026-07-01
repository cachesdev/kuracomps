<script lang="ts">
  import { page } from '$app/state';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { findNeighbors } from '$lib/navigation.js';
  import ArrowLeftIcon from 'phosphor-svelte/lib/ArrowLeftIcon';
  import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';
  import ArrowUpRightIcon from 'phosphor-svelte/lib/ArrowUpRightIcon';
  import Toc from '$lib/components/docs/toc.svelte';
  import MobileToc from '$lib/components/docs/mobile-toc.svelte';

  let { data } = $props();

  const Markdown = $derived(data.component);
  const doc = $derived(data.metadata);
  const neighbors = $derived(findNeighbors(page.url.pathname));
</script>

<svelte:head>
  <title>{doc.title} - Kura</title>
  <meta name="description" content={doc.description} />
</svelte:head>

<MobileToc items={doc.toc} title={doc.title} />

<article
  id="main-content"
  class="grid min-h-[calc(100dvh-var(--header-height))] grid-cols-1 gap-8 py-8 xl:grid-cols-[minmax(0,42rem)_14rem]"
>
  <div class="min-w-0 mx-auto w-full max-w-2xl xl:mx-0">
    <header class="mb-8 grid gap-4 border-b border-border pb-8">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="grid max-w-3xl gap-3">
          <h1 class="scroll-m-24 text-4xl leading-tight font-semibold tracking-tight">
            {doc.title}
          </h1>
          <p class="text-base leading-7 text-muted-foreground text-pretty">
            {doc.description}
          </p>
        </div>

        <div class="docs-nav flex items-center gap-2" data-llm-ignore>
          {#if neighbors.previous}
            <Button
              href={neighbors.previous.href ?? '/docs'}
              variant="outline"
              size="icon-sm"
              aria-label="Previous page"
            >
              <ArrowLeftIcon />
            </Button>
          {/if}
          {#if neighbors.next}
            <Button
              href={neighbors.next.href ?? '/docs'}
              variant="outline"
              size="icon-sm"
              aria-label="Next page"
            >
              <ArrowRightIcon />
            </Button>
          {/if}
        </div>
      </div>

      {#if doc.links?.doc || doc.links?.api || doc.links?.source}
        <div class="flex flex-wrap gap-2">
          {#if doc.links.doc}
            <Badge href={doc.links.doc} variant="secondary" target="_blank" rel="noreferrer">
              Docs
              <ArrowUpRightIcon aria-hidden="true" />
            </Badge>
          {/if}
          {#if doc.links.api}
            <Badge href={doc.links.api} variant="secondary" target="_blank" rel="noreferrer">
              API
              <ArrowUpRightIcon aria-hidden="true" />
            </Badge>
          {/if}
          {#if doc.links.source}
            <Badge href={doc.links.source} variant="secondary" target="_blank" rel="noreferrer">
              Source
              <ArrowUpRightIcon aria-hidden="true" />
            </Badge>
          {/if}
        </div>
      {/if}
    </header>

    <div class="docs-content w-full min-w-0 pb-12">
      <Markdown viewerData={data.viewerData} links={doc.links} />
    </div>

    <footer class="hidden items-center gap-3 border-t border-border pt-8 sm:flex" data-llm-ignore>
      {#if neighbors.previous}
        <Button href={neighbors.previous.href ?? '/docs'} variant="outline" size="sm">
          <ArrowLeftIcon />
          {neighbors.previous.title}
        </Button>
      {/if}
      {#if neighbors.next}
        <Button href={neighbors.next.href ?? '/docs'} variant="outline" size="sm" class="ml-auto">
          {neighbors.next.title}
          <ArrowRightIcon />
        </Button>
      {/if}
    </footer>
  </div>

  <aside
    class="sticky top-[calc(var(--header-height)+2rem)] hidden max-h-[calc(100dvh-var(--header-height)-4rem)] overflow-y-auto py-1 xl:block"
    data-llm-ignore
  >
    <Toc items={doc.toc} />
  </aside>
</article>
