import { useMemo } from "react";
import { Locale } from "types/state";

export const useDirection = (locale: Locale) =>
  useMemo(() => (locale === "ar" ? "rtl" : "ltr"), [locale]);
