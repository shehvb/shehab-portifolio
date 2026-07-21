# Implementation Plan: Frontend Portfolio Website

**Branch**: `001-frontend-portfolio-spec` | **Date**: 2026-04-23 | **Spec**: `C:\Users\shehab\OneDrive\Desktop\SHEHAB portifloio\shehab-portifolio\specs\001-frontend-portfolio-spec\spec.md`  
**Input**: Feature specification from `/specs/001-frontend-portfolio-spec/spec.md`

## Summary

Build a scalable, modular, bilingual (English/Arabic) frontend portfolio website for Shehab AbdElRahman using a TypeScript-first React architecture. The implementation emphasizes reusable section and UI primitives, robust theme and language state, Formspree contact flow with clear submission states, accessible motion strategy, and production deployment readiness.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18.x, modern ECMAScript targets  
**Primary Dependencies**: React, Tailwind CSS, Framer Motion, React Hook Form, Zod, i18next + react-i18next, class-variance-authority, clsx  
**Storage**: N/A (static content files + runtime browser storage for theme/language preference)  
**Testing**: Vitest, React Testing Library, Playwright (smoke/e2e), axe-core accessibility checks  
**Target Platform**: Modern desktop and mobile browsers (latest 2 versions of major evergreen browsers)  
**Project Type**: Frontend single-page web application  
**Performance Goals**: Initial content usable in under 3 seconds on standard mobile, language/theme switch under 500ms perceived update, smooth 60fps interactions on typical hardware  
**Constraints**: Fully responsive, bilingual with dynamic RTL/LTR, accessible keyboard navigation and contrast, no backend service dependency beyond Formspree endpoint  
**Scale/Scope**: Single-page portfolio with 5 required sections, 2 locales, dark/light themes, 4 featured projects, and one contact form workflow

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Constitution file exists but currently contains placeholder template values rather than enforceable governance rules.
- Gate interpretation for this feature uses practical defaults: modular architecture, testing strategy, accessibility baseline, and explicit scope boundaries.
- **Pre-Phase 0 Gate Status**: PASS (provisional due to placeholder constitution content)
- **Post-Phase 1 Gate Status**: PASS (all design artifacts align with spec and no unresolved clarifications remain)

## Project Architecture

- Use a layered modular SPA architecture:
  - App shell and providers manage global concerns (theme, locale, motion preferences).
  - Sections compose page-level content blocks (Hero, About, Skills, Projects, Contact).
  - Reusable components provide shared primitives and domain composites.
  - Data and translations are separated from view logic for maintainability and localization safety.
  - Hooks encapsulate cross-cutting behavior (theme, locale direction, responsive query, form submission state).
- Keep rendering deterministic by deriving UI from typed data and explicit state machines.

## Component Hierarchy

```text
App
├── AppProviders
│   ├── ThemeProvider
│   └── LocaleProvider
├── MainLayout
│   ├── Header
│   │   ├── LanguageSwitcher
│   │   └── ThemeToggle
│   ├── HeroSection
│   ├── AboutSection
│   ├── SkillsSection
│   ├── ProjectsSection
│   │   └── ProjectCard[]
│   ├── ContactSection
│   │   └── ContactForm
│   │       ├── InputField[]
│   │       ├── TextAreaField
│   │       └── SubmitButton
│   └── Footer
```

## State Management Strategy

- Use local component state for transient UI interactions.
- Use React Context for global cross-cutting states:
  - `ThemeContext`: active theme, system preference fallback, persistence.
  - `LocaleContext`: active locale, writing direction, translation helpers.
- Use React Hook Form + Zod for contact form state and validation lifecycle.
- Define a form submission status enum (`idle | validating | submitting | success | error`) and render explicit UI states from it.

## Theme Toggle Implementation

