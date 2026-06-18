# Design System: Portfolio Component System

## 1. Visual Theme & Atmosphere

A dark, framed-grid interface for component-heavy product work. The atmosphere is
precise, dense enough to feel operational, and restrained enough to avoid terminal
cosplay. Think black-box lab bench: off-black panels, thin structural lines, plain
component-focused copy, and one muted signal accent.

- **Density:** Daily App Balanced, 6/10. Information is compact, but sections keep
  enough air for scanning.
- **Variance:** Offset Asymmetric, 7/10. Heroes and major sections use uneven columns,
  wide empty cells, and offset visual blocks.
- **Motion:** Fluid CSS, 5/10. Motion is deliberate, short, and tied to state.

## 2. Color Palette & Roles

- **Off-Black Canvas** (`#08090B`) - page background and dominant viewport color.
- **Panel Charcoal** (`#0D0F12`) - cards, popovers, modal surfaces, and framed panels.
- **Control Charcoal** (`#15171B`) - inputs, muted cells, quiet table rows, inactive
  tabs.
- **Raised Zinc** (`#202328`) - hover rows, secondary surfaces, and selected-adjacent
  fills.
- **Structural Border** (`#262A30`) - 1px panel borders, grid divisions, menu borders.
- **Primary Ink** (`#F4F4F5`) - headings and high-priority text.
- **Muted Steel** (`#A3A7AE`) - body copy, helper text, metadata.
- **Signal Citron** (`#B9D765`) - the only accent. Use for primary actions, active
  states, focus rings, selected controls, and sparse data highlights.
- **Signal Soft** (`#D0E891`) - link hover, chart contrast, and small highlight text.
- **Signal Deep** (`#708936`) - low-emphasis accent fills and chart secondary values.
- **Operational Green** (`#38B66B`) - success and healthy sync states only.
- **Warning Ochre** (`#D1AA24`) - warning, drift, and attention states.
- **Destructive Red** (`#F85149`) - destructive actions and inline validation errors.

Maximum one accent color is allowed. Do not reintroduce electric blue, purple glow,
or pure black.

## 3. Typography Rules

- **Display:** Geist Variable. Large headings use weight `600`, tight line-height
  (`0.95` to `1.05`), and balanced wrapping.
- **Body:** Geist Variable. Body copy uses relaxed leading (`1.65` to `1.8`) and max
  width near `65ch`.
- **Mono:** system monospace stack. Use for form labels, code, keyboard shortcuts,
  technical metadata, and real metric numbers.
- **Labels:** mono, uppercase, `0.625rem` to `0.75rem`, positive tracking
  (`0.08em` to `0.14em`). A label must name the actual UI affordance or field. Do not
  use decorative slash labels like "// system" or vague headers like "audit-ready".
- **Banned:** Inter, generic serif fonts, generic title case, oversized all-caps
  paragraphs, and proportional metric numbers.

## 4. Component Stylings

- **Buttons:** Rounded pills are reserved for clear actions. Primary buttons use Signal
  Citron fill with dark text. Outline buttons stay dark with a thin border. Active
  feedback uses a 1px downward translate. No neon outer glow.
- **Cards and panels:** Use cards only for real hierarchy. Default surface is Panel
  Charcoal with a 1px Structural Border and subtle inset light. Prefer grid cells,
  top rules, and dividers over floating card stacks.
- **Badges:** Treat badges as compact mono labels. Avoid marketing-style pills for
  large groups; use restrained borders and small fills.
- **Inputs and forms:** Label above input, helper text below when useful, inline error
  text below the field with `role="alert"`. Focus ring uses Signal Citron at low
  opacity. No floating labels.
- **Menus and overlays:** All overlay content shares Panel Charcoal, Structural Border,
  `z-50`, and short transform/opacity entrance. Reuse the same selected/focus color
  across command, dropdown, context menu, menubar, tabs, and calendars.
- **Tables and data:** Use mono numbers with tabular rhythm. Hover rows use Raised
  Zinc. Selected rows use Signal Citron wash, not full neon fills.
- **Loaders:** Prefer skeletons that match the final layout shape. Spinners are allowed
  only as tiny inline status indicators.
- **Empty states:** Compose icon/media, short title, explanation, and one action.
  Never show only "No data".
- **Errors:** Direct, calm, sentence-case text. No "Oops", no exclamation marks.

## 5. Layout Principles

- Use CSS Grid for all page-level layout. Avoid flex percentage math.
- Max content width is `80rem` to `88rem`, centered.
- Major sections are framed by full-width horizontal rules and internal grid lines.
- Hero sections are asymmetric. Centered hero composition is banned for this project.
- Use blocky signal-map visuals and live component previews instead of decorative
  gradients. Bar stacks should read as luminous mass snapped to the grid, not a tidy
  chart. Blocks may span multiple grid cells, but each block is either flush left,
  flush right, or fills the full grid span. Never use arbitrary centered offsets.
  Rows may have empty cells before the first lit block, but never insert an empty grid
  cell between lit blocks on the same row. Each block keeps a slight inset from the
  grid line. Add subtle grain and edge falloff inside the blocks so they feel
  atmospheric rather than flat.
- Avoid 3 equal card feature rows. Use asymmetric grids, dense ledgers, or live preview
  panels.
- Full-height screens use `min-height: 100dvh`, never `height: 100vh`.
- Mobile puts content before navigation. Navigation can follow as a component map or
  collapse into a compact switcher.

## 6. Motion & Interaction

- Default transition duration: `200ms` for controls, `300ms` for section reveals.
- Preferred easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entry and overlay motion.
- Spring-feel target: stiffness `100`, damping `20` when using motion primitives.
- Animate only `transform` and `opacity`; never animate layout properties.
- Lists should cascade in small delays when introduced.
- Active surfaces may use subtle shimmer or pulse, but only inside bounded cells.
- Respect reduced motion by removing loops and keeping state changes instant but clear.

## 7. Responsive Rules

- Below `768px`, every multi-column layout collapses to a single column.
- No horizontal scroll on mobile. Fixed demo surfaces must either wrap or become
  scroll-contained inside their own framed region.
- Touch targets are at least `44px`.
- Headlines use responsive `clamp()` or breakpoint sizing, never viewport-width font
  scaling.
- Inline visual blocks stack below or above headline text on mobile; text must never
  overlap visual assets.
- Long labels and buttons must wrap or truncate cleanly.

## 8. Anti-Patterns (Banned)

- No emojis.
- No Inter.
- No pure black (`#000000`).
- No electric blue or purple neon accents.
- No gradient text on large headers.
- No custom cursor.
- No centered high-variance hero.
- No overlapping text and images.
- No 3-column equal-card feature rows.
- No generic names like "John Doe", "Acme", or "Nexus".
- No fake-perfect data such as `99.99%` or generic `50%`.
- No invented process stats, fake drift scores, or random inventory badges.
- No "not this, but that" marketing headings.
- No vague decorative tags such as "audit-ready", "signal", "coverage", or "registry
  pulse".
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen",
  "Game-changer", "Delve", or "Tapestry".
- No filler instructions like "Scroll to explore" or bouncing arrows.
- No broken Unsplash links.
- No circular spinner as the primary loading state.
