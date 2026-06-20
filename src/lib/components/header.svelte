<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { mainNavItems } from '$lib/navigation.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { GithubLogoIcon } from 'phosphor-svelte';
  import ModeToggle from '$lib/components/mode-toggle.svelte';
  import type { Snippet } from 'svelte';

  let {
    sticky = false,
    mobileNav
  }: {
    sticky?: boolean;
    mobileNav?: Snippet;
  } = $props();

  const pathname = $derived(page.url.pathname as string);

  function isActive(href = '') {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const GITHUB_URL = 'https://github.com/cachesdev/kuracomps';
</script>

<header
  class={[
    'z-50 border-b border-border bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78',
    sticky ? 'sticky top-0' : ''
  ]}
>
  <div class="container flex h-(--header-height) items-center gap-4">
    {#if mobileNav}
      <div class="flex items-center lg:hidden">
        {@render mobileNav()}
      </div>
    {/if}

    <a href={resolve('/')} class="focus-ring text-sm font-semibold tracking-tight text-primary">
      Kura
    </a>

    <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
      {#each mainNavItems as item (item.title)}
        {#if item.href}
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            class={[
              'focus-ring rounded-none px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
              isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
            ]}
            aria-current={isActive(item.href) ? 'page' : undefined}
          >
            {item.title}
          </a>
        {/if}
      {/each}
    </nav>

    <div class="ml-auto flex items-center gap-1 md:ml-2">
      <Button
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        variant="ghost"
        size="icon-sm"
        aria-label="GitHub repository"
      >
        <GithubLogoIcon class="size-4" />
      </Button>
      <ModeToggle />
    </div>
  </div>
</header>
