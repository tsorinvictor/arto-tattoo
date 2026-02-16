# Agent Rules: Tattoo Parlor Project

- **Framework**: Next.js (React) + Tailwind CSS.
- **Backend Style**: Future-proof Node/Express logic inside `/backend`.
- **Component Pattern**:
  - Use Functional Components with TypeScript (or clean ES6).
  - All reusable UI goes into `/src/components`.
  - Use "Lucide-react" for icons.
- **Styling**: SCSS Modules only. No inline styles.
- **Naming Convention**:
  - Components: PascalCase (e.g., `GalleryImage.jsx`).
  - Utilities/Routes: camelCase (e.g., `formHandler.js`).
- **Clean Code**: Follow DRY. If a logic is used twice, move it to `/src/lib`.
- **Color Palette**: Strictly Minimalist. Deep blacks (#000000), soft off-whites (#F5F5F5), and subtle grays.
- **Typography**:
  - Serif fonts for headings (elegant, editorial feel).
  - Sans-serif for body text (clean, modern).
- **Animations**:
  - Use `framer-motion` for "Fade In Up" effects on scroll.
  - Page transitions should feel "weightless" (0.8s duration).
- **Landing Page**:
  - Absolute center logo.
  - No scrollbar on the splash screen.
  - Interactive hover state on the logo (subtle scale/glow).
- **Gallery**:
  - Use `next/image` for optimized images.
  - Lazy load images.
  - Use `framer-motion` for "Fade In Up" effects on scroll.
    **Assets**:

# Agent Styling Rules: SCSS Modules

- **File Naming**: Use `[ComponentName].module.scss` inside the same folder as the component.
- **Variables**: All colors and fonts must come from `src/styles/_variables.scss`.
- **Nesting**: Use BEM-lite or clean nesting (max 3 levels deep).
- **Measurements**: Use SCSS variables for spacing (e.g., `$spacing-unit`).
  -always use px for measurements
- **Arto Style**:
  - Focus on `letter-spacing` for headers.
  - Use `transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1)` for all hovers.
- **Mixins**: Create a mixin for "flex-center" and "abs-center" to keep code DRY.

## Asset & Data Management

- **Static Assets**: All public-facing images (Logo, Favicon) must reside in `/public`.
- **Gallery Images**: Use `/public/gallery/` for local development. Reference them via absolute paths (e.g., `/gallery/image.jpg`).
- **Data Decoupling**: DO NOT hardcode gallery image paths directly in the UI components.
- **Centralized Data**: Use `src/data/gallery.ts` to store image arrays. UI components should import data from there to prepare for future Backend integration.
- **Path Aliases**: Always use `@/` for imports (e.g., `import { images } from '@/data/gallery'`).
