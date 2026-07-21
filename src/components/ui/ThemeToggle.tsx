import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "app/providers/ThemeProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useThemeContext();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-xl"
        >
          {isDark ? <MdDarkMode /> : <MdLightMode />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
