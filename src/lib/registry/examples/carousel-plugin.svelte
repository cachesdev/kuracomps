<script lang="ts">
  import Autoplay from 'embla-carousel-autoplay';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';

  const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
  const SLIDES = [1, 2, 3, 4, 5];
</script>

<Carousel.Root
  plugins={[plugin]}
  class="w-full max-w-xs"
  onmouseenter={plugin.stop}
  onmouseleave={plugin.reset}
>
  <Carousel.Content>
    {#each SLIDES as slide (slide)}
      <Carousel.Item>
        <div class="p-1">
          <Card.Root>
            <Card.Content class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{slide}</span>
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
