<script lang="ts">
  import CardsDemo from './cards/cards-demo.svelte';
</script>

<section
  aria-label="Kura component showcase"
  class="relative isolate overflow-hidden border-y border-border bg-background"
>
  <div
    class="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-background via-background/85 to-transparent"
    aria-hidden="true"
  ></div>
  <CardsDemo />
  <div
    class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-80 bg-linear-to-t from-background via-background/90 to-transparent"
    aria-hidden="true"
  ></div>
</section>
