<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="flex flex-row flex-wrap items-center gap-12">
  <Avatar.Root>
    <Avatar.Image src="https://github.com/cachesdev.png" alt="@cachesdev" />
    <Avatar.Fallback>CD</Avatar.Fallback>
  </Avatar.Root>
  <Avatar.Root class="rounded-lg">
    <Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
    <Avatar.Fallback>ER</Avatar.Fallback>
  </Avatar.Root>
  <div
    class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
  >
    <Avatar.Root>
      <Avatar.Image src="https://github.com/cachesdev.png" alt="@cachesdev" />
      <Avatar.Fallback>CD</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
      <Avatar.Fallback>LR</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
      <Avatar.Fallback>ER</Avatar.Fallback>
    </Avatar.Root>
  </div>
</div>