- Manage theme through `ThemeProvider` with `data-theme` or `class` attribute on root element.
- Initialize from persisted preference; fallback to system preference on first visit.
- Persist theme in browser storage and synchronize UI tokens through Tailwind theme classes.
- Ensure all components consume semantic color tokens, not hardcoded palette values.

## Language Switch Implementation

- Use i18n dictionary files (`en`, `ar`) with typed key contracts.
- `LocaleProvider` controls locale and document direction (`ltr`/`rtl`).
- Toggle language without page reload; update `lang` and `dir` attributes at document level.
- Persist selected language in browser storage for session continuity.
- Ensure RTL-safe spacing and icon mirroring strategy where needed.

## Formspree Integration Flow

1. User fills `name`, `email`, `message`.
2. Client-side validation executes (required fields + email format + message length).
3. On valid form, submit to Formspree endpoint from environment configuration.
4. Display loading state and disable repeated submission.
5. On success, show localized success feedback and reset form.
6. On failure, show localized error guidance and allow retry with preserved data.

## Framer Motion Animation Strategy

- Use section-level entrance animations with staggered children for content hierarchy.
- Restrict motion to transform/opacity for performance.
- Centralize motion presets in reusable utility configs.
- Respect user reduced-motion preference by replacing transitions with minimal/no motion.
- Keep animation durations short to avoid delaying content comprehension.

## Responsive Breakpoints

- Mobile-first Tailwind breakpoints:
  - `sm`: small phones and larger
  - `md`: tablets
  - `lg`: small laptops
  - `xl`: desktops
  - `2xl`: large monitors
- Layout behavior:
  - Single-column section stacks on mobile.
  - Two-column section compositions from tablet upward where beneficial.
  - Project grid scales from 1 -> 2 -> 3 columns depending on width.
- Enforce no horizontal overflow and maintain tappable control sizing.

## Reusable Component Strategy

- Build shared UI primitives (`Button`, `Badge`, `Card`, `SectionHeading`, `Input`, `Textarea`, `ThemeToggle`, `LanguageSwitcher`).
- Define typed props and style variants via class composition utilities.
- Prefer composition over prop explosion for complex section-specific UI.
- Keep domain-specific presentation in section-level composites built from primitives.
- Standardize spacing, typography, and interaction states through shared design tokens.

## Deployment Readiness

- Environment-driven Formspree endpoint configuration with startup validation.
- Production build pipeline checks:
  - Type checks
  - Linting
  - Unit/component tests
  - Accessibility smoke checks
  - Build artifact validation
- Include SEO and metadata basics (title, description, open graph essentials).
- Add post-deploy smoke checklist: load page, switch language, toggle theme, submit contact form, validate mobile layout.

## Project Structure

### Documentation (this feature)

```text
specs/001-frontend-portfolio-spec/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── component-contracts.md
│   ├── localization-contract.md
│   └── contact-form-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   ├── providers/
│   │   ├── ThemeProvider.tsx
│   │   └── LocaleProvider.tsx
│   └── layout/
│       ├── MainLayout.tsx
│       └── Header.tsx
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   └── Contact/
├── components/
│   ├── ui/
│   ├── navigation/
│   ├── forms/
│   └── shared/
├── translations/
│   ├── en/
│   ├── ar/
│   ├── index.ts
│   └── schema.ts
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useTheme.ts
│   ├── useLocale.ts
│   ├── useDirection.ts
│   └── useContactForm.ts
├── types/
│   ├── content.ts
│   ├── project.ts
│   ├── form.ts
│   └── state.ts
├── lib/
│   ├── cn.ts
│   ├── motion.ts
│   └── validation.ts
└── styles/
    ├── globals.css
    └── tokens.css

tests/
├── unit/
├── component/
├── integration/
└── accessibility/
```

**Structure Decision**: Single-project modular frontend architecture centered under `src/` with strict separation of `components`, `sections`, `translations`, `data`, `hooks`, and `types`, matching requested scalability and maintainability goals.

## Complexity Tracking

No constitution violations requiring exception handling were identified.
