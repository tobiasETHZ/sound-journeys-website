# Sound Journeys — Agent Instructions

## What this is

A simple, static website for a curated immersive listening experience project in Zurich, called Sound Journeys.
The idea, as well as the core design identity is described in `docs/identity.md`. 

It is your job to help create a beautiful website. Generally, you will work in an iterative fashion, 
that means editing the current files based on the instructions, while keeping the implementation in line with the design identity 
and past decisions.

## Technical constraints

The website should use a simple HTML and JavaScript code for now. 
The website is deployed using Netlify and can call netlify functions.


## File map

- `netlify/` — netlify functions that can be called from source code

- `config/constants.yml` — some basic constants used in the site
- `public/` — where the actual code lives - this is the main folder you should be editing. 
- this folder is also publicly accessible, so no sensitive information should be exposed there. 

The files used below should generally help understand what we're building. 
- `docs/identity.md` — what the project is and how it should feel
- `docs/structure.md` — pages, sections, and component rules - how the website should be structured. The implementation should be in line with the structure file.
- `docs/decisions.md` — log of past choices

## Coding rules

- **No inline styles in HTML.** Every `style="…"` attribute is a bug; move it to a class in `public/styles.css`.
- **All colour, typography, spacing, radius, and motion values flow from `public/src/styles/tokens.css`.** No raw hex codes, rgba, rem/px font sizes, or pixel paddings in `styles.css` or HTML that carry cross-component design meaning.
- **`tokens.css` has two layers.** Respect the separation:
  - **Primitives** — the raw vocabulary: `--palette-*`, `--unit-1..9`, `--size-1..6`, `--size-display-*`, `--radius-*`, `--duration-*`, `--family-*`, `--weight-*`. These define what the site is made of. They are small, opinionated scales.
  - **Semantic tokens** — design decisions, always expressed in terms of primitives: `--color-text-body`, `--font-size-body`, `--space-section-y`, `--surface-card`, `--border-default`, etc. These define what things mean.
- **Components reference semantic tokens** (`var(--font-size-body)`, `var(--space-section-y)`), not primitives. Reach for a primitive in a component rule only when the value is truly component-internal and doesn't repeat elsewhere — and prefer adding a semantic token when in doubt.
- **If a needed token doesn't exist:** add a semantic token in the appropriate section of `tokens.css`, and a primitive underneath it only if no existing primitive fits. Don't hardcode.
- **Exceptions — raw values are acceptable for:** truly component-internal visual constants that carry no shared design meaning (e.g. the 22×1.5 px dimensions of the nav burger lines, the 480×480 px atmospheric hero orb, a 1px divider height, the 5px scrollbar width). When in doubt, prefer a token.
- **To iterate on the look:** edit semantic tokens first (e.g. change `--font-size-body`, `--space-section-y`, `--color-accent`, `--font-family-heading`). Touch primitives only for scale-wide changes.