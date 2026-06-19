<script lang="ts">
  import PMExecute from './pm-execute.svelte';

  let { name }: { name: string } = $props();
</script>

<PMExecute command={`jsrepo@latest add ${name}`} />
