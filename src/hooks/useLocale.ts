import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Direction, Locale } from "types/state";

const STORAGE_KEY = "portfolio-locale";

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>(
    () => (localStorage.getItem(STORAGE_KEY) as Locale | null) ?? "en"
  );
  const { i18n } = useTranslation();

  const direction: Direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, i18n, locale]);

  return { locale, direction, setLocale };
};
