<script lang="ts">
  import { Slider as SliderPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(),
    orientation = 'horizontal',
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<SliderPrimitive.Root
  bind:ref
  bind:value={value as never}
  data-slot="slider"
  {orientation}
  class={cn(
    'data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col',
    className
  )}
  {...restProps}
>
  {#snippet children({ thumbItems })}
    <span
      data-slot="slider-track"
      data-orientation={orientation}
      class={cn(
        'bg-muted data-horizontal:h-px data-horizontal:w-full data-vertical:h-full data-vertical:w-px relative grow overflow-hidden'
      )}
    >
      <SliderPrimitive.Range
        data-slot="slider-range"
        class={cn('bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full')}
      />
    </span>
    {#each thumbItems as thumb (thumb.index)}
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        index={thumb.index}
        class="border border-link bg-background hover:ring-ring/50 focus-visible:ring-ring/50 size-3 rounded-none transition-colors hover:ring-1 focus-visible:ring-1 focus-visible:outline-hidden block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
      />
    {/each}
  {/snippet}
</SliderPrimitive.Root>
