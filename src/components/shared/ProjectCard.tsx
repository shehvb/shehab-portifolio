import { motion } from "framer-motion";
import { sectionVariants } from "lib/motion";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { ProjectItem } from "types/project";

export const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const { locale } = useLocaleContext();
  return (
    <motion.article
      variants={sectionVariants}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.summary[locale]}</p>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{project.techStack.join(" • ")}</p>
    </motion.article>
  );
};
