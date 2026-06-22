<script lang="ts">
  import { PillButton } from '$lib/components/ui/button/index.js';
  import { ArrowRightIcon } from 'phosphor-svelte';
</script>

<div class="hairline-frame w-full max-w-xl border border-border bg-card p-5 text-card-foreground">
  <div class="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
    <div class="grid gap-2">
      <h3 class="text-lg font-semibold">Create project?</h3>
      <p class="max-w-md text-sm/6 text-muted-foreground">Start with the default component set.</p>
    </div>
    <div class="flex flex-wrap gap-2 sm:justify-end">
      <PillButton href="/docs/installation">
        Create project
        <ArrowRightIcon data-icon="inline-end" />
      </PillButton>
      <PillButton href="/docs/components" variant="outline">View components</PillButton>
    </div>
  </div>
</div>
