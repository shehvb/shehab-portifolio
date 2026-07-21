# Quickstart - Frontend Portfolio Website

## Prerequisites

- Node.js 18+ (recommended latest LTS)
- npm or pnpm package manager
- Formspree endpoint configured for contact form submissions

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Environment

Create `.env` (or equivalent env file supported by your build setup):

```text
VITE_FORMSPREE_ENDPOINT=<your_formspree_endpoint_url>
```

## 3. Run Development Server

```bash
npm run dev
```

## 4. Build And Verify Production

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run preview
```

## 5. Manual Verification Checklist

- Confirm all required sections render: Hero, About, Skills, Projects, Contact.
- Switch theme (light/dark) and verify contrast and component states.
- Switch language (English/Arabic) and confirm full copy updates.
- Confirm Arabic mode applies RTL direction throughout layout.
- Submit contact form and verify:
  - validation messages
  - loading state
  - success state
  - recoverable error behavior (simulate network failure)
- Test on mobile, tablet, and desktop widths for layout consistency.

## 6. Animation And Accessibility Checks

- Confirm section animations are smooth and non-blocking.
- Confirm reduced-motion preference limits/disables non-essential motion.
- Verify keyboard navigation across header controls, section links, and form fields.
- Verify visible focus indicators and accessible labels.

## 7. Deployment Readiness Gate

Before deployment, ensure:

- All tests pass in CI/local pipeline.
- No missing translation keys for English/Arabic.
- No unresolved TODO placeholders in portfolio content.
- Formspree endpoint is valid in deployment environment.
- Final smoke test passes on deployed URL.
