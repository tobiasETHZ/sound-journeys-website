# Sound Journeys — Agent Instructions

## What this is

A curated immersive listening experience project in Zurich. Read
`docs/identity.md` before making any design or copy decisions.

## File map

- `docs/identity.md` — what the project is and how it should feel
- `docs/design-tokens.md` — design system vocabulary and principles
- `docs/structure.md` — pages, sections, and component rules
- `docs/decisions.md` — log of past choices (append-only)
- `config/constants.yml` — URLs, contact, session duration
- `config/events.yml` — event listings
- `content/` — actual on-site copy, per page
- `src/styles/tokens.css` — CSS implementation of design tokens
- `src/` — site code

## Core rules

- Never add inline styles. All spacing, typography, and color values
  must reference tokens from `src/styles/tokens.css`. If a needed
  token doesn't exist, add it with a semantic name rather than
  hardcoding.
- When design principles change, update `docs/design-tokens.md`
  first, then `tokens.css`.
- Append new entries to `docs/decisions.md` whenever a non-trivial
  design or product choice is made. Never rewrite past entries.
- Event data lives in `config/events.yml`. Generate card HTML from it
  rather than hand-writing each card.
- On-site copy lives in `content/`. The HTML is generated from these
  files — do not hand-edit copy in generated HTML. The content files
  are authoritative.
- The project is never framed as therapy, healing, sound design, or
  live processing. See `docs/identity.md`.