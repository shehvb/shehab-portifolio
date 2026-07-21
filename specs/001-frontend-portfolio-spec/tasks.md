# Tasks: Frontend Portfolio Website

**Input**: Design documents from `/specs/001-frontend-portfolio-spec/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`

## Format

Each task includes:
- **Dependencies**: Task IDs that must be completed first
- **Expected Output**: Concrete artifact(s) produced
- **Validation Checklist**: Verifiable completion checks

---

## Phase 1: Project Setup And Architecture

### [X] T001 [US1] Initialize TypeScript React project baseline and dependency stack
- **Dependencies**: None
- **Expected Output**: `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.ts`, base scripts for `dev/build/test/lint/typecheck`
- **Validation Checklist**:
  - [ ] Dependency install completes without errors
  - [ ] `npm run dev` starts successfully
  - [ ] `npm run typecheck` and `npm run build` execute successfully

### [X] T002 [US1] Create modular source architecture per plan
- **Dependencies**: T001
- **Expected Output**: `src/app`, `src/components`, `src/sections`, `src/translations`, `src/data`, `src/hooks`, `src/types`, `src/lib`, `src/styles`, `tests/*`
- **Validation Checklist**:
  - [ ] Folder layout matches `plan.md` structure
  - [ ] No required directory from architecture is missing
  - [ ] Import paths resolve for scaffolded entry files

### [X] T003 [P] [US1] Configure code quality and test tooling
- **Dependencies**: T001
- **Expected Output**: ESLint/Prettier configs, Vitest setup, React Testing Library setup, accessibility test utilities
- **Validation Checklist**:
  - [ ] `npm run lint` executes and reports expected status
  - [ ] `npm run test` runs baseline test suite
  - [ ] Test environment supports DOM-based component tests

### [X] T004 [US1] Implement core providers and app shell wiring
- **Dependencies**: T002, T003
- **Expected Output**: `src/app/main.tsx`, `src/app/App.tsx`, provider composition skeleton in `src/app/providers/`
- **Validation Checklist**:
  - [ ] App renders through a single provider tree
  - [ ] No runtime errors on first load
  - [ ] Base layout container is ready for sections

**Phase 1 Checkpoint**: Architecture foundation is ready for feature implementation.

---

## Phase 2: Layout And Navigation

### [X] T005 [US1] Build main layout structure and shared section wrapper
- **Dependencies**: T004
- **Expected Output**: `src/app/layout/MainLayout.tsx`, `src/components/shared/SectionContainer.tsx`
- **Validation Checklist**:
  - [ ] Page uses consistent spacing and section rhythm
  - [ ] Section container supports reusable title/body layout
  - [ ] Layout remains stable across viewport sizes

### [X] T006 [US1] Implement header navigation with anchors to required sections
- **Dependencies**: T005
- **Expected Output**: `src/app/layout/Header.tsx`, `src/components/navigation/NavLinks.tsx`
- **Validation Checklist**:
  - [ ] Navigation links map to Hero/About/Skills/Projects/Contact
  - [ ] Keyboard navigation reaches all nav actions
  - [ ] Active/hover/focus states are visible in both themes

### [X] T007 [P] [US1] Add footer and global metadata placeholders
- **Dependencies**: T005
- **Expected Output**: `src/app/layout/Footer.tsx`, SEO defaults in app metadata/bootstrap
- **Validation Checklist**:
  - [ ] Footer renders consistently on all screen sizes
  - [ ] Metadata placeholders exist for title/description/open graph
  - [ ] No duplicate landmark conflicts

**Phase 2 Checkpoint**: Core page skeleton and navigation are fully functional.

---

## Phase 3: Hero + About + Skills

### [X] T008 [US1] Create typed portfolio profile and skills data models
- **Dependencies**: T002
- **Expected Output**: `src/types/content.ts`, `src/types/project.ts`, `src/data/profile.ts`, `src/data/skills.ts`
- **Validation Checklist**:
  - [ ] Types align with `data-model.md`
  - [ ] Required profile/skills fields are present
  - [ ] Data modules export predictable typed structures

