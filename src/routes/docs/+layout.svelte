<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { mainNavItems, sidebarNavItems } from '$lib/navigation.js';
  import { Button } from '$lib/components/ui/button/index.js';

  let { children } = $props();

  const pathname = $derived(page.url.pathname as string);

  function isActive(href = '') {
    if (href === '/docs') return pathname === '/docs';
    return pathname === href || pathname.startsWith(`${href}/`);
  }
</script>

<div class="min-h-[100dvh] bg-background text-foreground">
  <header
    class="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78"
  >
    <div class="container flex h-(--header-height) items-center gap-4">
      <a
        href={resolve('/docs')}
        class="terminal-focus font-mono text-sm font-semibold tracking-widest uppercase"
      >
        kura
      </a>

      <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
        {#each mainNavItems as item (item.title)}
          {#if item.href}
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              class={[
                'terminal-focus px-3 py-2 font-mono text-xs font-semibold tracking-widest uppercase transition-colors hover:text-foreground',
                isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
              ]}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.title}
            </a>
          {/if}
        {/each}
      </nav>

      <div class="md:hidden">
        <Button href="/registry/styles/sera/index.json" variant="outline" size="sm">
          Registry
        </Button>
      </div>
    </div>
  </header>

  <div
    class="container grid min-h-[calc(100dvh-var(--header-height))] lg:grid-cols-[18rem_minmax(0,1fr)]"
  >
    <aside
      class="no-scrollbar sticky top-(--header-height) hidden h-[calc(100dvh-var(--header-height))] overflow-y-auto border-r border-border py-8 pr-6 lg:block"
      data-llm-ignore
    >
      <nav class="grid gap-8" aria-label="Documentation">
        {#each sidebarNavItems as section (section.title)}
          <section class="grid gap-3">
            <h2 class="terminal-label">{section.title}</h2>
            <div class="grid gap-1">
              {#each section.items as item (item.title)}
                {#if item.href}
                  <a
                    href={item.href}
                    class={[
                      'terminal-focus border-l px-3 py-1.5 text-sm leading-6 transition-colors hover:border-primary/70 hover:text-foreground',
                      isActive(item.href)
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground'
                    ]}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.title}
                  </a>
                {/if}
              {/each}
            </div>
          </section>
        {/each}
      </nav>
    </aside>

    <main class="min-w-0 lg:pl-10">{@render children()}</main>
  </div>
</div>
