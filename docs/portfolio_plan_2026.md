# 🚀 Software Engineer Portfolio 2026 — FINAL Implementation Blueprint

> **Version**: 4.0 (FINAL) | **Date**: Feb 2026
> **Goal**: Build a world-class, high-performance portfolio for a Software Engineer
> using cutting-edge 2026 web technologies with industrial-standard architecture.

---

## 1. Tech Stack

| Layer            | Technology              | Version  | Purpose                                       |
| ---------------- | ----------------------- | -------- | --------------------------------------------- |
| **Framework**    | Next.js                 | 15       | App Router, RSC, Server Actions, Streaming     |
| **UI Runtime**   | React                   | 19       | Concurrent features, Suspense, Transitions     |
| **Language**     | TypeScript              | 5.x      | Strict mode, type safety                       |
| **Styling**      | Tailwind CSS            | 4        | Utility-first, sub-ms builds                   |
| **Base UI**      | Shadcn/UI               | latest   | Accessible primitives (Radix + Tailwind)       |
| **Effects**      | Aceternity UI           | latest   | Bento grids, spotlights, moving borders        |
| **Effects**      | Magic UI                | latest   | Text effects, marquee, dot backgrounds         |
| **Animation**    | Framer Motion           | 11+      | Physics-based transitions, layout animations   |
| **Icons**        | Lucide React            | latest   | Tree-shakeable SVG icons                       |
| **Theme**        | next-themes             | latest   | Dark/Light mode + system preference            |
| **Fonts**        | Geist Sans + Geist Mono | latest   | Vercel's font, `next/font` zero CLS            |
| **Validation**   | Zod                     | latest   | Runtime schema validation for forms            |
| **Smooth Scroll**| Lenis                   | latest   | 120fps buttery smooth scrolling                |
| **Utilities**    | clsx + tailwind-merge   | latest   | Dynamic class composition via `cn()`           |
| **SEO**          | next/metadata + JSON-LD | built-in | Dynamic OG images, structured data             |

### Install Command
```bash
npm install framer-motion lucide-react clsx tailwind-merge next-themes zod lenis
```

---

## 2. Folder Structure (Industrial Standard)

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.webp                # Your photo (AVIF/WebP, max 200KB)
│   │   └── projects/                   # Project screenshots (optimized)
│   │       ├── project-1.webp
│   │       └── project-2.webp
│   ├── icons/
│   │   └── favicon.ico
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout: fonts, providers, metadata
│   │   ├── page.tsx                    # Home: renders all sections
│   │   ├── globals.css                 # Tailwind + CSS variables
│   │   ├── not-found.tsx               # Custom 404
│   │   ├── loading.tsx                 # Global loading skeleton
│   │   ├── projects/
│   │   │   ├── page.tsx                # All projects grid page
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Single project case study
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts            # Contact form API handler
│   │
│   ├── components/
│   │   ├── ui/                         # Atomic components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── separator.tsx
│   │   ├── layout/                     # Structural components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── sections/                   # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── tech-stack.tsx
│   │   │   └── contact.tsx
│   │   └── shared/                     # Effect/animation components
│   │       ├── spotlight.tsx
│   │       ├── moving-border.tsx
│   │       ├── text-scramble.tsx
│   │       ├── scroll-reveal.tsx
│   │       ├── marquee.tsx
│   │       ├── dot-background.tsx
│   │       └── magnetic-button.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                    # cn() helper
│   │   ├── fonts.ts                    # Geist font config
│   │   └── metadata.ts                # SEO helpers
│   │
│   ├── data/
│   │   ├── projects.ts                # Project entries array
│   │   ├── experience.ts              # Work experience entries
│   │   ├── skills.ts                  # Tech categories
│   │   ├── social-links.ts            # URLs for socials
│   │   └── navigation.ts              # Nav items
│   │
│   ├── hooks/
│   │   ├── use-mouse-position.ts
│   │   ├── use-scroll-progress.ts
│   │   ├── use-media-query.ts
│   │   └── use-intersection.ts
│   │
│   ├── actions/
│   │   └── contact.ts                 # Server Action for form
│   │
│   ├── types/
│   │   ├── project.ts
│   │   └── experience.ts
│   │
│   └── providers/
│       └── theme-provider.tsx          # next-themes wrapper
│
├── docs/
│   └── portfolio_plan_2026.md          # This file
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 3. Design Tokens & Color System