### [X] T009 [US1] Implement Hero section with CTA
- **Dependencies**: T005, T008
- **Expected Output**: `src/sections/Hero/HeroSection.tsx`
- **Validation Checklist**:
  - [ ] Owner name and role are clearly visible
  - [ ] Primary CTA is visible and usable
  - [ ] Hero content remains readable on mobile and desktop

### [X] T010 [US1] Implement About section
- **Dependencies**: T005, T008
- **Expected Output**: `src/sections/About/AboutSection.tsx`
- **Validation Checklist**:
  - [ ] About text is concise and scannable
  - [ ] Typography hierarchy is clear
  - [ ] Section spacing is consistent with design system

### [X] T011 [US1] Implement Skills section with grouped categories
- **Dependencies**: T005, T008
- **Expected Output**: `src/sections/Skills/SkillsSection.tsx`, optional `src/components/shared/SkillBadge.tsx`
- **Validation Checklist**:
  - [ ] Skills are grouped by category
  - [ ] Each category displays at least one item
  - [ ] Skills section is scannable across breakpoints

**Phase 3 Checkpoint**: Recruiters can assess core profile, about, and skill strengths.

---

## Phase 4: Projects Section

### [X] T012 [US1] Add typed projects dataset for required 4 projects
- **Dependencies**: T008
- **Expected Output**: `src/data/projects.ts` containing GROW App, E-commerce App, CRUD and DOM, Filter App
- **Validation Checklist**:
  - [ ] Exactly 4 required projects are present
  - [ ] Project schema matches `ProjectItem` contract
  - [ ] Each project has localized summary-ready structure

### [X] T013 [US1] Create reusable project card component
- **Dependencies**: T012
- **Expected Output**: `src/components/shared/ProjectCard.tsx`
- **Validation Checklist**:
  - [ ] Card displays title and summary clearly
  - [ ] Optional repo/live links render safely when available
  - [ ] Focus and hover states are accessible

### [X] T014 [US1] Implement Projects section layout and mapping
- **Dependencies**: T005, T012, T013
- **Expected Output**: `src/sections/Projects/ProjectsSection.tsx`
- **Validation Checklist**:
  - [ ] All 4 projects render in correct order
  - [ ] Grid adapts across responsive breakpoints
  - [ ] Section supports future project expansion

**Phase 4 Checkpoint**: Portfolio project showcase is complete and navigable.

---

## Phase 5: Contact Form With Formspree

### [X] T015 [US1] Implement contact form schema and form hook
- **Dependencies**: T002, T003
- **Expected Output**: `src/types/form.ts`, `src/lib/validation.ts`, `src/hooks/useContactForm.ts`
- **Validation Checklist**:
  - [ ] Validation rules match `contact-form-contract.md`
  - [ ] Form status model supports `idle/validating/submitting/success/error`
  - [ ] Validation errors are field-specific

### [X] T016 [US1] Build contact form UI components and section
- **Dependencies**: T005, T015
- **Expected Output**: `src/components/forms/InputField.tsx`, `src/components/forms/TextAreaField.tsx`, `src/sections/Contact/ContactSection.tsx`
- **Validation Checklist**:
  - [ ] Name, email, message fields render with labels
  - [ ] Submit action triggers validation flow
  - [ ] Error messages are visible and accessible

### [X] T017 [US1] Integrate Formspree submission flow and environment config
- **Dependencies**: T016
- **Expected Output**: Form submit integration in `useContactForm`, endpoint config via environment variable
- **Validation Checklist**:
  - [ ] Loading state disables repeated submit
  - [ ] Success state confirms submission and reset behavior
  - [ ] Failure state preserves input and enables retry

### [X] T018 [P] [US1] Add contact form tests (validation and submit states)
- **Dependencies**: T017
- **Expected Output**: `tests/component/contact-form.test.tsx`, `tests/integration/contact-submit-flow.test.ts`
- **Validation Checklist**:
  - [ ] Invalid input test fails before passing after implementation
  - [ ] Success path and error path are both covered
  - [ ] Accessibility assertions include labels and feedback announcements

**Phase 5 Checkpoint**: Contact flow is production-ready with validation and Formspree lifecycle states.

