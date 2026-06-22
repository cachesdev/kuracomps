<script lang="ts">
  import { PillButton } from '$lib/components/ui/button/index.js';
  import { ArrowRightIcon } from 'phosphor-svelte';
</script>

<div
  class="hairline-frame grid max-w-sm gap-4 border border-border bg-card p-4 text-card-foreground"
>
  <div class="grid gap-1">
    <h3 class="text-base font-semibold">Create project?</h3>
    <p class="text-sm/6 text-muted-foreground">Start with the default component set.</p>
  </div>
  <div class="flex flex-wrap justify-end gap-2">
    <PillButton variant="outline">Review settings</PillButton>
    <PillButton>
      Create project
      <ArrowRightIcon data-icon="inline-end" />
    </PillButton>
  </div>
</div>