### 3.1 CSS Variables (`globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light Mode */
    --background: 0 0% 98%;
    --foreground: 240 10% 4%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 4%;
    --primary: 263 70% 50%;           /* Violet #7C3AED */
    --primary-foreground: 0 0% 98%;
    --secondary: 240 5% 96%;
    --muted: 240 5% 96%;
    --muted-foreground: 240 4% 46%;
    --accent: 263 70% 50%;
    --border: 240 6% 90%;
    --ring: 263 70% 50%;
    --radius: 0.75rem;
  }

  .dark {
    /* Dark Mode — "Cosmic Engineer" */
    --background: 260 100% 4%;       /* #030014 Deep Space */
    --foreground: 0 0% 98%;
    --card: 0 0% 100% / 0.03;        /* Glassmorphism */
    --card-foreground: 0 0% 98%;
    --primary: 263 70% 60%;           /* #8B5CF6 Violet */
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 100% / 0.06;
    --muted: 0 0% 100% / 0.06;
    --muted-foreground: 240 5% 65%;
    --accent: 186 94% 45%;            /* #06B6D4 Cyan */
    --border: 0 0% 100% / 0.08;
    --ring: 263 70% 60%;
  }
}
```

### 3.2 Tailwind Config Extensions (`tailwind.config.ts`)

```ts
// Extend with custom animations
theme: {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
      card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
      border: "hsl(var(--border))",
    },
    animation: {
      "spotlight": "spotlight 2s ease .75s 1 forwards",
      "marquee": "marquee 25s linear infinite",
      "border-beam": "border-beam 4s linear infinite",
      "fade-in": "fade-in 0.5s ease-out forwards",
      "slide-up": "slide-up 0.5s ease-out forwards",
    },
    keyframes: {
      spotlight: { "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" }, "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" }},
      marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(calc(-100% - 1rem))" }},
      "border-beam": { "100%": { "offset-distance": "100%" }},
      "fade-in": { from: { opacity: "0" }, to: { opacity: "1" }},
      "slide-up": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" }},
    },
    borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
  }
}
```

---

## 4. Component Specifications

### 4.1 UI Components (`components/ui/`)

#### `button.tsx`
| Prop      | Type                                       | Default     |
| --------- | ------------------------------------------ | ----------- |
| variant   | `"default" \| "outline" \| "ghost" \| "glow"` | `"default"` |
| size      | `"sm" \| "md" \| "lg"`                     | `"md"`      |
| asChild   | `boolean`                                   | `false`     |

```tsx
// Implementation approach:
// - Use Slot pattern (Radix) for asChild
// - "glow" variant: box-shadow with primary color + hover scale
// - All variants: transition-all duration-200
// - Focus: ring-2 ring-primary/50 ring-offset-2 ring-offset-background
```

**Styles**:
- Default: `bg-primary text-primary-foreground hover:bg-primary/90`
- Outline: `border border-border bg-transparent hover:bg-muted`
- Ghost: `hover:bg-muted`
- Glow: `bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105`

---

#### `card.tsx`
| Prop     | Type              | Default   |
| -------- | ----------------- | --------- |
| glass    | `boolean`         | `true`    |
| hover    | `boolean`         | `true`    |
| gradient | `boolean`         | `false`   |

**Styles**:
```
Glass card:
  background: rgba(255,255,255,0.03)
  backdrop-filter: blur(12px)
  border: 1px solid rgba(255,255,255,0.08)
  border-radius: var(--radius)

Hover effect:
  transform: translateY(-2px)
  border-color: rgba(139,92,246,0.3)
  box-shadow: 0 8px 32px rgba(139,92,246,0.1)

Gradient border (optional):
  Use a pseudo-element with conic-gradient rotating animation
