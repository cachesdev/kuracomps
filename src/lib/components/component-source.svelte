<script lang="ts">
  import CopyButton from '$lib/components/copy-button.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import CaretDownIcon from 'phosphor-svelte/lib/CaretDownIcon';
  import FileCodeIcon from 'phosphor-svelte/lib/FileCodeIcon';

  type RegistryFile = {
    target?: string;
    path?: string;
    content?: string;
    highlightedContent?: string;
  };

  let {
    item
  }: {
    item: {
      name: string;
      files?: RegistryFile[];
    } | null;
  } = $props();

  const files = $derived(item?.files ?? []);
  let activeIndex = $state(0);
  let open = $state(false);
  const activeFile = $derived(files[activeIndex] ?? files[0]);

  function fileName(file: RegistryFile | undefined) {
    return file?.target ?? file?.path ?? 'component.svelte';
  }
</script>

{#if files.length}
  <figure data-rehype-pretty-code-figure>
    <figcaption class="h-9 justify-between py-1">
      <DropdownMenu.Root bind:open>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button
              {...props}
              variant="outline"
              size="sm"
              class="h-7 max-w-[min(22rem,calc(100vw-5rem))] justify-start font-mono"
            >
              <FileCodeIcon />
              <span class="truncate">{fileName(activeFile)}</span>
              <CaretDownIcon class="ms-auto" />
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-72">
          <DropdownMenu.Group>
            {#each files as file, index (fileName(file))}
              <DropdownMenu.Item
                onclick={() => {
                  activeIndex = index;
                  open = false;
                }}
              >
                <FileCodeIcon />
                <span class="truncate">{fileName(file)}</span>
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <CopyButton placement="inline" text={activeFile?.content ?? ''} />
    </figcaption>

    {#if activeFile?.highlightedContent}
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html activeFile.highlightedContent}
    {:else}
      <pre class="no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none"><code
          >{activeFile?.content ?? ''}</code
        ></pre>
    {/if}
  </figure>
{/if}
