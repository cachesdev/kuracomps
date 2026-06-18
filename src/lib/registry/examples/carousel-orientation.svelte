<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Carousel from '$lib/components/ui/carousel/index.js';

  const SLIDES = [1, 2, 3, 4, 5];
</script>

<Carousel.Root
  opts={{
    align: 'start'
  }}
  orientation="vertical"
  class="w-full max-w-xs"
>
  <Carousel.Content class="-mt-1 h-[200px]">
    {#each SLIDES as slide (slide)}
      <Carousel.Item class="pt-1 md:basis-1/2">
        <div class="p-1">
          <Card.Root>
            <Card.Content class="flex items-center justify-center p-6">
              <span class="text-3xl font-semibold">{slide}</span>
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
