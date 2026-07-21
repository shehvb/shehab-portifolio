import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "hooks/useLocale";
import { Locale } from "types/state";

interface LocaleContextValue {
  locale: Locale;
  direction: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const { locale, direction, setLocale } = useLocale();
  return (
    <LocaleContext.Provider value={{ locale, direction, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocaleContext must be used inside LocaleProvider");
  return context;
};
