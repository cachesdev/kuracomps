<script lang="ts">
  import { resolve } from '$app/paths';
  import { cn } from '$lib/utils.js';
  import { ArrowRightIcon } from 'phosphor-svelte';
  import { prefersReducedMotion } from 'svelte/motion';
  import type { PathnameWithSearchOrHash } from '$app/types';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type TypewriterPhase = 'idle' | 'typing' | 'deleting';

  interface Props extends Omit<HTMLAnchorAttributes, 'class' | 'href' | 'aria-label'> {
    phrases: string[];
    href?: PathnameWithSearchOrHash;
    ariaLabel?: string;
    typeDelay?: number;
    deleteDelay?: number;
    holdDelay?: number;
    initialHoldDelay?: number;
    betweenDelay?: number;
    class?: HTMLAnchorAttributes['class'];
  }

  let {
    phrases = [],
    href = '/docs/installation',
    ariaLabel = 'Open installation docs',
    typeDelay = 64,
    deleteDelay = 34,
    holdDelay = 1400,
    initialHoldDelay = 850,
    betweenDelay = 180,
    class: className,
    ...restProps
  }: Props = $props();

  const normalizedPhrases = $derived.by(() =>
    (Array.isArray(phrases) ? phrases : [])
      .map((phrase) => phrase.trim())
      .filter((phrase) => phrase.length > 0)
  );
  const firstPhrase = $derived(normalizedPhrases[0] ?? '');
  const resolvedHref = $derived(resolve(href));
  const reducedMotion = $derived(prefersReducedMotion.current);
  const isStatic = $derived(normalizedPhrases.length <= 1 || reducedMotion);
  const timing = $derived({
    type: normalizeDelay(typeDelay, 24),
    delete: normalizeDelay(deleteDelay, 16),
    hold: normalizeDelay(holdDelay, 0),
    initialHold: normalizeDelay(initialHoldDelay, 0),
    between: normalizeDelay(betweenDelay, 0)
  });

  let displayedText = $state('');
  let phase = $state<TypewriterPhase>('idle');
  const visibleText = $derived(
    displayedText === '' && phase === 'idle' ? firstPhrase : displayedText
  );

  function normalizeDelay(value: number, minimum: number) {
    return Number.isFinite(value) ? Math.max(minimum, value) : minimum;
  }

  function characterDelay(
    character: string,
    index: number,
    baseDelay: number,
    mode: TypewriterPhase
  ) {
    const rhythm = ((character.codePointAt(0) ?? 0) + index * 11) % 7;
    const cadence = rhythm - 3;
    const spaceOffset = character === ' ' ? (mode === 'typing' ? -14 : -8) : 0;
    const floor = mode === 'typing' ? 28 : 16;

    return Math.max(floor, baseDelay + cadence * (mode === 'typing' ? 5 : 3) + spaceOffset);
  }

  $effect(() => {
    const sequence = normalizedPhrases;
    const currentTiming = timing;
    const shouldReduceMotion = reducedMotion;

    displayedText = firstPhrase;
    phase = 'idle';

    if (sequence.length <= 1 || shouldReduceMotion) {
      return;
    }

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function sleep(delay: number) {
      return new Promise<boolean>((resolveSleep) => {
        const timeout = setTimeout(() => {
          resolveSleep(!cancelled);
        }, delay);

        timeouts.push(timeout);
      });
    }

    async function runTypewriter() {
      let phraseIndex = 0;

      if (!(await sleep(currentTiming.initialHold))) return;

      while (!cancelled) {
        const currentCharacters = Array.from(sequence[phraseIndex] ?? '');

        phase = 'deleting';
        for (let length = currentCharacters.length - 1; length >= 0; length -= 1) {
          displayedText = currentCharacters.slice(0, length).join('');

          if (
            !(await sleep(
              characterDelay(
                currentCharacters[length] ?? '',
                length,
                currentTiming.delete,
                'deleting'
              )
            ))
          ) {
            return;
          }
        }

        if (!(await sleep(currentTiming.between))) return;

        phraseIndex = (phraseIndex + 1) % sequence.length;
        const nextCharacters = Array.from(sequence[phraseIndex] ?? '');

        phase = 'typing';
        for (let length = 1; length <= nextCharacters.length; length += 1) {
          displayedText = nextCharacters.slice(0, length).join('');

          if (
            !(await sleep(
              characterDelay(nextCharacters[length - 1] ?? '', length, currentTiming.type, 'typing')
            ))
          ) {
            return;
          }
        }

        phase = 'idle';
        if (!(await sleep(currentTiming.hold))) return;
      }
    }

    runTypewriter();

    return () => {
      cancelled = true;

      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    };
  });
</script>

{#if normalizedPhrases.length > 0}
  <a
    data-landing-pill
    data-phase={phase}
    data-static={isStatic}
    {...restProps}
    href={resolvedHref}
    aria-label={ariaLabel}
    class={cn(
      'focus-ring group inline-flex h-7.5 min-w-0 max-w-[calc(100vw-2rem)] items-center gap-2 overflow-hidden border border-border bg-muted/85 px-3 py-0 font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] transition-[border-color,background-color,box-shadow,color,transform] duration-200 hover:border-primary/50 hover:bg-primary-wash hover:text-foreground active:translate-y-px sm:max-w-full motion-reduce:transition-none',
      className
    )}
  >
    <span class="inline-flex h-4 min-w-0 flex-1 items-center overflow-hidden" aria-hidden="true">
      <span
        class="min-w-0 truncate leading-4 max-sm:[mask-image:linear-gradient(to_right,black_0,black_calc(100%_-_1rem),transparent)]"
        >{visibleText}</span
      >
      <span
        class="landing-pill-cursor ml-1.5 h-3 w-px shrink-0 bg-primary shadow-[0_0_10px_rgb(185_215_101/0.35)]"
      ></span>
    </span>
    <ArrowRightIcon
      aria-hidden="true"
      class="size-3.5 shrink-0 text-primary/85 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transition-none"
    />
  </a>
{/if}
