<script lang="ts">
  import CopyButton from '$lib/components/copy-button.svelte';
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import { cn } from '$lib/utils.js';
  import { TerminalIcon } from 'phosphor-svelte';

  let {
    type,
    command
  }: {
    type: 'execute' | 'install' | 'run' | 'create';
    command: string | string[];
  } = $props();

  const packageManagers = ['pnpm', 'npm', 'yarn', 'bun'] as const;
  type PackageManager = (typeof packageManagers)[number];

  let packageManager = $state<PackageManager>('pnpm');

  function commandValue() {
    return Array.isArray(command) ? command.join(' ') : command;
  }

  function getCommandText(pm: PackageManager) {
    const value = commandValue();

    if (type === 'execute') {
      if (pm === 'npm') return `npx ${value}`;
      if (pm === 'yarn') return `yarn dlx ${value}`;
      if (pm === 'bun') return `bunx ${value}`;
      return `pnpm dlx ${value}`;
    }

    if (type === 'install') {
      if (pm === 'npm') return `npm install ${value}`;
      if (pm === 'yarn') return `yarn add ${value}`;
      if (pm === 'bun') return `bun add ${value}`;
      return `pnpm add ${value}`;
    }

    if (type === 'run') {
      if (pm === 'npm') return `npm run ${value}`;
      if (pm === 'bun') return `bun ${value}`;
      return `${pm} ${value}`;
    }

    if (pm === 'npm') return `npx sv create ${value}`;
    if (pm === 'yarn') return `yarn dlx sv create ${value}`;
    if (pm === 'bun') return `bunx sv create ${value}`;
    return `pnpm dlx sv create ${value}`;
  }

  const commandText = $derived(getCommandText(packageManager));

  function commandParts(value: string) {
    let tokenIndex = -1;

    return value.split(/(\s+)/).map((part) => {
      if (/^\s+$/.test(part)) return { value: part, kind: 'space' };

      tokenIndex += 1;

      if (tokenIndex === 0) return { value: part, kind: 'command' };
      if (part.startsWith('-')) return { value: part, kind: 'flag' };
      if (part.includes('@') || part.includes('/')) return { value: part, kind: 'package' };

      return { value: part, kind: 'arg' };
    });
  }

  function commandPartClass(kind: string) {
    return cn(
      kind === 'command' && 'text-link',
      kind === 'flag' && 'text-warning',
      kind === 'package' && 'text-primary',
      kind === 'arg' && 'text-code-foreground',
      kind === 'space' && 'text-code-foreground'
    );
  }
</script>

<figure data-rehype-pretty-code-figure>
  <Tabs.Root bind:value={packageManager} class="gap-0 overflow-x-auto">
    <div class="flex h-9 min-w-0 items-center gap-2 border-b border-border px-3 py-1">
      <div
        class="flex size-4 shrink-0 items-center justify-center bg-foreground text-code opacity-75"
      >
        <TerminalIcon class="size-3" />
      </div>
      <Tabs.List
        class="h-auto min-w-0 gap-0.5 border-0 bg-transparent p-0 group-data-horizontal/tabs:h-auto"
        data-llm-ignore
      >
        {#each packageManagers as pm (pm)}
          <Tabs.Trigger
            value={pm}
            class="h-7 flex-none border-transparent px-2 pt-0.5 pb-1 font-mono text-xs text-muted-foreground/70 shadow-none hover:border-transparent hover:bg-primary-wash hover:text-foreground data-active:border-transparent data-active:bg-primary data-active:text-primary-foreground data-active:shadow-none dark:data-active:border-transparent dark:data-active:bg-primary dark:data-active:text-primary-foreground"
          >
            {pm}
          </Tabs.Trigger>
        {/each}
      </Tabs.List>
    </div>

    {#each packageManagers as pm (pm)}
      <Tabs.Content value={pm} class="mt-0 border-0 bg-transparent p-0 text-code-foreground">
        <pre class="no-scrollbar min-w-0 overflow-x-auto px-4 py-3 outline-none"><code
            class="font-mono text-sm leading-none"
            data-language="bash"
            >{#each commandParts(getCommandText(pm)) as part}<span
                class={commandPartClass(part.kind)}>{part.value}</span
              >{/each}</code
          ></pre>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
  <CopyButton text={commandText} />
</figure>
