import { useLocaleContext } from "app/providers/LocaleProvider";
import { useActiveSection } from "hooks/useActiveSection";
import { motion } from "framer-motion";

const sections = ["hero", "about", "skills", "projects", "contact"] as const;

export const NavLinks = () => {
  const { t } = useLocaleContext();
  const activeSection = useActiveSection(sections);

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
      {sections.map((section) => {
        const isActive = activeSection === section;
        return (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive
                ? "text-brand-600 dark:text-brand-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 -z-10 rounded-full bg-brand-50/80 dark:bg-brand-900/30 border border-brand-200/50 dark:border-brand-800/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t(`navigation.${section}`)}</span>
          </a>
        );
      })}
    </nav>
  );
};