---

## Phase 6: Dark/Light Mode

### [X] T019 [US3] Implement ThemeProvider and theme persistence hook
- **Dependencies**: T004
- **Expected Output**: `src/app/providers/ThemeProvider.tsx`, `src/hooks/useTheme.ts`, theme tokens in `src/styles/tokens.css`
- **Validation Checklist**:
  - [ ] Theme initializes from persisted value or system preference
  - [ ] Theme updates root class/data attribute
  - [ ] No flash of incorrect theme on initial load

### [X] T020 [US3] Create reusable theme toggle component and header integration
- **Dependencies**: T006, T019
- **Expected Output**: `src/components/ui/ThemeToggle.tsx` wired in header
- **Validation Checklist**:
  - [ ] Toggle is keyboard operable
  - [ ] Toggle state reflects active theme
  - [ ] Theme change affects all major sections consistently

### [X] T021 [US3] Validate contrast and state visibility in both themes
- **Dependencies**: T020
- **Expected Output**: Adjusted style variants in shared components and sections
- **Validation Checklist**:
  - [ ] Text and interactive contrast are readable in light/dark
  - [ ] Hover/focus/loading/success/error states remain distinguishable
  - [ ] No section has unreadable color combinations

**Phase 6 Checkpoint**: Full site supports accessible light and dark themes.

---

## Phase 7: Arabic And English Language Switching

### [X] T022 [US2] Implement localization schema, dictionaries, and i18n bootstrap
- **Dependencies**: T002
- **Expected Output**: `src/translations/schema.ts`, `src/translations/en/*`, `src/translations/ar/*`, `src/translations/index.ts`
- **Validation Checklist**:
  - [ ] Required namespaces from localization contract are present
  - [ ] Key parity is enforced across `en` and `ar`
  - [ ] No user-facing copy remains hardcoded in UI

### [X] T023 [US2] Implement LocaleProvider, direction handling, and language persistence
- **Dependencies**: T004, T022
- **Expected Output**: `src/app/providers/LocaleProvider.tsx`, `src/hooks/useLocale.ts`, `src/hooks/useDirection.ts`
- **Validation Checklist**:
  - [ ] Language changes update `lang` and `dir`
  - [ ] Arabic sets RTL, English sets LTR
  - [ ] Selected language persists during session reload

### [X] T024 [US2] Build language switcher and wire localized content across sections
- **Dependencies**: T006, T009, T010, T011, T014, T016, T023
- **Expected Output**: `src/components/ui/LanguageSwitcher.tsx` and localization usage in all sections
- **Validation Checklist**:
  - [ ] All required sections update text between English/Arabic
  - [ ] Contact labels, validation, and success/error messages are localized
  - [ ] Layout alignment remains correct in both directions

### [X] T025 [US2] Add localization and RTL regression tests
- **Dependencies**: T024
- **Expected Output**: `tests/integration/i18n-rtl-switch.test.ts`
- **Validation Checklist**:
  - [ ] Tests verify key section labels in both locales
  - [ ] Tests verify direction switch logic
  - [ ] Tests cover language switching while form has entered input

**Phase 7 Checkpoint**: Bilingual and RTL/LTR behavior is complete and verified.

---

## Phase 8: Animations And Responsiveness

### [X] T026 [US3] Implement shared motion presets with reduced-motion support
- **Dependencies**: T004
- **Expected Output**: `src/lib/motion.ts` with reusable variants and reduced-motion guards
- **Validation Checklist**:
  - [ ] Motion presets are reusable by multiple sections
  - [ ] Reduced-motion path avoids disorienting animation
  - [ ] Animation timing is consistent across components

### [X] T027 [US3] Apply Framer Motion to sections and key micro-interactions
- **Dependencies**: T026, T009, T010, T011, T014, T016
- **Expected Output**: Animated section wrappers and micro-interactions in key UI elements
- **Validation Checklist**:
  - [ ] Entrance animations do not block content readability
  - [ ] Motion remains smooth under normal usage
  - [ ] Interaction animations are subtle and consistent

