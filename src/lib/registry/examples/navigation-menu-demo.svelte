<script lang="ts">
  import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
  import { cn } from '$lib/utils.js';
  import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import CheckCircleIcon from 'phosphor-svelte/lib/CheckCircleIcon';
  import CircleIcon from 'phosphor-svelte/lib/CircleIcon';
  import QuestionIcon from 'phosphor-svelte/lib/QuestionIcon';

  import { IsMobile } from '$lib/hooks/is-mobile.svelte.js';

  const isMobile = new IsMobile();

  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/docs/components/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Hover Card',
      href: '/docs/components/hover-card',
      description: 'For sighted users to preview content available behind a link.'
    },
    {
      title: 'Progress',
      href: '/docs/components/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
    },
    {
      title: 'Scroll-area',
      href: '/docs/components/scroll-area',
      description: 'Visually or semantically separates content.'
    },
    {
      title: 'Tabs',
      href: '/docs/components/tabs',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
    },
    {
      title: 'Tooltip',
      href: '/docs/components/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
    }
  ];

  type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
    title: string;
    href: string;
    content: string;
  };
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
  <li>
    <NavigationMenu.Link>
      {#snippet child()}
        <a
          {href}
          class={cn(
            'block space-y-1 border border-transparent p-2 leading-none no-underline transition-colors outline-none select-none hover:border-primary/50 hover:bg-muted hover:text-foreground focus:border-primary/50 focus:bg-muted focus:text-foreground',
            className
          )}
          {...restProps}
        >
          <div class="text-xs leading-none font-medium text-foreground">{title}</div>
          <p class="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {content}
          </p>
        </a>
      {/snippet}
    </NavigationMenu.Link>
  </li>
{/snippet}

<NavigationMenu.Root viewport={isMobile.current}>
  <NavigationMenu.List class="flex-wrap">
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul class="grid gap-1.5 p-1 md:w-[420px] md:grid-cols-2">
          {@render ListItem({
            href: '/',
            title: 'Kura',
            content: 'Beautifully designed components built with Tailwind CSS.',
            class: 'border-primary/30 bg-primary-wash hover:bg-muted'
          })}
          {@render ListItem({
            href: '/docs',
            title: 'Introduction',
            content: 'Re-usable components built using Bits UI and Tailwind CSS.'
          })}
          {@render ListItem({
            href: '/docs/installation',
            title: 'Installation',
            content: 'How to install dependencies and structure your app.'
          })}
          {@render ListItem({
            href: '/docs/components',
            title: 'Components',
            content: 'All documented registry components in one place.'
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul
          class="grid w-[280px] gap-1.5 p-1 sm:w-[380px] md:w-[480px] md:grid-cols-2 lg:w-[560px]"
        >
          {#each components as component, i (i)}
            {@render ListItem({
              href: component.href,
              title: component.title,
              content: component.description
            })}
          {/each}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>

    <NavigationMenu.Item>
      <NavigationMenu.Link>
        {#snippet child()}
          <a href="/docs" class={navigationMenuTriggerStyle()}>Docs</a>
        {/snippet}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item class="hidden md:block">
      <NavigationMenu.Trigger>List</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul class="grid w-[280px] gap-1.5 p-1">
          <li>
            <NavigationMenu.Link href="##" class="flex-col items-start gap-1">
              <div class="font-medium">Components</div>
              <div class="text-muted-foreground">Browse all components in the library.</div>
            </NavigationMenu.Link>
            <NavigationMenu.Link href="##" class="flex-col items-start gap-1">
              <div class="font-medium">Documentation</div>
              <div class="text-muted-foreground">Learn how to use the library.</div>
            </NavigationMenu.Link>
            <NavigationMenu.Link href="##" class="flex-col items-start gap-1">
              <div class="font-medium">Blog</div>
              <div class="text-muted-foreground">Read our latest blog posts.</div>
            </NavigationMenu.Link>
          </li>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item class="hidden md:block">
      <NavigationMenu.Trigger>Simple</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul class="grid w-[180px] gap-1 p-1">
          <li>
            <NavigationMenu.Link href="##">Components</NavigationMenu.Link>
            <NavigationMenu.Link href="##">Documentation</NavigationMenu.Link>
            <NavigationMenu.Link href="##">Blocks</NavigationMenu.Link>
          </li>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item class="hidden md:block">
      <NavigationMenu.Trigger>With Icon</NavigationMenu.Trigger>

      <NavigationMenu.Content>
        <ul class="grid w-[180px] gap-1 p-1">
          <li>
            <NavigationMenu.Link href="##" class="flex-row items-center gap-2">
              <QuestionIcon />
              Backlog
            </NavigationMenu.Link>

            <NavigationMenu.Link href="##" class="flex-row items-center gap-2">
              <CircleIcon />
              To Do
            </NavigationMenu.Link>

            <NavigationMenu.Link href="##" class="flex-row items-center gap-2">
              <CheckCircleIcon />
              Done
            </NavigationMenu.Link>
          </li>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