```

---

#### `badge.tsx`
| Prop    | Type                                 | Default     |
| ------- | ------------------------------------ | ----------- |
| variant | `"default" \| "secondary" \| "tech"` | `"default"` |

**Styles**:
- Tech variant: `bg-primary/10 text-primary border border-primary/20 text-xs font-mono`

---

#### `input.tsx` & `textarea.tsx`
**Styles**:
```
bg-muted/50 border border-border rounded-md px-4 py-3
focus:border-primary focus:ring-1 focus:ring-primary/30
placeholder:text-muted-foreground
transition-colors duration-200
```

---

### 4.2 Layout Components (`components/layout/`)

#### `header.tsx` — Floating Glass Navbar
**Behavior**:
- Fixed at top with `top-4`, centered, max-width `max-w-3xl`
- Glassmorphism: `bg-background/60 backdrop-blur-xl border border-border rounded-full`
- Hides on scroll down, shows on scroll up (use `use-scroll-progress` hook)
- Contains: Logo/Name (left), Nav Links (center), Theme Toggle (right)
- Mobile: hamburger menu → `<MobileNav />`

**Nav Links**: `["Home", "About", "Projects", "Experience", "Contact"]`
- Active link: `text-primary` with animated underline
- Smooth scroll to section `id` on click

---

#### `footer.tsx`
**Structure**:
```
┌─────────────────────────────────────────────┐
│  gradient-line (1px, primary → transparent) │
├─────────────────────────────────────────────┤
│  Left: © 2026 [Name]                       │
│  Center: Built with Next.js & ❤️            │
│  Right: [GitHub] [LinkedIn] [Twitter] icons │
└─────────────────────────────────────────────┘
```

---

#### `section-wrapper.tsx`
Wraps every section for consistent spacing and scroll-reveal animation.
```tsx
// Props: id, className, children
// Padding: py-20 md:py-32
// Max width: max-w-6xl mx-auto px-4 md:px-6
// Wraps children with <ScrollReveal />
```

---

#### `theme-toggle.tsx`
- Sun/Moon icon swap with `framer-motion` `AnimatePresence`
- Rotates 180° on toggle
- Uses `next-themes` `useTheme()` hook
- Mounted check to avoid hydration mismatch

---

### 4.3 Shared/Effect Components (`components/shared/`)

#### `spotlight.tsx`
- Full-screen radial gradient that follows mouse cursor
- Uses `use-mouse-position` hook
- CSS: `radial-gradient(600px circle at ${x}px ${y}px, rgba(139,92,246,0.06), transparent 80%)`
- Only renders on desktop (`use-media-query` check)

#### `moving-border.tsx`
- Animated gradient border using CSS `conic-gradient` + `@keyframes rotate`
- Wraps a card or button
- Border width: 1px, rotation speed: 4s linear infinite

#### `text-scramble.tsx`
- Scrambles text characters on mount, then resolves to final text
- Characters cycle through: `!<>-_\\/[]{}—=+*^?#________`
- Duration: ~1.5s
- Trigger: on mount or when in viewport

#### `scroll-reveal.tsx`
- Wrapper that fades in + slides up children when they enter viewport
- Uses `framer-motion` `useInView` + `motion.div`
- Props: `direction ("up" | "left" | "right")`, `delay`, `duration`
- Default: `opacity: 0 → 1`, `translateY: 40px → 0`, `duration: 0.6s`

#### `marquee.tsx`
- Infinite horizontal scroll of items (logos/icons)
- Duplicates children for seamless loop
- CSS animation: `translateX(0) → translateX(-100%)`
- Pauses on hover
- Props: `speed`, `direction ("left" | "right")`, `pauseOnHover`

#### `dot-background.tsx`
- SVG pattern of small dots as section background
- Radial gradient mask (fades edges)
- Dot color: `rgba(255,255,255,0.08)` in dark mode

#### `magnetic-button.tsx`
- Button that slightly moves toward cursor on hover (magnetic effect)
- Uses mouse position relative to element center
- Transform strength: max 8px displacement
- Spring animation on mouse leave (snaps back)

---

