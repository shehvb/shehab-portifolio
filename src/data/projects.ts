import { ProjectItem } from "types/project";

export const projects: ProjectItem[] = [
  {
    id: "grow-app",
    title: "GROW App",
    summary: {
      en: "A productivity-focused app with clean UX and interactive dashboards.",
      ar: "تطبيق يركز على الإنتاجية مع تجربة استخدام نظيفة ولوحات تفاعلية.",
    },
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    order: 1,
  },
  {
    id: "ecommerce-app",
    title: "E-commerce App",
    summary: {
      en: "A modern storefront with product filters, cart flow, and responsive layout.",
      ar: "متجر حديث مع فلاتر منتجات وتدفق سلة شراء وتصميم متجاوب.",
    },
    techStack: ["React", "Redux Toolkit", "CSS"],
    order: 2,
  },
  {
    id: "crud-dom",
    title: "CRUD and DOM",
    summary: {
      en: "CRUD-focused project showcasing dynamic DOM updates and form interactions.",
      ar: "مشروع CRUD يعرض تحديثات DOM الديناميكية وتفاعلات النماذج.",
    },
    techStack: ["JavaScript", "DOM", "HTML/CSS"],
    order: 3,
  },
  {
    id: "filter-app",
    title: "Filter App",
    summary: {
      en: "Filtering interface with category logic and smooth user interactions.",
      ar: "واجهة فلترة مع منطق تصنيفات وتفاعلات مستخدم سلسة.",
    },
    techStack: ["React", "TypeScript"],
    order: 4,
  },
];
