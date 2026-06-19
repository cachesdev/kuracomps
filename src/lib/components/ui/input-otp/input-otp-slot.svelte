<script lang="ts">
  import { PinInput as InputOTPPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    cell,
    class: className,
    ...restProps
  }: InputOTPPrimitive.CellProps = $props();
</script>

<InputOTPPrimitive.Cell
  {cell}
  bind:ref
  data-slot="input-otp-slot"
  class={cn(
    'border-border bg-muted text-foreground data-[active=true]:border-ring data-[active=true]:ring-1 data-[active=true]:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 size-10 rounded-none border  text-sm transition-[color,border-color,box-shadow] outline-none first:rounded-none last:rounded-none relative flex items-center justify-center data-[active=true]:z-10',
    className
  )}
  {...restProps}
>
  {cell.char}
  {#if cell.hasFakeCaret}
    <div
      class="cn-input-otp-caret pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div class="animate-caret-blink bg-foreground h-4 w-px duration-1000"></div>
    </div>
  {/if}
</InputOTPPrimitive.Cell>