## 5. Page Sections — Detailed Implementation

### 5.1 Hero Section (`sections/hero.tsx`)

```
┌──────────────────────────────────────────────────────┐
│  <DotBackground />                                   │
│  <Spotlight />                                       │
│                                                      │
│     Badge: "✨ Available for opportunities"          │
│                                                      │
│     <h1> Hi, I'm [Your Name] </h1>                  │
│     <TextScramble text="Software Engineer" />        │
│                                                      │
│     <p> I build performant, accessible web           │
│        applications with modern technologies. </p>   │
│                                                      │
│     ┌──────────────┐  ┌──────────────┐               │
│     │ View My Work │  │  Contact Me  │               │
│     │  (glow btn)  │  │ (outline btn)│               │
│     └──────────────┘  └──────────────┘               │
│                                                      │
│     [GitHub]  [LinkedIn]  [Twitter]  icons            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Implementation**:
- Component type: **Client Component** (`"use client"`) for mouse tracking
- Background: `<DotBackground />` with `<Spotlight />` overlay
- Badge: `<Badge variant="secondary">` with subtle pulse animation
- H1: `text-5xl md:text-7xl font-bold tracking-tight`
- Role text: `<TextScramble />` cycles through `["Software Engineer", "Full Stack Developer", "Problem Solver"]`
- CTA buttons: Primary = `<Button variant="glow">`, Secondary = `<Button variant="outline">`
- Social icons: `<MagneticButton>` wrapping `lucide-react` icons
- Animation: Everything staggers in (`delay: 0, 0.1, 0.2, 0.3s...`) using `framer-motion`
- **Performance**: Spotlight only on `md:` breakpoint and above

---

### 5.2 About Section (`sections/about.tsx`)

```
┌──────────────────────────────────────────────────────┐
│  Section Title: "About Me"                           │
│                                                      │
│  ┌────────────┐  ┌──────────────────────────────┐    │
│  │            │  │  Bio paragraph 1              │    │
│  │  Profile   │  │  Bio paragraph 2              │    │
│  │  Photo     │  │                               │    │
│  │  (glass    │  │  [Download Resume] button     │    │
│  │   border)  │  │                               │    │
│  └────────────┘  └──────────────────────────────┘    │
│                                                      │
│  Stats: ┌────┐ ┌────┐ ┌────┐ ┌────┐                 │
│         │ 5+ │ │ 30+│ │ 15+│ │ 99%│                 │
│         │Yrs │ │Proj│ │Tech│ │Uptime                │
│         └────┘ └────┘ └────┘ └────┘                 │
│                                                      │
│  Skills Bento Grid:                                  │
│  ┌──────────┬──────────┬──────────┐                  │
│  │ Frontend │ Backend  │ DevOps   │                  │
│  │ React    │ Node.js  │ Docker   │                  │
│  │ Next.js  │ NestJS   │ AWS      │                  │
│  │ TS       │ Postgres │ CI/CD    │                  │
│  ├──────────┴────┬─────┴──────────┤                  │
│  │    Mobile     │    Tools       │                  │
│  │ React Native  │ Git, Figma    │                  │
│  └───────────────┴────────────────┘                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Implementation**:
- Component type: **Server Component** (no interactivity needed, animation via CSS)
- Photo: `next/image` with `priority`, glass border (`border border-border/50 rounded-2xl shadow-xl`)
- Stats: Animated number counters using `framer-motion` `useSpring` + `useInView`
- Skills Grid: CSS Grid with `grid-template-areas` for bento layout
- Each skill card: `<Card glass hover>` with icon + list of technologies
- Animation: `<ScrollReveal>` wrapper on the entire section

---

### 5.3 Experience Timeline (`sections/experience.tsx`)

