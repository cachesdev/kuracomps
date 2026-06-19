<script>
  import { resolve } from '$app/paths';
  import { ArrowRightIcon } from 'phosphor-svelte';
</script>

<a
  href={resolve('/docs/installation')}
  class="focus-ring inline-flex items-center gap-2 border border-border bg-muted px-3 py-1.5 font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:border-primary/50 hover:text-foreground"
>
  Kura registry
  <ArrowRightIcon class="size-3.5" />
</a>
