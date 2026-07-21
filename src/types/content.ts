import { Locale } from "./state";

export type LocalizedText = Record<Locale, string>;

export interface PortfolioProfile {
  fullName: string;
  roleTitle: string;
  heroHeadline: LocalizedText;
  heroSubheadline: LocalizedText;
  aboutSummary: LocalizedText;
  ctaLabel: LocalizedText;
}

export interface SkillItem {
  name: string;
  levelLabel?: LocalizedText;
}

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  items: SkillItem[];
  order: number;
}
