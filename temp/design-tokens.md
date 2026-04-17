# Design Tokens

**Purpose:** Describes the design vocabulary of the site in semantic
terms — the principles behind colors, typography, spacing, and
motion. The actual values live in `src/styles/tokens.css`.

**Edited by:** Humans and AI, when design principles change. Update
this file *before* changing `tokens.css` if the change affects the
system (new token, removed token, changed principle). Value-only
tweaks can be made in the CSS directly.

---

## Principles

- **Nocturnal with breathing room.** A dark base, but never gloomy or
  oppressive. The site should feel like a well-lit room at night,
  not a cave.
- **Grounded celestial.** Subtle cosmic hints are permitted (star
  grain, faint glow) but always balanced with tactile, material cues.
- **Editorial restraint.** Strong typography and composition do the
  work. Ornament is rare and deliberate.
- **Warmth in the dark.** Low-contrast combinations are fine when
  they serve atmosphere. Accessibility minimums still apply to
  anything interactive.
- **One accent, used sparingly.** A single luminous accent per view.
  More than two accent-colored elements visible at once is a warning
  sign.

## Color

Three families, each with a clear role.

### Surfaces (dark base)

Midnight blue, charcoal, deep green-black, or deep indigo territory.
Not pure black.

- `--color-base` — primary background. Deep, atmospheric, with a hint
  of hue rather than neutral black.
- `--color-surface` — secondary surface for cards and containers.
  Slightly lifted from base, enough to feel tactile.
- `--color-depth` — deepest tone, used for wells and layered depth.

### Text (soft light neutrals)

Bone, pale stone, misty off-white. Never pure white on dark.

- `--color-bone` — primary text on dark surfaces. Warm off-white.
- `--color-stone` — descriptive prose and secondary text.
- `--color-muted` — metadata, timestamps, labels. Deliberately quiet.

### Accent (restrained luminous)

A single accent family — lavender, muted gold, warm violet, dusty
blue, or amber. Chosen once, used sparingly.

- `--color-accent` — emphasis, one per view. Availability dots, hover
  states, a single link. Never decorative.

## Material and texture

Permitted cues, used with restraint:
- Faint star grain
- Paper or ink texture
- Subtle glass or haze
- Soft glow
- Quiet room-like depth
- Delicate chart-line accents
- Tactile card surfaces

Avoid: heavy gradients, glossy surfaces, neon, glitch effects,
anything that reads as techno club or meditation app.

## Typography

Three roles, maximum.

- **Display** — one expressive style for major headings and hero.
  Should feel composed and beautiful without being wedding-elegant
  or mystical-serif-dramatic.
- **Text** — one clean, highly readable sans for body and interface.
  Unobtrusive, not generic-startup.
- **Accent** (optional) — one small style for micro-labels and
  annotations. Often uppercase with letter-spacing.

### The balance to strike

Beauty, clarity, atmosphere, seriousness, sensuality.

### Avoid

- Wedding-like elegance
- Overly mystical serif drama
- Generic startup sans everywhere
- Childish handwritten styles
- Unreadable experimental fonts in body text

### Scale

- `--text-display` — hero headlines. Large, composed, generous
  line-height.
- `--text-title` — section titles, event names.
- `--text-body` — paragraphs and descriptions. Comfortable reading
  size with generous line-height (around 1.7).
- `--text-meta` — dates, times, tags, labels. Small, often uppercase
  with letter-spacing.
- `--text-micro` — separators, bullets, quiet affordances.

## Spacing

A single scale from tight to hero-scale. No one-off values.

`--space-1` through `--space-8`, semantically named where possible.
If something needs a value between two steps, adjust the step itself
rather than introducing a one-off.

## Motion

- Respect `prefers-reduced-motion` — disable reveals when set.
- Subtle reveals on scroll: small upward translate plus opacity.
  Around 400ms, eased out. Never bouncy.
- Hover states: quick (150ms), color or opacity only. No scaling.
- Any atmospheric motion (drifting stars, subtle shimmer) should be
  slow, low-amplitude, and easy to ignore.