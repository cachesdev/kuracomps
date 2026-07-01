<script lang="ts">
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { sidebarNavItems } from '$lib/navigation.js';
  import * as Sheet from '$lib/components/ui/sheet/index.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import ListIcon from 'phosphor-svelte/lib/ListIcon';

  let open = $state(false);

  const pathname = $derived(page.url.pathname as string);

  function isActive(href = '') {
    if (href === '/docs') return pathname === '/docs';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  afterNavigate(() => {
    open = false;
  });
</script>

<Sheet.Root bind:open>
  <Sheet.Trigger
    class={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}
    aria-label="Open navigation"
  >
    <ListIcon class="size-4" />
  </Sheet.Trigger>
  <Sheet.Content side="left" class="w-72 p-0">
    <Sheet.Header class="px-4 pt-4">
      <Sheet.Title class="text-sm font-semibold tracking-tight">Navigation</Sheet.Title>
      <Sheet.Description class="sr-only">Documentation sections</Sheet.Description>
    </Sheet.Header>
    <div class="no-scrollbar flex-1 overflow-y-auto p-4">
      <nav class="grid gap-8" aria-label="Documentation">
        {#each sidebarNavItems as section (section.title)}
          <section class="grid gap-3">
            <h2 class="text-xs font-medium text-muted-foreground">{section.title}</h2>
            <div class="grid gap-1">
              {#each section.items as item (item.title)}
                {#if item.href}
                  <a
                    href={item.href}
                    class={[
                      'focus-ring border-l px-3 py-1.5 text-sm leading-6 transition-colors hover:border-primary/70 hover:text-foreground',
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
    </div>
  </Sheet.Content>
</Sheet.Root>
