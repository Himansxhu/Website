# DESIGN.md — Himanshu Ramteke, portfolio

The system this site is built on. If you change anything visual, change it here
first, then in `css/tokens.css`. Everything else reads from those tokens.

Direction reference: a warm-paper editorial system with archival rigour, plus a
cinematic dark mirror. Inspired by the look of Granola and the Criterion
Collection; this is an original system built for this site, not a copy of either
and not connected to those companies.

---

## 1. The idea in one line

**Two rooms, one light source.** A warm paper room you read in, a warm black room
you look at, and a single burnt-orange light — taken from the real tungsten rim
on the hero portrait — that appears in both.

Mood: considered, archival, quietly confident. A designer's catalogue, not a CV.

---

## 2. Colour

One accent. It has two values so it stays legible in both rooms, but it is the
same colour — never two accents.

```
/* Paper — the light room */
--paper        #F4F1EA   page
--paper-2      #EBE7DD   alt sections, insets
--paper-3      #E1DCCF   ghost numerals, heavy rules

/* Ink — the dark mirror. One family, two tiers. */
--ink          #090807   primary dark surface
--ink-2        #1C1712   the one step up: panels sitting on ink
--ink-3        #2A241D   borders on ink

/* Text */
--fg-paper     #14110D   16.7:1 on paper
--mut-paper    #6A625A    5.3:1 on paper
--fg-ink       #F4F1EA   17.7:1 on ink
--mut-ink      #ADA79C    8.4:1 on ink

/* The one accent */
--accent-paper #A8441A    5.3:1 on paper — safe at body size
--accent-ink   #E08A3C    7.5:1 on ink — the hero's tungsten, exactly
```

`--ink` is `#090807` because that is the measured black point of the hero
portrait. Any dark surface therefore blends with the photograph seamlessly.
Don't drift it.

**Switching rooms.** Put `.on-ink` or `.on-ink-2` on a section. Those classes
re-point `--bg`, `--fg`, `--fg-2`, `--line` and `--accent`, so every component
inside adapts with no extra rules. Never hard-code a hex in a component.

### The accent rule

> One accent element per viewport. Use it like a librarian's stamp.

Permitted: the italic `<em>` in a section heading, one statistic, one filled
button, one active badge. If a viewport already has an amber `$4.5M`, the flow
step next to it gets an amber *outline*, not an amber fill. When in doubt, the
accent loses.

**Never** add a second chromatic accent. No greens, no limes, no blues. This
system is paper, ink, and one orange.

---

## 3. Typography

| Role | Face | Notes |
|---|---|---|
| Display, section headings | Instrument Serif 400 | the editorial voice |
| Body, UI | Instrument Sans 400/500/600 | 17px / 1.55 |
| Metadata, labels, buttons | JetBrains Mono 400/500 | uppercase, always |
| Hero name only | Archivo 800 | **never below 56px** |

One ramp, exposed as tokens:

```
11 --t-mono    13        15 --t-small   17 --t-body   20 --t-lead
26 --t-h3      34        46 --t-h2      64 --t-h1     hero --t-hero
```

Archivo exists for exactly one element — the hero name. It is a poster face; at
small sizes it reads as generic UI sans and breaks the editorial voice. The hard
floor is in `--font-poster` for a reason.

### The spine

Every mono label on the site — section index, project meta, case-study label,
hero annotation, button, nav item — uses the same two values:

```
font-size: var(--t-mono);        /* 11px */
letter-spacing: var(--track-mono); /* 0.18em */
text-transform: uppercase;
```

This is the single strongest device holding the site together. The hero is set
in a different face from everything else, and it still reads as one site
*because the spine is identical*. Don't introduce a one-off tracking value.

---

## 4. Layout & depth

- Max width 1440, gutter `clamp(1.25rem, 4vw, 4rem)`, spacing scale
  `0.5 / 1 / 1.5 / 2 / 3 / fluid-6 / fluid-7` rem.
- Section rhythm is `--s-7`; inside a section, `--s-6` between blocks.
- Radius: `4px` for chips and inputs, `12px` for cards and image plates.
- **Flat.** Depth comes from 1px borders and surface steps, never shadows.
  The only shadows on the site are the hero's contact shadow and the ISKCON
  donation card, both of which are depicting physical objects.
- Grids: `1px gap over a --line background` is the house pattern for
  segmented blocks (research stats, the donation flow, insight tiles).
  If the item count doesn't fill the grid, make the last item span — never
  leave a hole showing the background through.

---

## 5. Motion

Calm, slow, physical. `--ease-out: cubic-bezier(.16,1,.3,1)` for entrances,
`--dur-slow: 900ms` for reveals.

- Scroll reveals are opacity + 22px rise, once, then the observer unhooks.
- The hero's parallax is one custom property (`--sp`, 0→1) written by
  `js/hero.js`; every layer's transform reads it. Add a layer by adding a CSS
  transform that references `--sp`, not by adding JS.
- `prefers-reduced-motion` pins `--sp` to 0 and drops every transition. The
  composition must still read perfectly with all motion removed — test it.

---

## 6. Accessibility floor

- Body text ≥ 4.5:1, large text ≥ 3:1, UI borders ≥ 3:1. All values above are
  pre-checked; if you add a colour, check it.
- Two things fail an automated scan on purpose: the nav (it uses
  `mix-blend-mode: difference`, so its computed colour is white but its rendered
  colour is always the inverse of what's behind it) and the giant ghost year
  numerals in Experience (decorative, `aria-hidden="true"`).
- Every image needs real alt text. Where a visual is deliberately obscured, the
  alt says so rather than describing detail nobody can see.

---

## 7. Content rules that outrank aesthetics

- **Never present a target as a result.** Nudge's 78% / 2.6× / 65% are design
  targets and carry a visible `target` badge. If real numbers ever exist, they
  replace these and the badge comes off.
- **Maavie imagery is blurred at the file level** because the range hasn't
  launched. A CSS filter is not acceptable — the original would still be
  downloadable from the deployed URL.
- Don't name a product in alt text that you can't verify from the photo.

---

## 8. Do / Don't

**Do**
- Put `.on-ink` on a section and let components adapt.
- Lead every card and section with the mono spine.
- Spend the accent once per viewport.
- Keep body copy in Instrument Sans and headings in Instrument Serif.

**Don't**
- Add a second accent colour, or a third dark.
- Use Archivo anywhere except the hero name.
- Introduce a shadow for decoration.
- Hard-code a hex value inside a component rule.
- Let a mono label invent its own tracking.

---

## 9. Where things live

```
css/tokens.css      palette, type ramp, spacing, motion, room classes
css/main.css        every section on the light page
css/hero.css        the cinematic hero (reads tokens.css, holds no palette)
css/case-study.css  the Nudge page
js/data.js          ALL copy and image paths — edit content here, not in HTML
js/render.js        turns data.js into markup
js/main.js          nav, reveals, cursor, magnetic buttons
js/hero.js          hero entrance + the --sp scroll property
```
