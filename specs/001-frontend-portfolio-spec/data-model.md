# Data Model - Frontend Portfolio Website

## Entity: PortfolioProfile

**Purpose**: Core owner identity and summary content for Hero/About sections.

**Fields**:
- `fullName: string` (required, non-empty)
- `roleTitle: string` (required, non-empty)
- `heroHeadline: LocalizedText` (required)
- `heroSubheadline: LocalizedText` (required)
- `aboutSummary: LocalizedText` (required)
- `ctaLabel: LocalizedText` (required)

**Validation Rules**:
- All text fields must exist in both English and Arabic.
- `fullName` and `roleTitle` cannot exceed display-safe lengths defined by UI constraints.

## Entity: SkillCategory

**Purpose**: Group technical skills for structured Skills section rendering.

**Fields**:
- `id: string` (required, unique)
- `title: LocalizedText` (required)
- `items: SkillItem[]` (required, min 1)
- `order: number` (required)

**Nested SkillItem**:
- `name: string` (required)
- `levelLabel: LocalizedText` (optional)
- `iconKey: string` (optional)

**Validation Rules**:
- `id` must be unique across categories.
- `items` must be non-empty.

## Entity: ProjectItem

**Purpose**: Represents each showcased project card and detail content.

**Fields**:
- `id: string` (required, unique)
- `title: string` (required)
- `summary: LocalizedText` (required)
- `techStack: string[]` (optional)
- `repoUrl: string` (optional)
- `liveUrl: string` (optional)
- `imageAlt: LocalizedText` (required if image is present)
- `order: number` (required)

**Validation Rules**:
- Must include exactly 4 ordered records for v1: GROW App, E-commerce App, CRUD and DOM, Filter App.
- At least one of `repoUrl` or `liveUrl` should exist when available.

## Entity: LocalizedContentSet

**Purpose**: Typed translation resources for all user-facing copy.

**Fields**:
- `locale: "en" | "ar"` (required)
- `direction: "ltr" | "rtl"` (required, locale-dependent)
- `messages: Record<string, string>` (required)

**Validation Rules**:
- English locale must map to `ltr`; Arabic locale must map to `rtl`.
- Keys must be complete and consistent across both locales.

## Entity: ThemePreference

**Purpose**: Visitor-selected visual theme state.

**Fields**:
- `value: "light" | "dark" | "system"` (required)
- `resolvedValue: "light" | "dark"` (derived at runtime)
- `source: "persisted" | "system-default"` (required)

**Validation Rules**:
- `resolvedValue` must always be set before UI render completion.

## Entity: ContactSubmission

**Purpose**: Contact form input and submission lifecycle state.

**Fields**:
- `name: string` (required)
- `email: string` (required)
- `message: string` (required)
- `status: "idle" | "validating" | "submitting" | "success" | "error"` (required)
- `errorMessage: string | null` (optional)
- `submittedAt: string | null` (optional, timestamp)

**Validation Rules**:
- `name`, `email`, and `message` required before submit.
- `email` must conform to valid email format.
- `message` must satisfy minimum and maximum length boundaries.

## Relationships

- `PortfolioProfile` references `LocalizedContentSet` for multilingual copy.
- `SkillCategory` and `ProjectItem` depend on locale-aware labels/summaries from localized content.
- `ContactSubmission` uses locale content for validation and feedback messages.
- `ThemePreference` and locale direction jointly influence visual rendering behavior.

## State Transitions

### ContactSubmission Status

1. `idle` -> `validating` when submit is triggered.
2. `validating` -> `submitting` when client validation passes.
3. `validating` -> `error` when validation fails.
4. `submitting` -> `success` when Formspree response is successful.
5. `submitting` -> `error` when network/service failure occurs.
6. `error` -> `validating` on retry.
7. `success` -> `idle` when user starts a new submission.

### ThemePreference Resolution

1. Initial state resolves from persisted value or system default.
2. User toggle updates `value` and recalculates `resolvedValue`.
3. Persisted preference is re-applied on next session.

### Locale Direction Resolution

1. Initial locale chosen from persisted setting or default.
2. Locale switch updates direction and document attributes (`lang`, `dir`).
3. All section and form text rerender from selected locale dictionary.
