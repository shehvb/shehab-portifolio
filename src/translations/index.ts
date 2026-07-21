import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import ar from "./ar";

export const resources = { en: { translation: en }, ar: { translation: ar } };

export const DEFAULT_LOCALE = "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    interpolation: { escapeValue: false },
  });
}

export default i18n;
