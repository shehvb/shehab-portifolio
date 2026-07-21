# Phase 0 Research - Frontend Portfolio Website

## 1) Translation Architecture (English/Arabic + RTL)

**Decision**: Use `i18next` with `react-i18next`, split locale resources by section, and enforce typed translation keys via a schema contract.

**Rationale**:
- Supports runtime language switching without reload.
- Mature ecosystem for interpolation, pluralization, and fallback behavior.
- Pairing locale state with document-level `lang` and `dir` updates makes RTL/LTR behavior explicit and testable.

**Alternatives considered**:
- Custom JSON dictionary + context only: simpler setup, but weaker tooling and fallback handling.
- FormatJS/react-intl: strong formatting support but added complexity for this portfolio scope.

## 2) Theme Toggle + Persistence

**Decision**: Implement a centralized `ThemeProvider` that initializes from persisted preference, falls back to system preference, and applies a root theme class for Tailwind token variants.

**Rationale**:
- Keeps theme logic isolated and reusable.
- Avoids inconsistent per-component theme checks.
- Works with semantic design tokens for scalable visual maintenance.

**Alternatives considered**:
- Per-component conditional classes only: creates duplication and drift.
- CSS-only media query without user toggle: fails explicit light/dark switching requirement.

## 3) Formspree Integration + Validation

**Decision**: Use React Hook Form + Zod for client-side validation and submit to Formspree endpoint configured by environment variable, with explicit submission state machine.

**Rationale**:
- Strong typed form model and concise validation.
- Clear UX states (`loading`, `success`, `error`) required by the specification.
- Keeps integration straightforward without backend dependency.

**Alternatives considered**:
- Native form validation only: limited localization and UX control.
- Formik + Yup: viable but heavier runtime and boilerplate for this scope.

## 4) Framer Motion Strategy

**Decision**: Use Framer Motion for section-level entrance animations and micro-interactions, centralize motion presets in utility modules, and honor reduced-motion preferences.

**Rationale**:
- Meets animation requirements while controlling consistency.
- Motion presets prevent ad-hoc timings and improve maintainability.
- Reduced-motion support is required for accessibility.

**Alternatives considered**:
- Pure CSS transitions: lightweight but less expressive for orchestrated sequence animations.
- GSAP: powerful but unnecessary complexity for portfolio-scale motion.

## 5) Responsive Layout + Breakpoints

**Decision**: Apply Tailwind mobile-first breakpoints with section-specific layout rules and strict overflow constraints.

**Rationale**:
- Predictable scaling from mobile to desktop.
- Aligns with requirement for modern minimal responsive UI.
- Easy to enforce consistent spacing and typography scales across sections.

**Alternatives considered**:
- Desktop-first approach: increases override complexity for mobile.
- Fully custom media queries without Tailwind scales: less consistent and harder to standardize.

## 6) Reusable Component System

**Decision**: Create a shared UI layer with typed props and variant-driven styling, then compose section-specific components from these primitives.

**Rationale**:
- Satisfies reusability and modularity requirements.
- Reduces style drift and duplicate logic.
- Encourages clean API boundaries between generic UI and domain-specific sections.

**Alternatives considered**:
- Section-only isolated components: faster initially but poor long-term consistency.
- External UI kit: can accelerate development but may conflict with custom bilingual/RTL and design requirements.

## 7) State Management Strategy

**Decision**: Keep state local by default, promote only global cross-cutting concerns (theme and locale) to Context providers, and keep form state scoped to contact module.

**Rationale**:
- Matches portfolio complexity without overengineering.
- Keeps global state minimal and predictable.
- Prevents introducing unnecessary external state libraries.

**Alternatives considered**:
- Global store (Redux/Zustand) for all state: unnecessary overhead at this project scale.
- Single monolithic context: reduces clarity and increases rerender risk.

## 8) Deployment Readiness Pattern

**Decision**: Define a production readiness checklist including type check, linting, test pass, build validation, environment key checks, and post-deploy smoke verification.

**Rationale**:
- Provides repeatable quality gates before release.
- Protects critical user flows (language switch, theme toggle, contact form submission).
- Supports maintainable handoff and future updates.

**Alternatives considered**:
- Manual ad-hoc deployment verification: prone to misses and regressions.
- Overly complex CI-only pipeline requirements: unnecessary for initial portfolio scope.
