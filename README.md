# Kalpana Patil — Portfolio (simplified)

A premium, animated, fully responsive personal portfolio for a Java Full Stack Developer.
Built with React (Vite) + Tailwind CSS v4 + Framer Motion.

## Sections

Home · About (includes Education) · Projects · Experience · Certifications · Contact

## Other features

- Sticky blurred navbar with active-section highlighting + mobile menu
- Dark/light theme toggle
- Resume download button
- Loading screen, scroll progress bar, back-to-top button, custom cursor
- Framer Motion scroll-reveal animations throughout
- Validated contact form wired to EmailJS with toast notifications
- Custom 404 page
- Per-section error boundaries (one section failing never blanks the rest of the page)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
npx vitest run    # render/regression tests
```

## Configure before deploying

1. **Content** lives in `src/data/`:
   - `nav.js` — name, title, intro, contact info, social links, resume path
   - `projects.js` — project grid
   - `profile-data.js` — experience, education, certifications

2. **Resume** — drop your PDF at `public/resume/Kalpana_Patil_Resume.pdf`.

3. **EmailJS** — open `src/services/emailjs.js` and replace `SERVICE_ID`, `TEMPLATE_ID`,
   `PUBLIC_KEY` with your emailjs.com credentials. Template should accept `from_name`,
   `from_email`, `subject`, `message` variables.

4. **Project images** — cards currently show a styled initials placeholder. Add real
   screenshots to `public/projects/` and reference them via the `image` field in
   `src/data/projects.js`.

## Folder structure

```
src/
  components/
    layout/     Navbar, Footer
    ui/         Button, GlassCard, SectionHeading, Loader, ScrollProgressBar,
                BackToTop, CustomCursor
    common/     ErrorBoundary
  sections/     Hero, About, Projects, Experience, Certifications, Contact
  pages/        Home, NotFound
  context/      ThemeContext (dark/light toggle)
  hooks/        useActiveSection, useScrollProgress
  data/         nav.js, projects.js, profile-data.js
  services/     emailjs.js
  App.jsx / main.jsx / index.css
```

## Design system

Defined once in `src/index.css` under `@theme`:

| Token | Value |
|---|---|
| `--color-primary` | `#3B82F6` |
| `--color-accent` | `#60A5FA` |
| `--color-bg` | `#0F172A` |
| `--color-card` | `#1E293B` |
| Display font | Sora |
| Body font | Inter |
| Mono / label font | JetBrains Mono |
