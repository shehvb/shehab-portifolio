import { useLocaleContext } from "app/providers/LocaleProvider";
import { useActiveSection } from "hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["hero", "about", "skills", "projects", "contact"] as const;

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { t } = useLocaleContext();
  const activeSection = useActiveSection(sections);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-4 py-3 gap-1">
            {sections.map((section, index) => {
              const isActive = activeSection === section;
              return (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  className={`relative px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-brand-600 dark:text-brand-400 bg-brand-50/80 dark:bg-brand-900/30"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {t(`navigation.${section}`)}
                </motion.a>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