```
┌──────────────────────────────────────────────────────┐
│  Section Title: "Experience"                         │
│                                                      │
│         ●── 2024 - Present ──────────────────┐       │
│         │   Senior Software Engineer          │       │
│         │   Company Name                      │       │
│         │   • Led team of 5 engineers         │       │
│         │   • Built microservices platform    │       │
│         │   [React] [Node.js] [AWS]           │       │
│         │                                     │       │
│         ●── 2022 - 2024 ────────────────────┐│       │
│         │   Software Engineer                ││       │
│         │   Company Name                     ││       │
│         │   • Developed REST APIs            ││       │
│         │   [TypeScript] [NestJS]            ││       │
│         │                                    ││       │
│         ●── 2020 - 2022 ──────────────────┐ ││       │
│              Junior Developer              │ ││       │
│              ...                           │ ││       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Implementation**:
- Data source: `data/experience.ts` — array of `Experience` objects
- Vertical line: `absolute left-0 md:left-1/2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent`
- Timeline dots: `w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.5)]`
- Cards alternate left/right on desktop, stack on mobile
- Company logo: `grayscale hover:grayscale-0 transition-all`
- Tech badges: `<Badge variant="tech">`
- Animation: Each card slides in from its side with stagger delay

---

### 5.4 Projects Bento Grid (`sections/projects.tsx`)

```
┌──────────────────────────────────────────────────────┐
│  Section Title: "Featured Projects"                  │
│                                                      │
│  Filters: [All] [Frontend] [Backend] [Full Stack]    │
│                                                      │
│  ┌─────────────────────┬──────────┐                  │
│  │                     │          │                  │
│  │   Project 1 (2x2)  │ Proj 2   │                  │
│  │   Screenshot/Video  │ (1x2)    │                  │
│  │                     │          │                  │
│  ├──────────┬──────────┴──────────┤                  │
│  │ Proj 3   │    Project 4 (2x1)  │                  │
│  │ (1x1)    │    Screenshot       │                  │
│  └──────────┴─────────────────────┘                  │
│                                                      │
│  ┌─ "View All Projects →" link ──────────────────┐   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Implementation**:
- Component type: **Client Component** (filter state + hover interactions)
- Data source: `data/projects.ts`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-4`, varying `col-span` / `row-span`
- Each tile:
  - `<Card glass>` with `overflow-hidden group`
  - Image: `next/image` with `fill`, `object-cover`, `group-hover:scale-105 transition-transform`
  - Overlay: `absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent`
  - Info: Title, description (revealed on hover → `opacity-0 group-hover:opacity-100`)
  - Tech: `<Badge variant="tech">` row
  - Links: GitHub + Live Demo icons
- Filter: `useState` for active filter, `AnimatePresence` + `layout` for smooth re-ordering
- "View All" link: navigates to `/projects`

---

### 5.5 Tech Stack Marquee (`sections/tech-stack.tsx`)

```
┌──────────────────────────────────────────────────────┐
│  Section Title: "Technologies I Work With"           │
│                                                      │
│  ← React  TypeScript  Next.js  Node.js  PostgreSQL → │
│  ← Docker  AWS  Git  Figma  Tailwind  Prisma      → │
│  (infinite scroll, pauses on hover)                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Implementation**:
- Two `<Marquee />` rows, opposite directions
- Each item: Icon (from `lucide-react` or custom SVG) + label
- Style: `grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all`
- Hover glow: `hover:drop-shadow(0 0 8px rgba(139,92,246,0.4))`
- Data: `data/skills.ts` with `{ name, icon, category }` objects

---

### 5.6 Contact Section (`sections/contact.tsx`)

