# Structure

**Purpose:** Defines the site's shape (currently a single scrolling
page), section order, responsive requirements, editability
constraints, and detailed rules for recurring UI components.

**Edited by:** Humans, when site structure or component behavior
changes. Not for design principles (see `design-tokens.md`) or copy
(see `content/`).

---

## Site shape

The site is a **single scrollable page**. Every section below is a
named anchor on that one page — there are no separate routed pages in
v1. Keeping it mono-page is intentional: the experience is meant to be
read as one arc, mirroring the shape of a Sound Journey itself.

A temporary `/` "coming soon" landing currently fronts the real site,
which lives at `/preview/`. This is scaffolding, not architecture —
when the site goes public, the preview content becomes `/`.

Deferred (not on the page today):
- FAQ — folded into **What to Expect** for now.
- Reflections / Reviews — see `decisions.md`, a public review wall is
  out of scope at launch.
- Archive / Past Journeys — future.

## Section order (top to bottom)

| # | Section                 | Anchor      | Nav label          |
|---|-------------------------|-------------|--------------------|
| A | Hero                    | (top)       | — (wordmark)       |
| B | Introduction / Concept  | `#concept`  | About              |
| C | Anatomy of a Journey    | `#anatomy`  | The Arc            |
| D | Upcoming journeys       | `#upcoming` | Journeys           |
| E | What to expect          | `#expect`   | What to Expect     |
| F | About us                | `#about`    | —                  |
| G | Private bookings        | `#private`  | Private            |
| H | Stay in the loop        | `#loop`     | Stay in the Loop * |

\* Rendered as a primary-button link in the nav, not a plain text link.

## Section purposes

Each section's actual copy lives in `content/home.md`. This file
describes only what each section is *for*.

### Hero
Sets the atmospheric tone and communicates the core offering.
Includes wordmark, a short framing line, one or two CTAs, and an
atmospheric background. Poetic above the fold.

### Introduction to the concept
Explains what a Sound Journey is and what makes the approach
distinct. Includes a compact "not this / not that" clarification.

### Anatomy of a Sound Journey
Key section. Describes the shape of a journey. See component rules
below.

### Upcoming journeys
Event cards sourced from `config/events.yml`. See component rules
below.

### What to expect / Entering the journey
Bridges artistic framing and practical clarity. Communicates
duration, posture, autonomy, and container ethics. Calm and
trust-building, never clinical.

### About us
Short project statement, two compact role-led profiles, one sentence
on the collaboration. Focuses the project, not personal résumés.

### Private bookings
Secondary to public journeys. Short framing text plus inquiry CTA or
contact path.

### Stay in the loop
Mailing list signup. Email primary. Elegant, not growth-hacky.

## CTA priority

1. Explore journeys
2. Join waitlist / mailing list
3. Inquire about private bookings

The homepage should not feel salesy. Meaning comes before booking.

## Responsive

Mobile-first. The atmospheric design must survive on smaller
screens. Cards, anatomy graphics, and typography must remain readable
and elegant below 375px width.

## Editability

Static or manually updated is fine for v1. No heavy CMS. Events live
in `config/events.yml` and are consumed at build time to generate
event card HTML.

---

## Component: Event card

Each card should feel designed, nuanced, and beautiful — not a
dashboard row.

### Contents

- Title
- Date and time
- Short teaser line
- Signature mini intensity profile (see below)
- 2–4 tags, selectively chosen
- Optional availability signal (available / limited / sold out)
- CTA or interest/book button

### Mini intensity profile

A small visual graph suggesting the emotional and sonic shape of the
journey. Hero feature of the card — refine it, do not discard it.
Should suggest an arc, not a single peak.

### Tag rules

- 2–4 tags per card, maximum
- Pick from the tag vocabulary commented in `config/events.yml`
- Selective and expressive, not exhaustive metadata

### What to avoid

- Turning the card into a dashboard with many metrics
- Listing all curation dimensions (intensity, weirdness,
  aggressiveness, softness) as visible badges — these are internal
  tools, not UI

### Internal curation dimensions

The team may think about journeys along multiple dimensions:
emotional intensity, weirdness / experimentalness, aggressiveness /
impact, softness / spaciousness. These inform curation and tag
choice. They do not appear as UI.

---

## Component: Sound Journey Anatomy module

The defining feature of the homepage. Describes the shape of a Sound
Journey.

### Structure

Wave-based, with multiple possible peaks and releases. Not a single
simple ramp.

### Two layers

1. **Top-level arc** — simple, legible, four phases rendered as cards
   beneath a signature wave diagram:
   - Arrival (○)
   - Deepening (◐)
   - Waves & Peaks (●)
   - Release (◌)

   The four-card layout separates the "Waves & Peaks" crest from the
   "Release" descent, so the wave-based structure (see decisions.md)
   is legible at a glance without needing the expanded view.

2. **Expanded anatomy** — optional deeper layer, revealed on
   interaction (hover, click, or expand). May include:
   - Arriving / settling / orientation
   - Grounding / attunement / soft opening
   - Texture building / tension / immersion
   - Disorientation / turbulence / surges / multiple waves
   - Intensity apex or peaks
   - Release / comedown / spaciousness
   - Silence / aftercare / integration

### Narrative arc

Copy leads through: attention → intensity → release.

### Dimensions to reflect

Emotional arc, sensory arc, physical / embodied arc.

### Format options

Any of: elegant animated waveform, layered arc diagram, phase-based
horizontal story, clickable or hover-revealed anatomy cards.

The choice should serve the principle: simple on the surface,
nuanced on inspection.