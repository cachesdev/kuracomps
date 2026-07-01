<script lang="ts">
  import * as InputGroup from '$lib/components/ui/input-group/index.js';
  import CheckIcon from 'phosphor-svelte/lib/CheckIcon';
  import CreditCardIcon from 'phosphor-svelte/lib/CreditCardIcon';
  import EnvelopeSimpleIcon from 'phosphor-svelte/lib/EnvelopeSimpleIcon';
  import InfoIcon from 'phosphor-svelte/lib/InfoIcon';
  import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
  import StarIcon from 'phosphor-svelte/lib/StarIcon';
</script>

<div class="grid w-full max-w-sm gap-6">
  <InputGroup.Root>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <MagnifyingGlassIcon />
    </InputGroup.Addon>
  </InputGroup.Root>
  <InputGroup.Root>
    <InputGroup.Input type="email" placeholder="Enter your email" />
    <InputGroup.Addon>
      <EnvelopeSimpleIcon />
    </InputGroup.Addon>
  </InputGroup.Root>
  <InputGroup.Root>
    <InputGroup.Input placeholder="Card number" />
    <InputGroup.Addon>
      <CreditCardIcon />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
      <CheckIcon />
    </InputGroup.Addon>
  </InputGroup.Root>
  <InputGroup.Root>
    <InputGroup.Input placeholder="Card number" />
    <InputGroup.Addon align="inline-end">
      <StarIcon />
      <InfoIcon />
    </InputGroup.Addon>
  </InputGroup.Root>
</div>
