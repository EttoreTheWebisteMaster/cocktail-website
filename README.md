<h1 align="center">Velvet Pour</h1>

<p align="center">
  An animated cocktail bar landing page built with Next.js and GSAP.
</p>

---

## Overview

Velvet Pour is a single-page site for a fictional cocktail bar. I built it to practise **scroll-driven animation with GSAP**: text that splits and staggers in, parallax leaves, pinned sections, and a hero video that plays forward and back as you scroll.

It's based on the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) GSAP cocktail tutorial, rebuilt in **Next.js 16 + TypeScript** (the original uses React + Vite).

## Sections

| Section | What it shows |
|---|---|
| **Navbar** | Background blur that fades in once you scroll |
| **Hero** | "MOJITO" title split into characters and staggered in, parallax leaves, and a pinned video **scrubbed by scroll position** |
| **Cocktails** | Lists of popular cocktails and mocktails with scroll-linked leaf parallax |
| **About** | Headline split into words, image grid revealed in sequence |
| **The Art** | Pinned section where a masked image expands to full screen as you scroll (simplified layout on mobile) |
| **Menu** | Cocktail slider with prev/next navigation, wrap-around and animated transitions per slide |
| **Contact** | Address, hours and socials with staggered text reveals |

## Animation techniques

- **SplitText** for character, word and line reveals
- **ScrollTrigger** with `scrub` and `pin` to link animations to scroll position
- **Scroll-controlled video**: the hero timeline tweens `video.currentTime` from 0 to the video's duration
- **Responsive timelines** using `react-responsive` to change trigger start/end points on mobile
- **`useGSAP`** hook for React-safe setup and automatic cleanup

## Tech stack

| Area | Tools |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Animation | [GSAP 3](https://gsap.com/) (ScrollTrigger, SplitText), [`@gsap/react`](https://gsap.com/resources/React/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Responsive | [react-responsive](https://github.com/yocontra/react-responsive) |

## Project structure

```
app/
  components/      # Navbar, Hero, Cocktails, About, Art, Menu, Contact
  page.tsx         # Composes the sections
  layout.tsx
  globals.css
constants/
  index.tsx        # Nav links, drink lists, slider data, hours, socials
lib/
  gsap.js          # Registers ScrollTrigger + SplitText once
public/            # Images and the hero video
```

## Getting started

```bash
git clone https://github.com/EttoreTheWebisteMaster/cocktail-website.git
cd cocktail-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> [!NOTE]
> The site needs the images in `public/images/` and the hero video at `public/videos/output.mp4`.

### Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Lint with ESLint |

## Credits

- Design and assets: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) GSAP tutorial
- Animation library: [GSAP](https://gsap.com/)

## Author

**Ettore Serra** — Developer & designer

- Portfolio: [ettoreserra.it](https://www.ettoreserra.it)
- GitHub: [@EttoreTheWebisteMaster](https://github.com/EttoreTheWebisteMaster/)
- LinkedIn: [ettore-serra-developer](https://www.linkedin.com/in/ettore-serra-developer/)
