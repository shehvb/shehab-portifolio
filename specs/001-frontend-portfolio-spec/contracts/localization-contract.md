# Localization Contract

## Scope

Defines the structure and quality requirements for bilingual portfolio content in English and Arabic with RTL support.

## Supported Locales

- `en` -> direction `ltr`
- `ar` -> direction `rtl`

## Translation Resource Schema

Each locale file must include the same key set:

```text
common.*
navigation.*
hero.*
about.*
skills.*
projects.*
contact.*
form.*
feedback.*
```

## Key Completeness Rules

- Every key existing in `en` must exist in `ar`.
- Missing keys must fail localization validation checks.
- Empty string values are considered invalid for production release.

## Directionality Rules

- Locale switch updates document attributes:
  - `lang`: `en` or `ar`
  - `dir`: `ltr` or `rtl`
- Components must inherit direction by default unless explicitly overridden for technical reasons (for example, code snippets or email text).

## Content Formatting Rules

- User-facing text must come from translation files, not inline JSX literals.
- Interpolated values (name, counts) must use translation interpolation mechanism.
- Arabic copy must be reviewed for readability and contextual tone.

## Validation Contract

- Pre-build check validates locale key parity.
- UI smoke test confirms language switch updates:
  - all section headings
  - form labels and validation messages
  - button text
  - success/error feedback
