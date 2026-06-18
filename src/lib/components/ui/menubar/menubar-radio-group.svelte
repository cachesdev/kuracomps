<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: MenubarPrimitive.RadioGroupProps = $props();
</script>

<MenubarPrimitive.RadioGroup
  bind:ref
  bind:value
  data-slot="menubar-radio-group"
  class={cn('border-border/60 py-1 not-first:border-t', className)}
  {...restProps}
/>
