<script lang="ts">
  import CopyButton from '$lib/components/copy-button.svelte';

  let {
    type,
    command
  }: {
    type: 'execute' | 'install' | 'run' | 'create';
    command: string | string[];
  } = $props();

  const commandText = $derived.by(() => {
    const value = Array.isArray(command) ? command.join(' ') : command;

    if (type === 'execute') return `pnpm dlx ${value}`;
    if (type === 'install') return `pnpm add ${value}`;
    if (type === 'run') return `pnpm ${value}`;
    return `pnpm dlx sv create ${value}`;
  });
</script>

<figure data-rehype-pretty-code-figure>
  <pre
    class="no-scrollbar relative min-w-0 overflow-x-auto rounded-lg border border-border bg-card px-4 py-3.5 outline-none"><code
      class="font-mono text-sm leading-none"
      data-language="bash">{commandText}</code
    ></pre>
  <CopyButton text={commandText} />
</figure>
