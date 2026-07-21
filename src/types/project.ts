import { LocalizedText } from "./content";

export interface ProjectItem {
  id: string;
  title: string;
  summary: LocalizedText;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  order: number;
}
