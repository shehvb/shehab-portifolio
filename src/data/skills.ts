import { SkillCategory } from "types/content";

export const skills: SkillCategory[] = [
  {
    id: "frontend-core",
    order: 1,
    title: { en: "Frontend Core", ar: "أساسيات الواجهة الأمامية" },
    items: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript (ES6+)" }, { name: "TypeScript" }],
  },
  {
    id: "react-ecosystem",
    order: 2,
    title: { en: "React Ecosystem", ar: "بيئة React" },
    items: [{ name: "React" }, { name: "React Hooks" }, { name: "React Router" }, { name: "Redux Toolkit" }],
  },
  {
    id: "ui-tools",
    order: 3,
    title: { en: "UI & Tooling", ar: "الواجهات والأدوات" },
    items: [{ name: "Tailwind CSS" }, { name: "Framer Motion" }, { name: "Git/GitHub" }, { name: "Vite" }],
  },
];
