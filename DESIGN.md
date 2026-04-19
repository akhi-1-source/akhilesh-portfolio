# Design Brief: Akhilesh Gusain 3D Portfolio

## Aesthetic Direction
Luxury tech meets glassmorphism — immersive dark environment with frosted translucent glass panels, iridescent highlights, and bold 3D animations. Premium, memorable, anti-generic.

## Color Palette (OKLCH)

| Role              | L     | C     | H   | Usage                                     |
| :---------------- | :---- | :---- | :-- | :---------------------------------------- |
| Background        | 0.08  | 0     | 0   | Deep immersive dark space (near-black)   |
| Foreground        | 0.98  | 0     | 0   | Bright white for text contrast            |
| Card              | 0.14  | 0     | 0   | Frosted glass base layer                  |
| Primary (Cyan)    | 0.70  | 0.18  | 200 | Interactive glass elements, focus states |
| Secondary (Purpl) | 0.65  | 0.12  | 280 | Depth, secondary accents, iridescence    |
| Accent (Magenta)  | 0.75  | 0.15  | 340 | Highlights, CTAs, active states          |
| Muted             | 0.22  | 0     | 0   | Disabled states, subtle backgrounds      |
| Border            | 0.22  | 0     | 0   | Glass panel edges (white/10)              |

## Typography

| Family             | Role    | Usage                          |
| :----------------- | :------ | :----------------------------- |
| BricolageGrotesque | Display | Headlines, nav, section titles |
| GeneralSans        | Body    | Body copy, descriptions, UI    |
| GeistMono          | Mono    | Code, technical labels         |

## Elevation & Depth

**Structural Zones**: Navbar (frosted glass bar w/ blur) → Hero (profile + glass panels) → Content sections (layered glass cards) → Projects (floating 3D animations) → Skills (3D liquid glass buttons) → Footer (subtle glass bar).

## Component Patterns

- **Glass Panel**: `bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl` with glow shadow
- **Glass Button**: `bg-primary/20 border border-primary/40` with cyan glow on hover
- **Accent Button**: Magenta accent with enhanced glow, used for CTAs
- **Navigation**: Frosted glass navbar, sticky positioning, subtle shadows
- **Project Card**: Floating animation (6s cycle), 3D transform on hover
- **Skill Button**: 3D liquid glass with iridescent highlights, glow-pulse animation

## Motion & Animation

- **Float**: 6s ease-in-out loop with Y translation (-15px to 0px) and subtle Z rotation (±1deg) for project cards
- **Glow-pulse**: 3s opacity + glow intensity cycle for skill buttons and accent elements
- **Hover**: Instantaneous glass panel brightness/glow increase, transform scale on buttons
- **Transition default**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` for all interactive elements

## Constraints

- No generic default shadows — use glass-specific glow effects (`rgba(112, 180, 255, 0.3)` for cyan, `rgba(191, 57, 204, 0.4)` for magenta)
- All text must have sufficient contrast against `0.08 0 0` background (use `0.98 0 0` or accent colors)
- Backdrop blur on all glass panels (`backdrop-blur-xl`)
- Soft translucency (20–40% opacity) for glass layers to maintain depth perception
- 3D transforms via motion/React Three Fiber — CSS-only transforms insufficient

## Signature Detail

Iridescent glass layers: cyan primary accents blending with purple secondary, creating depth illusion. Soft glowing halos around interactive elements. Floating 3D project cards with parallax on hover. All 19 skills as liquid glass buttons with independent glow-pulse timing for cascading effect.

## Pages

All 9 pages use consistent glassmorphism treatment: Home (about + photo), Journey (course modules), Projects (floating 3D), Other Tasks (class activities), Visual & Creative (creatives), Tools (learned tools), Skills (liquid glass buttons), Certificates, Contact (visual form).

