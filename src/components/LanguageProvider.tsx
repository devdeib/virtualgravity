"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { T, type Lang } from "@/lib/dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof T)[Lang];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Restore saved choice after mount (avoids hydration mismatch)
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("vg-lang") : null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  // Keep <html> + storage in sync with the active language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem("vg-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