```
┌──────────────────────────────────────────────────────┐
│  Section Title: "Get In Touch"                       │
│                                                      │
│  ┌──────────────────┐  ┌─────────────────────┐       │
│  │  Contact Form    │  │  Info Card (glass)   │       │
│  │                  │  │                     │       │
│  │  Name  [______]  │  │  📧 email@you.com   │       │
│  │  Email [______]  │  │  📍 Your Location   │       │
│  │  Message         │  │  💼 Open to work    │       │
│  │  [____________]  │  │                     │       │
│  │  [____________]  │  │  ── Social Links ── │       │
│  │                  │  │  [GH] [LI] [TW]    │       │
│  │  [Send Message]  │  │                     │       │
│  └──────────────────┘  └─────────────────────┘       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Implementation**:
- Component type: **Client Component** (form state)
- Form validation: `Zod` schema — `name (min 2)`, `email (valid)`, `message (min 10)`
- Submission: Next.js **Server Action** (`actions/contact.ts`)
  - Server validates with same Zod schema
  - Returns `{ success: boolean, message: string }`
- States: idle → loading (spinner) → success (animated checkmark) → error
- Info card: `<Card glass>` with contact details + social icon links
- All inputs use `<Input />` and `<Textarea />` from `components/ui/`

---

## 6. Page Files — Implementation Details

### 6.1 `app/layout.tsx` (Root Layout)

```tsx
// Key responsibilities:
// 1. Import and apply Geist fonts (next/font)
// 2. Import globals.css
// 3. Wrap children with <ThemeProvider> (next-themes)
// 4. Initialize Lenis smooth scroll (via useEffect or script)
// 5. Set global metadata (title template, description, OG)
// 6. Add <Header /> and <Footer /> around {children}

export const metadata: Metadata = {
  title: { template: "%s | Your Name", default: "Your Name — Software Engineer" },
  description: "Software Engineer portfolio...",
  metadataBase: new URL("https://yoursite.com"),
  openGraph: { type: "website", locale: "en_US", images: ["/og-image.png"] },
};
```

### 6.2 `app/page.tsx` (Home Page)

```tsx
// Server Component — no "use client"
// Renders all sections in order:

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
```

### 6.3 `app/projects/[slug]/page.tsx` (Project Detail)

```tsx
// Server Component with generateStaticParams for SSG
// Content: Hero image, title, description, tech stack, challenges, outcomes
// Links: Live demo + GitHub repo
// Navigation: ← Previous | Next → project links
```

### 6.4 `app/not-found.tsx` (404 Page)

```tsx
// Animated "404" text (text-scramble effect)
// "Go Home" button with moving border
// Dot background pattern
```

---

## 7. Data Models (`types/`)

### `project.ts`
```ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;       // For detail page
  image: string;                  // Path in /public/images/projects/
  technologies: string[];
  category: "frontend" | "backend" | "fullstack" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;              // Show in home bento grid
  gridSize: "1x1" | "2x1" | "1x2" | "2x2";  // Bento grid placement
}
```

### `experience.ts`
```ts
export interface Experience {
  id: number;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;                 // "2024 - Present"
  description: string;
  highlights: string[];
  technologies: string[];
}
```

---

## 8. Performance Optimization Strategy

### 8.1 Bundle Size Budget
| Metric               | Target        | How                                          |
| -------------------- | ------------- | -------------------------------------------- |
| Initial JS           | < 80KB gzip   | RSC by default, minimal client components    |
| Total page weight    | < 500KB       | Image optimization, tree-shaking             |
| Number of client components | < 10   | Only Hero, Projects, Contact, ThemeToggle    |

### 8.2 Core Web Vitals Targets
| Metric | Target  | Strategy                                              |
| ------ | ------- | ----------------------------------------------------- |
| **LCP**| < 1.5s  | `priority` on hero image, preload fonts, RSC          |
| **FID**| < 50ms  | Minimal JS hydration, deferred animations             |
| **CLS**| < 0.05  | `next/font` (no FOUT), explicit image dimensions      |
| **INP**| < 100ms | Lightweight event handlers, no heavy re-renders       |
| **FCP**| < 0.8s  | Streaming SSR, minimal blocking CSS                   |
| **TTFB**| < 200ms| Edge runtime / CDN (Vercel), static generation        |

### 8.3 Image Optimization
- Format: **WebP** (fallback AVIF if supported)
- Sizes: Use `next/image` with `sizes` prop for responsive loading
- Profile photo: max 400×400, quality 85, `priority`
- Project images: max 800×600, quality 80, `loading="lazy"`
- Placeholder: `blur` with auto-generated `blurDataURL`

### 8.4 Animation Performance
- **GPU-accelerated only**: Use `transform` and `opacity` — never animate `width`, `height`, `top`, `left`
- **`will-change`**: Apply sparingly only to actively animating elements
- **Reduced motion**: Respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()`
- **Viewport gating**: Only start animations when element is in viewport (`useInView`)
- **Marquee optimization**: Use CSS `animation` instead of JS-driven for the tech stack marquee
- **Spotlight**: Throttle mouse position updates to 60fps max

