# Structure

**Purpose:** Defines the site's shape (currently a single scrolling
page), section order, responsive requirements, editability
constraints, and detailed rules for recurring UI components.

**Edited by:** Humans, when site structure or component behavior
changes.

---

## Site shape

The site is a **single scrollable page**. Every section below is a
named anchor on that one page — there are no separate routed pages in
v1. Keeping it mono-page is intentional: the experience is meant to be
read as one arc, mirroring the shape of a Sound Journey itself.

A temporary "coming soon" landing currently fronts the real site,
The real site lives in the `preview/` subfolder.


## Section order (top to bottom)

| # | Section                 | Anchor      | Nav label          |
|---|-------------------------|-------------|--------------------|
| A | Hero                    | (top)       | — (wordmark)       |
| B | Introduction / Concept  | `#concept`  | About              |
| C | What to expect          | `#expect`   | What to Expect     |
| D | Anatomy of a Journey    | `#anatomy`  | The Arc            |
| E | Upcoming journeys       | `#upcoming` | Journeys           |
| F | About us                | `#about`    | —                  |
| G | Private bookings        | `#private`  | Private Bookings   |
| H | Stay in the loop        | `#loop`     | Stay in the Loop * |

\* Rendered as a primary-button link in the nav, not a plain text link.

## Section purposes

This file  describes only what each section is *for*. The actual content was added manually.

### Hero
Sets the atmospheric tone and communicates the core offering.
Includes wordmark, a short framing line, one or two CTAs, and an
atmospheric background. Poetic above the fold.

### Introduction to the concept
Explains what a Sound Journey is and what makes the approach
distinct. Includes a compact "not this / not that" clarification.

### What to expect / Entering the journey
Bridges artistic framing and practical clarity. Communicates
duration, posture, autonomy, and container ethics. Calm and
trust-building, never clinical. Sits early in the page so visitors
understand the practical shape of a journey before meeting its
emotional anatomy.

### Anatomy of a Sound Journey
Key section. Describes the shape of a journey. See component rules
below.

### Upcoming journeys
Event cards for upcoming events. While only one journey is scheduled
the section shows a single, more prominent featured card rather than
a grid; additional cards drop in beside it as the calendar fills.

### About us
Short project statement, two compact role-led profiles, one sentence
on the collaboration. Focuses the project, not personal résumés.

### Private bookings
Secondary to public journeys. Short framing text plus inquiry CTA or
contact path.

### Stay in the loop
Channel for announcements of new journeys. Telegram is the primary
channel: a prominent button links to `@soundjourneys`
(`https://t.me/soundjourneys`). An email subscription form sits
underneath as the secondary option for visitors who prefer email.
Elegant, never growth-hacky.

## CTA priority

1. Explore journeys
2. Join waitlist / mailing list
3. Inquire about private bookings

The homepage should not feel salesy. Meaning comes before booking.

## Responsive

Mobile-first. The atmospheric design must survive on smaller
screens. Cards, anatomy graphics, and typography must remain readable
and elegant below 375px width.

---

## Component: Event card

Each card should feel designed, nuanced, and beautiful — not a
dashboard row.

### Contents

- Title
- Date and time
- Short teaser line
- A single numeric intensity indicator (e.g. `2 / 5`), shown as a
  small 5-dot meter. One calm glance, not a dashboard.
- 2–4 tags, selectively chosen
- Optional availability signal (available / limited / sold out)
- CTA — either a "Register interest" link back to the mailing list
  or a direct booking link to the external ticketing page
  (e.g. Eventfrog) when tickets are live

The card intentionally has no per-event intensity *graph*: the
top-level Anatomy diagram carries the arc language for the whole
site. A single dot-meter is acceptable as a quick at-a-glance cue.

### Featured variant

When only one journey is upcoming, the card renders slightly larger
(`event-card--featured`): roomier padding, a display-scale title,
body-scale teaser. It lives in a narrower, centred column so it
reads as a single featured event rather than a lonely grid item.

### What to avoid

- Turning the card into a dashboard with many metrics
- Listing all curation dimensions (intensity, weirdness,
  aggressiveness, softness) as visible badges — these are internal
  tools, not UI
- Per-event mini intensity *graphs* (the old waveform thumbnails) —
  removed; the shared Anatomy diagram is the site's single arc
  visualisation. A small numeric intensity meter is fine.


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

2. **Expanded anatomy** — IGNORE THIS FOR NOW - optional deeper layer, revealed on
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