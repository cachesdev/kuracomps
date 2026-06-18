<script lang="ts">
  import type { Component } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import ComponentPreviewTabs from './component-preview-tabs.svelte';

  let {
    name,
    class: className,
    align = 'center',
    hideCode = false,
    ...restProps
  }: HTMLAttributes<HTMLElement> & {
    name: string;
    align?: 'center' | 'start' | 'end';
    description?: string;
    hideCode?: boolean;
    component?: Component;
  } = $props();
</script>

<ComponentPreviewTabs {name} class={className} {align} {hideCode} {...restProps} />
