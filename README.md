# Build Day — hackathon site

A static, single-page site for **Build Day**, the hackathon that closes out a
Build Cycle: this cycle's project teams spend a day turning real civic problems
into working prototypes. Saturday, August 15, 2026 · American University,
Washington, DC. Presented by The Upskilling Labs, in partnership with American
University and DC Public Library.

Built on the [Upskilling Labs brand system](https://theupskillinglabs.github.io/brandkit/):
Geologica type, the light-first warm-paper palette, the cover gradient + grain
for dark bands, one 14px radius, flush-left throughout.

## Live site

Hosted on GitHub Pages at `https://theupskillinglabs.github.io/hackathon/`.

To enable: repo **Settings → Pages → Deploy from a branch**, pick the branch
and the `/ (root)` folder. A `.nojekyll` file ships in the repo, so Pages
serves the files as-is with no build step. All links are relative, so the
site works under the `/hackathon/` subpath unchanged.

## Files

```
index.html            The whole page (11 sections, inline layout CSS).
assets/
  brand.css           Design tokens + components (from the brandkit; do not fork values).
  Geologica-*.ttf     The brand typeface (OFL — see Geologica-OFL.txt).
  logo-lockup-light.png, orb-mark*.png, dcpl-knockout-logo.png,
  levy-strategic-design-white.png, superbloom-white.png   Brand + partner marks.
data/
  pods.js             This cycle's pods (drives the "What Teams Are Building" grid).
  people.js           Mentors & judges (drives the "Who's in the Room" grid).
_config.yml           Pages metadata (unused while .nojekyll is present).
.nojekyll             Serve raw files, no Jekyll build.
```

## The two data-driven sections

The pod list and the mentor/judge list don't exist until late in the cycle, so
they're **data, not hardcoded markup** — edit the arrays and the grids re-render.

- **Pods** → `data/pods.js`. Ships with placeholder cards. Replace with the
  Sensemaking Sprint vote output, drop `placeholder: true` from each entry, and
  set `PODS_PENDING = false`.
- **Mentors & judges** → `data/people.js`. Same pattern; pull from the
  outreach tracker, set `PEOPLE_PENDING = false`.

Placeholder entries render with a dashed "to be confirmed" treatment, and a
"finalizing" banner shows while the list is pending — both disappear once you
publish real, confirmed entries.

## Before launch — placeholders to confirm

Every `[BRACKET]` in the copy is a placeholder (they render with a dashed
underline / chip so they're easy to spot). The full list is in an HTML comment
at the top of `index.html`:

- Event name / branding (currently "Build Day")
- Schedule times (`index.html`, "The Day" section)
- Pod list (`data/pods.js`) and mentors & judges (`data/people.js`)
- Additional partner / sponsor logos ("Built With" section)
- Logistics: building/room, parking, accessibility, audience, contact email
- Registration: link, capacity, deadline — and, if using Luma/Eventbrite,
  embed the widget in the "Save Your Spot" card
- FAQ confirmations (spectator track, virtual option)
- Footer: website, contact email, press/sponsor email, social links

## Local preview

No build step:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

---

Brand: shorten the organization only to "The Labs" — never "TUL". Vocabulary:
Build Cycle, Pod, Project Team, Upskiller. See the brand kit for the full spec.
