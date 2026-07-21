import { motion } from "framer-motion";
import { projects } from "data/projects";
import { SectionContainer } from "components/shared/SectionContainer";
import { SectionHeading } from "components/shared/SectionHeading";
import { ProjectCard } from "components/shared/ProjectCard";
import { staggerParent } from "lib/motion";
import { useLocaleContext } from "app/providers/LocaleProvider";

export const ProjectsSection = () => {
  const { t } = useLocaleContext();
  return (
    <SectionContainer id="projects">
      <SectionHeading title={t("projects.title")} />
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionContainer>
  );
};
