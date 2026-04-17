# Decisions

**Purpose:** Chronological log of notable design, product, and
technical choices, with the reasoning behind each. Prevents future
sessions from unknowingly reversing deliberate decisions.

**Edited by:** Humans and AI, whenever a non-trivial choice is made.
Append-only — don't rewrite past entries, add new ones that
supersede them.

**Format:** Date, short title, decision, reasoning.

---

## 2025 — Public journeys before private bookings

**Decision:** The homepage and CTAs prioritize public Sound Journeys.
Private bookings are offered but secondary.

**Reasoning:** Current business emphasis is building the public
format. Private bookings are a future lane, not the current core.

## 2025 — No public review wall at launch

**Decision:** The site launches without a public reviews or
reflections section. A hidden placeholder may exist for future
curated reflections.

**Reasoning:** An open review wall risks cheapening the container
and attracting the wrong social dynamics. Curated reflections, added
deliberately later, fit the project better.

## 2025 — Anatomy is wave-based, not a single ramp

**Decision:** The anatomy module shows a wave structure with
possible multiple peaks and releases, not a single
build-peak-descent shape.

**Reasoning:** A single ramp misrepresents the actual experience and
flattens the curatorial depth. The top-level arc stays simple
(arrival, deepening, release) but the expanded view reveals the
real complexity.

## 2025 — Manual events, no CMS

**Decision:** Events live in `config/events.yml` and are consumed at
build time. No CMS or event engine in v1.

**Reasoning:** The site has few events and two collaborators. A CMS
adds maintenance burden without value. If event management becomes
painful, revisit.