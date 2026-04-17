# Sound Journeys — Agent Instructions

## What this is

A curated immersive listening experience project in Zurich. Read
`docs/identity.md` before making any design or copy decisions.

## File map

- `netlify/` — netlify functions that can be called from source code
- `docs/identity.md` — what the project is and how it should feel
- `docs/design-tokens.md` — design system vocabulary and principles
- `docs/structure.md` — pages, sections, and component rules
- `docs/decisions.md` — log of past choices (append-only)
- `config/constants.yml` — URLs, contact, session duration
- `config/events.yml` — event listings
- `content/` — actual on-site copy, per page
- `public/` — site code

## Core rules

- Never add inline styles. All spacing, typography, and color values
  must reference tokens from a  `public/src/styles/tokens.css` file. If a needed
  token doesn't exist, add it with a semantic name rather than
  hardcoding.
- Event data lives in `config/events.yml`. Generate card HTML from it
  rather than hand-writing each card.
- Actual content to use (wording, etc) lives in `content/`.
- Output the website in the `public/` folder. It's the one that gets actually published online