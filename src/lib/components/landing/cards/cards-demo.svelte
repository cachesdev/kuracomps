<script lang="ts">
  import AccountAccess from './account-access.svelte';
  import AnalyticsCard from './analytics-card.svelte';
  import ClaimableBalance from './claimable-balance.svelte';
  import ContributionHistory from './contribution-history.svelte';
  import DividendIncome from './dividend-income.svelte';
  import EmptyDistributeTrack from './empty-distribute-track.svelte';
  import NewMilestone from './new-milestone.svelte';
  import NotificationSettings from './notification-settings.svelte';
  import Payments from './payments.svelte';
  import PayoutThreshold from './payout-threshold.svelte';
  import PowerUsage from './power-usage.svelte';
  import QrConnect from './qr-connect.svelte';
  import SavingsTargets from './savings-targets.svelte';
  import SidebarNav from './sidebar-nav.svelte';
  import TransferFunds from './transfer-funds.svelte';
  import UIElements from './ui-elements.svelte';
</script>

<div
  class="relative z-10 mx-auto grid w-full gap-6 px-4 py-6 pb-28 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 2xl:grid-cols-5 2xl:px-12"
>
  <div class="flex flex-col gap-6">
    <UIElements />
    <SidebarNav />
    <SavingsTargets />
  </div>
  <div class="hidden flex-col gap-6 md:flex">
    <ContributionHistory />
    <ClaimableBalance />
    <DividendIncome />
  </div>
  <div class="hidden flex-col gap-6 lg:flex">
    <NewMilestone />
    <PayoutThreshold />
    <AccountAccess />
  </div>
  <div class="hidden flex-col gap-6 xl:flex">
    <QrConnect />
    <TransferFunds />
    <Payments />
  </div>
  <div class="hidden flex-col gap-6 2xl:flex">
    <EmptyDistributeTrack />
    <AnalyticsCard />
    <NotificationSettings />
    <PowerUsage />
  </div>
</div>
