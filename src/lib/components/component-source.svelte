<script lang="ts">
  import CopyButton from '$lib/components/copy-button.svelte';

  type RegistryFile = {
    target?: string;
    path?: string;
    content?: string;
  };

  let {
    item
  }: {
    item: {
      name: string;
      files?: RegistryFile[];
    } | null;
  } = $props();
</script>

{#if item?.files?.length}
  <div class="flex flex-col gap-4">
    {#each item.files as file ((file.target ?? file.path) || file.content)}
      <figure data-rehype-pretty-code-figure>
        {#if file.target || file.path}
          <figcaption>{file.target ?? file.path}</figcaption>
        {/if}
        <pre
          class="no-scrollbar relative min-w-0 overflow-x-auto rounded-lg border border-border bg-card px-4 py-3.5 outline-none"><code
            >{file.content ?? ''}</code
          ></pre>
        <CopyButton text={file.content ?? ''} />
      </figure>
    {/each}
  </div>
{/if}
