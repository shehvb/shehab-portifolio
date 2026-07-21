import { useEffect, useMemo, useState } from "react";
import { ResolvedTheme, ThemeMode } from "types/state";

const STORAGE_KEY = "portfolio-theme";

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    return saved ?? "dark";
  });

  const resolvedTheme = useMemo<ResolvedTheme>(
    () => (theme === "system" ? getSystemTheme() : theme),
    [theme]
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [theme, resolvedTheme]);

  return { theme, resolvedTheme, setTheme };
};
