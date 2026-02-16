# Agent Skills

## Skill: Create Page

- Generate a new folder in `/src/pages`.
- Generate a new file in the folder.
- Ensure it imports the standard `Navbar` and `Footer` from `/components`.
- Apply Framer Motion animations for page transitions.

## Skill: Add Gallery Item

- Update the gallery state in `/src/components/Gallery.jsx`.
- Optimize images using Next/Image component for fast loading.

## Skill: Backend Route Setup (Future)

- Create a route in `/backend/routes`.
- Link it to a controller in `/backend/controllers`.
- Ensure input validation is handled via Middleware.

## Skill: Advanced Image Handling

- **Aspect Ratio Control**: Every gallery image wrapper must enforce a 4:5 portrait ratio using SCSS `aspect-ratio` or padding hacks.
- **Next.js Image Component**:
  - Use `layout="responsive"` or `fill` with `object-fit: cover`.
  - Apply `placeholder="blur"` logic for better User Experience.
  - First two images in the feed must have the `priority` attribute to boost LCP (Largest Contentful Paint) scores.
- **Lazy Loading**: All images below the "fold" must be natively lazy-loaded.
