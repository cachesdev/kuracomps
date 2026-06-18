<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';

  let api = $state<CarouselAPI>();

  const count = $derived(api ? api.scrollSnapList().length : 0);
  let current = $state(0);
  const SLIDES = [1, 2, 3, 4, 5];

  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap() + 1;
      api.on('select', () => {
        current = api!.selectedScrollSnap() + 1;
      });
    }
  });
</script>

<div>
  <Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="w-full max-w-xs">
    <Carousel.Content>
      {#each SLIDES as slide (slide)}
        <Carousel.Item>
          <Card.Root>
            <Card.Content class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{slide}</span>
            </Card.Content>
          </Card.Root>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
  <div class="text-muted-foreground py-2 text-center text-sm">
    Slide {current} of {count}
  </div>
</div>