### [X] T028 [US3] Complete responsive behavior across breakpoints
- **Dependencies**: T005, T014, T016, T027
- **Expected Output**: Breakpoint-optimized layouts in all sections and nav
- **Validation Checklist**:
  - [ ] Mobile/tablet/desktop layouts are usable and visually coherent
  - [ ] No unintended horizontal scrolling appears
  - [ ] Navigation, theme toggle, language switch, and contact submission remain usable on all viewports

### [X] T029 [US3] Add responsiveness and motion tests/smoke checks
- **Dependencies**: T028
- **Expected Output**: `tests/integration/responsive-smoke.test.ts`, optional motion behavior checks
- **Validation Checklist**:
  - [ ] Viewport smoke checks pass for representative sizes
  - [ ] Key actions remain functional across breakpoints
  - [ ] Reduced-motion behavior is verified

**Phase 8 Checkpoint**: Responsive and motion requirements are satisfied across devices.

---

## Phase 9: Final Optimization And Cleanup

### [X] T030 [US1] Run performance and bundle optimization pass
- **Dependencies**: T029
- **Expected Output**: Optimized assets, lazy strategy decisions, and cleaned imports
- **Validation Checklist**:
  - [ ] Primary content remains usable within target load goal
  - [ ] No avoidable large/unused dependencies remain
  - [ ] Critical rendering path is reviewed

### [X] T031 [US1] Execute full accessibility and keyboard audit
- **Dependencies**: T029
- **Expected Output**: Accessibility fixes across components/sections and updated test assertions
- **Validation Checklist**:
  - [ ] Keyboard navigation reaches all interactive controls
  - [ ] Focus states are visible and logical
  - [ ] Form feedback and status announcements are accessible

### [X] T032 [US1] Complete deployment readiness checklist and production verification
- **Dependencies**: T030, T031
- **Expected Output**: Verified environment setup, passing build/test/lint/typecheck, deployment smoke results
- **Validation Checklist**:
  - [ ] Environment variables are configured and validated
  - [ ] `typecheck`, `lint`, `test`, and `build` pass
  - [ ] Smoke flow passes: load page, switch language, toggle theme, submit contact form, verify responsive layout

### [X] T033 [US1] Documentation cleanup and final handoff notes
- **Dependencies**: T032
- **Expected Output**: Updated docs in `quickstart.md` and project README summary for maintenance
- **Validation Checklist**:
  - [ ] Setup and run instructions are current
  - [ ] Feature coverage and known limitations are documented
  - [ ] Handoff notes are clear for future iterations

**Phase 9 Checkpoint**: Portfolio is production-ready and documented.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1** -> required before all later phases.
- **Phase 2** -> depends on Phase 1.
- **Phase 3** -> depends on Phase 2.
- **Phase 4** -> depends on Phase 3 data/model baseline.
- **Phase 5** -> depends on Phase 2 layout + Phase 1 tooling.
- **Phase 6** -> depends on Phase 2 header + Phase 1 providers.
- **Phase 7** -> depends on Phase 2 header + content phases (3,4,5) for full localization coverage.
- **Phase 8** -> depends on sections implemented in phases 3-7.
- **Phase 9** -> depends on completion of all prior phases.

### Critical Path

`T001 -> T002 -> T004 -> T005 -> T006 -> T008 -> T009 -> T012 -> T014 -> T016 -> T017 -> T019 -> T020 -> T022 -> T023 -> T024 -> T026 -> T027 -> T028 -> T030 -> T032 -> T033`

### Parallel Opportunities

- T003 can run in parallel with T002 after T001.
- T007 can run in parallel with T006 after T005.
- T009, T010, and T011 can proceed in parallel after T008 + T005.
- T030 and T031 can run in parallel after T029.

---

## Coverage Check

- Required sections covered: Hero, About, Skills, Projects, Contact.
- Formspree flow covered: validation, loading, success, error, retry.
- Theme covered: persistence, toggle UI, contrast verification.
- Language covered: EN/AR dictionaries, switcher, RTL/LTR direction.
- Animation + responsive behavior covered with testing checkpoints.
- Final deployment readiness and cleanup included.