### 8.5 Code Splitting Strategy
- **Server Components by default**: `page.tsx`, `layout.tsx`, `about.tsx` — zero JS shipped
- **"use client" only when needed**: Components with `useState`, `useEffect`, event handlers
- **Dynamic imports**: `next/dynamic` for heavy components (e.g., `CommandPalette`) with `ssr: false`
- **Tree-shaking**: Import individual icons from `lucide-react` (e.g., `import { Github } from "lucide-react"`)

### 8.6 Font Loading
```ts
// src/lib/fonts.ts
import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",             // Prevents invisible text
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
```

### 8.7 SEO Performance
- **Static Generation**: Home page and project pages are statically generated at build time
- **Metadata**: Every page has unique `title`, `description`, `openGraph`
- **Sitemap**: Auto-generated via `app/sitemap.ts`
- **Robots**: `app/robots.ts` for crawler instructions
- **JSON-LD**: Structured data for "Person" schema on home page

### 8.8 Caching & Headers (`next.config.ts`)
```ts
// Security + performance headers
headers: [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
]
// Image optimization
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200],
}
```

---

## 9. Accessibility Checklist (WCAG 2.1 AA)

- [ ] All interactive elements focusable via keyboard (Tab order)
- [ ] Skip-to-content link as first focusable element
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] All images have descriptive `alt` text
- [ ] Form inputs have associated `<label>` elements
- [ ] ARIA labels on icon-only buttons
- [ ] `prefers-reduced-motion` respected (disable complex animations)
- [ ] Semantic HTML: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`
- [ ] Focus visible styles on all interactive elements

---

## 10. Implementation Order

| #  | Task                          | Type           | Priority |
| -- | ----------------------------- | -------------- | -------- |
| 1  | Restructure to `src/`        | Setup          | 🔴 High  |
| 2  | Install all dependencies      | Setup          | 🔴 High  |
| 3  | `globals.css` + CSS variables | Design System  | 🔴 High  |
| 4  | `tailwind.config.ts`          | Design System  | 🔴 High  |
| 5  | `lib/fonts.ts` + `lib/utils.ts`| Utility       | 🔴 High  |
| 6  | `providers/theme-provider.tsx`| Provider       | 🔴 High  |
| 7  | `app/layout.tsx` (rewrite)    | Layout         | 🔴 High  |
| 8  | UI components (all 6)         | Components     | 🔴 High  |
| 9  | Shared effects (all 7)        | Components     | 🟡 Med   |
| 10 | Layout components (all 5)     | Components     | 🔴 High  |
| 11 | Data files (all 5)            | Content        | 🟡 Med   |
| 12 | Custom hooks (all 4)          | Hooks          | 🟡 Med   |
| 13 | Hero section                  | Section        | 🔴 High  |
| 14 | About section                 | Section        | 🟡 Med   |
| 15 | Tech Stack section            | Section        | 🟡 Med   |
| 16 | Projects section              | Section        | 🔴 High  |
| 17 | Experience section            | Section        | 🟡 Med   |
| 18 | Contact section + server action| Section       | 🟡 Med   |
| 19 | Footer                        | Layout         | 🟢 Low   |
| 20 | `app/page.tsx` (assemble)     | Page           | 🔴 High  |
| 21 | Project detail page           | Page           | 🟡 Med   |
| 22 | 404 page                      | Page           | 🟢 Low   |
| 23 | SEO (metadata, sitemap, JSON-LD)| Optimization | 🟡 Med   |
| 24 | Performance audit (Lighthouse)| Verification   | 🔴 High  |
| 25 | Accessibility audit           | Verification   | 🟡 Med   |
| 26 | Deploy to Vercel              | Deployment     | 🔴 High  |

---

> **Total estimated files to create/modify**: ~45 files
> **Estimated implementation time**: 3-5 focused days
