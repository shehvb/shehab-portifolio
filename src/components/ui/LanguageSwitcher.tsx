import { motion } from "framer-motion";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { Locale } from "types/state";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocaleContext();
  const changeLocale = (next: Locale) => setLocale(next);

  const options: { label: string; value: Locale }[] = [
    { label: "EN", value: "en" },
    { label: "AR", value: "ar" },
  ];

  return (
    <div className="relative flex items-center rounded-full bg-slate-100 p-1 dark:bg-slate-800">
      {options.map((option) => {
        const isActive = locale === option.value;
        return (
          <button
            key={option.value}
            onClick={() => changeLocale(option.value)}
            className={`relative flex h-8 w-12 items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none z-10 ${
              isActive
                ? "text-white"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            }`}
            aria-label={`Change language to ${option.label}`}
          >
            {isActive && (
              <motion.div
                layoutId="active-lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-brand-600 shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
