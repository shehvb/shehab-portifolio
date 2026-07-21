# Component Contracts

## Purpose

Define stable contracts for reusable UI and section-level components to enforce consistency, accessibility, and maintainability.

## Base Conventions

- All components use TypeScript interfaces for props.
- All interactive components must expose accessible labels and keyboard support.
- All visual variants use controlled variant props (no arbitrary style flags).
- Components accept localized strings from translation layer, not hardcoded copy.

## Shared UI Primitives

### `Button`

**Props Contract**:
- `variant`: `"primary" | "secondary" | "ghost"`
- `size`: `"sm" | "md" | "lg"`
- `loading?`: `boolean`
- `disabled?`: `boolean`
- `onClick?`: `() => void`
- `type?`: `"button" | "submit" | "reset"`
- `children`: `ReactNode`

**Behavior Contract**:
- Must render focus-visible styles.
- Must render loading state without layout shift.

### `SectionHeading`

**Props Contract**:
- `title`: `string`
- `subtitle?`: `string`
- `align?`: `"start" | "center"`

**Behavior Contract**:
- Semantic heading level selected by section context.
- Supports LTR and RTL text alignment rules.

### `Card`

**Props Contract**:
- `children`: `ReactNode`
- `interactive?`: `boolean`
- `as?`: semantic wrapper element

**Behavior Contract**:
- Optional hover interactions must be disabled for reduced-motion preference where appropriate.

## Feature Components

### `ProjectCard`

**Props Contract**:
- `project`: `ProjectItem`
- `locale`: `"en" | "ar"`
- `onOpenDetails?`: `(id: string) => void`

**Behavior Contract**:
- Must display project title and localized summary.
- Must expose clear affordances for repository/live links when available.

### `ContactForm`

**Props Contract**:
- `locale`: `"en" | "ar"`
- `onSubmit`: `(payload: ContactPayload) => Promise<ContactResult>`

**Behavior Contract**:
- Must show idle/loading/success/error states.
- Must show localized validation messages for invalid input.

## Global Providers

### `ThemeProvider`

**Value Contract**:
- `theme`: `"light" | "dark" | "system"`
- `resolvedTheme`: `"light" | "dark"`
- `setTheme`: `(theme: ThemeValue) => void`

### `LocaleProvider`

**Value Contract**:
- `locale`: `"en" | "ar"`
- `direction`: `"ltr" | "rtl"`
- `setLocale`: `(locale: LocaleValue) => void`
- `t`: `(key: TranslationKey) => string`
