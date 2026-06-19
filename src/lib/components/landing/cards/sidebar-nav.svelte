<script lang="ts">
  import { SidebarMenuButton, SidebarMenuItem } from '$lib/components/ui/sidebar/index.js';
  import {
    ArrowsLeftRightIcon,
    BankIcon,
    BellIcon,
    BookOpenIcon,
    CalendarIcon,
    ChartBarIcon,
    ChartLineIcon,
    ChartPieIcon,
    ChatCircleIcon,
    CreditCardIcon,
    FileTextIcon,
    GlobeIcon,
    PaletteIcon,
    PulseIcon,
    QuestionIcon,
    ShieldIcon,
    TargetIcon,
    TrendUpIcon,
    UserIcon,
    WalletIcon
  } from 'phosphor-svelte';
  import type { Component } from 'svelte';
  import SidebarSection from './sidebar-section.svelte';

  const sections: Array<{
    label: string;
    class?: string;
    items: Array<{ label: string; icon: Component; active?: boolean }>;
  }> = [
    {
      label: 'Planning',
      class: 'xl:col-start-1 xl:row-start-1',
      items: [
        { label: 'Documents', icon: FileTextIcon },
        { label: 'Budget', icon: WalletIcon },
        { label: 'Reports', icon: ChartBarIcon },
        { label: 'Goals', icon: TargetIcon },
        { label: 'Calendar', icon: CalendarIcon }
      ]
    },
    {
      label: 'Support',
      class: 'xl:col-start-2 xl:row-start-1',
      items: [
        { label: 'Help Center', icon: QuestionIcon },
        { label: 'Docs', icon: BookOpenIcon },
        { label: 'Contact Us', icon: ChatCircleIcon },
        { label: 'Status', icon: PulseIcon },
        { label: 'Community', icon: GlobeIcon }
      ]
    },
    {
      label: 'Overview',
      class: 'xl:col-start-1 xl:row-start-2',
      items: [
        { label: 'Analytics', icon: ChartLineIcon, active: true },
        { label: 'Transactions', icon: ArrowsLeftRightIcon },
        { label: 'Investments', icon: TrendUpIcon },
        { label: 'Accounts', icon: BankIcon },
        { label: 'Spending', icon: ChartPieIcon }
      ]
    },
    {
      label: 'Account',
      class: 'xl:col-start-2 xl:row-start-2',
      items: [
        { label: 'Profile', icon: UserIcon },
        { label: 'Billing', icon: CreditCardIcon, active: true },
        { label: 'Notifications', icon: BellIcon },
        { label: 'Security', icon: ShieldIcon },
        { label: 'Appearance', icon: PaletteIcon }
      ]
    }
  ];
</script>

<div class="grid w-full grid-cols-2 gap-4">
  {#each sections as section (section.label)}
    <SidebarSection label={section.label} class={section.class}>
      {#each section.items as item (item.label)}
        {const Icon = item.icon}
        <SidebarMenuItem>
          <SidebarMenuButton isActive={item.active}>
            <Icon />
            {item.label}
          </SidebarMenuButton>
        </SidebarMenuItem>
      {/each}
    </SidebarSection>
  {/each}
</div>
