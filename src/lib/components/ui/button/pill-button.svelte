<script lang="ts" module>
  import { Button, type ButtonProps } from './index.js';
  import { cn } from '$lib/utils.js';

  // PillButton is the opt-in "destination CTA" affordance. It wraps Button and
  // forces rounded-full + slightly larger sizing that reads well at pill scale
  // (h-8 pills feel knob-like; h-9 reads as an intentional destination button).
  // Restricted to the two "clear action" variants per DESIGN.md §4: default
  // (citron CTA) and outline (quiet destination). Non-action variants fall back
  // to default at runtime. Do not use pills in toolbars, button groups, tables,
  // or inline in text — use <Button> there instead.

  const PILL_CLASS =
    'rounded-full h-9 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4';
</script>

<script lang="ts">
  let {
    class: className,
    variant = 'default',
    size = 'default',
    ref = $bindable(null),
    href = undefined,
    type = 'button',
    disabled,
    children,
    ...restProps
  }: ButtonProps = $props();

  const safeVariant = $derived(variant === 'outline' ? 'outline' : 'default');
</script>

{#if href}
  <Button
    bind:ref
    {href}
    variant={safeVariant}
    {size}
    {disabled}
    class={cn(PILL_CLASS, className)}
    {...restProps}
  >
    {@render children?.()}
  </Button>
{:else}
  <Button
    bind:ref
    variant={safeVariant}
    {size}
    {type}
    {disabled}
    class={cn(PILL_CLASS, className)}
    {...restProps}
  >
    {@render children?.()}
  </Button>
{/if}
