import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import type { Lang } from "./content";

const KEY = "bs-indigo-lang";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (el: string, en: string) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useSearchParams();
  const fromUrl = params.get("lang");
  const [lang, setLangState] = useState<Lang>(() => {
    if (fromUrl === "el" || fromUrl === "en") return fromUrl;
    try { const s = localStorage.getItem(KEY); if (s === "el" || s === "en") return s; } catch { /* ignore */ }
    return "el";
  });

  useEffect(() => {
    if ((fromUrl === "el" || fromUrl === "en") && fromUrl !== lang) setLangState(fromUrl);
  }, [fromUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    const next = new URLSearchParams(params);
    next.set("lang", l);
    setParams(next, { replace: true });
  };

  return <LangContext.Provider value={{ lang, setLang, t: (el, en) => (lang === "el" ? el : en) }}>{children}</LangContext.Provider>;
}

export function useLanguage() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLanguage outside provider");
  return c;
}
