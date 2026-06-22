<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from '$lib/components/ui/breadcrumb/index.js';
  import { Card, CardContent, CardHeader } from '$lib/components/ui/card/index.js';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from '$lib/components/ui/dropdown-menu/index.js';
  import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle
  } from '$lib/components/ui/item/index.js';
  import {
    ArrowRightIcon,
    ArrowsClockwiseIcon,
    CalendarIcon,
    DotsThreeIcon,
    GearIcon
  } from 'phosphor-svelte';
  import type { Component } from 'svelte';

  const payments: Array<{
    label: string;
    description: string;
    icon: Component;
  }> = [
    {
      label: 'Change transfer limit',
      description: 'Adjust how much you can send from your balance.',
      icon: GearIcon
    },
    {
      label: 'Scheduled transfers',
      description: 'Set up a transfer to send at a later date.',
      icon: CalendarIcon
    },
    {
      label: 'Recurring card payments',
      description: 'Manage your repeated card transactions.',
      icon: ArrowsClockwiseIcon
    }
  ];
</script>

<Card>
  <CardHeader class="flex flex-col gap-3">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              class={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}
              aria-label="Account options"
            >
              <DotsThreeIcon />
              <span class="sr-only">Account options</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Statements</DropdownMenuItem>
                <DropdownMenuItem>Documents</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Payments</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </CardHeader>
  <CardContent>
    <ItemGroup>
      {#each payments as item (item.label)}
        {const Icon = item.icon}
        <div role="listitem" class="w-full">
          <Item variant="muted">
            <ItemMedia variant="icon">
              <Icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{item.label}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemContent>
            <ArrowRightIcon class="shrink-0 text-muted-foreground" />
          </Item>
        </div>
      {/each}
    </ItemGroup>
  </CardContent>
</Card>
