# Hero Section Component

A pixel-styled, animated hero section (nav, intro loader, profile card,
headline stage, mini audio player) built for a Vite + React + TypeScript
project. Verified with `tsc --noEmit` and a production `vite build`.

## Dependency

Install one package into your existing project:

```bash
npm install framer-motion
```

Everything else (React, TypeScript) is assumed to already be part of your
Vite app.

## Files to copy

Copy the whole folder into your project's `src/components/`:

```
src/components/Hero/
├── Hero.tsx                  – main component, composes everything below
├── Hero.module.css           – layout, palette, type, responsive rules
├── LoadingScreen.tsx         – 0→100% intro loader
├── LoadingScreen.module.css
├── NavBar.tsx                – sticky nav with roll-hover links + mobile menu
├── NavBar.module.css
├── MusicPlayer.tsx           – sticky mini audio player widget
├── MusicPlayer.module.css
├── heroContent.ts            – all dummy copy/data, separate from markup
└── index.ts                  – barrel export
```

## Usage

```tsx
import { Hero } from "./components/Hero";

function App() {
  return <Hero />;
}
```

Props:

| Prop         | Type      | Default | Notes                                                                 |
|--------------|-----------|---------|------------------------------------------------------------------------|
| `videoSrc`   | `string?` | —       | Optional background video for the right panel. Omit to use the built-in animated gradient placeholder. |
| `skipLoader` | `boolean` | `false` | Skips the intro 0→100% loader — handy for Storybook/tests/dev iteration. |

Edit `heroContent.ts` to swap in your real name, bio, facts, links, and
track info — no changes needed elsewhere.

## What's implemented

- **Intro loader**: animated 0→100% counter (eased ramp, ~2.2s) with a
  curtain-up exit revealing the page. Resolves near-instantly if the user
  has `prefers-reduced-motion` set.
- **Nav bar**: sticky/fixed, roll-up hover animation on links (two stacked
  text layers), pill CTA, and a mobile hamburger menu with an animated
  dropdown.
- **Sticky mini audio player**: play/pause toggle, animated equalizer bars,
  decorative by default (wire up `heroData.track.src` for a real file).
- **Profile card**: avatar, availability badge, bio, fact grid (`<dl>`),
  contact block, stats, and quick links — staggers in via Framer Motion
  once the loader completes.
- **Headline stage**: large responsive display headline, ambient
  background (video or animated gradient), floating location badge,
  "now playing" indicator, and a bouncing scroll cue.
- **Accessibility**: semantic landmarks (`header`, `nav`, `section`,
  `aside`, `dl`), `aria-live` on the loader, `aria-pressed`/`aria-label`
  on interactive controls, visible focus via default outline (extend in
  your global stylesheet if you use a CSS reset that removes it), and
  `prefers-reduced-motion` handling throughout.
- **Responsive**: single-column stacked layout under 960px, split
  sidebar + stage layout above it.

## Design notes / assumptions

This was built from the *structure and content flow* of the reference
site (nav labels, loader, audio player, profile facts, headline copy
rhythm, floating badges) since exact colors/fonts/spacing weren't
extractable from a text-only fetch. The palette (near-black background,
indigo accent, Inter) and exact spacing are my own interpretation — swap
the CSS custom properties at the top of `Hero.module.css`
(`--hero-bg`, `--hero-accent`, etc.) to match your actual brand once you
have final values.
