export const translationSchema = [
  "common",
  "navigation",
  "hero",
  "about",
  "skills",
  "projects",
  "contact",
  "form",
  "feedback",
] as const;

export type TranslationNamespace = (typeof translationSchema)[number];
