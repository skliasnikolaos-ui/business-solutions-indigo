import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n";
import { serviceAliases, services } from "@/content";

/** The live address of the site. Change it here if the domain ever changes. */
export const SITE_URL = "https://www.i-s-o.gr";
const BRAND = "ISO — INDIGO Strategy & Operations";

const pages: Record<string, { el: string; en: string; dEl: string; dEn: string }> = {
  "/": {
    el: BRAND, en: BRAND,
    dEl: "Συμβουλευτική, στρατηγική και λειτουργίες για επιχειρήσεις — με έναν συνομιλητή.",
    dEn: "Advisory, strategy and operations for businesses — with one counterpart.",
  },
  "/services": {
    el: "Υπηρεσίες", en: "Services",
    dEl: "Στρατηγική: συμβουλευτική και επιχειρηματική ανάπτυξη. Λειτουργίες: οργάνωση λειτουργιών, συμβάσεις και διαμεσολάβηση.",
    dEn: "Strategy: advisory and business development. Operations: operational organisation, contracts and intermediation.",
  },
  "/approach": {
    el: "Πώς δουλεύουμε", en: "How we work",
    dEl: "Ένας συνομιλητής, συντονισμός των κατάλληλων εξωτερικών ειδικών συνεργατών και μία χρέωση στον πελάτη.",
    dEn: "One counterpart, coordination of the right external specialist partners and a single charge to the client.",
  },
  "/about": {
    el: "Ποιοι είμαστε", en: "About",
    dEl: "Η ISO — INDIGO Strategy & Operations είναι ο Business Solutions Partner της INDIGO για στρατηγική και λειτουργίες.",
    dEn: "ISO — INDIGO Strategy & Operations is INDIGO's Business Solutions Partner for strategy and operations.",
  },
  "/contact": {
    el: "Επικοινωνία", en: "Contact",
    dEl: "Επικοινωνήστε με την ISO — INDIGO Strategy & Operations, Λεωφ. Δημ. Αγγέλου Μεταξά 27–29, Γλυφάδα.",
    dEn: "Contact ISO — INDIGO Strategy & Operations, 27–29 Dim. Angelou Metaxa Ave, Glyfada.",
  },
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps the page title, description, canonical URL and social tags in step with the current page. */
export function useSeo() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    let title = BRAND;
    let description = pages["/"][lang === "el" ? "dEl" : "dEn"];
    let path = pathname.replace(/\/+$/, "") || "/";

    const svc = path.match(/^\/services\/([^/]+)$/);
    if (svc) {
      const slug = serviceAliases[svc[1]] ?? svc[1];
      const s = services.find((x) => x.slug === slug);
      if (s) {
        title = `${s.name} | ${BRAND}`;
        description = lang === "el" ? s.short.el : s.short.en;
        path = `/services/${s.slug}`;
      }
    } else if (pages[path] && path !== "/") {
      const p = pages[path];
      title = `${lang === "el" ? p.el : p.en} | ${BRAND}`;
      description = lang === "el" ? p.dEl : p.dEn;
    }

    const url = SITE_URL + (path === "/" ? "/" : path) + (lang === "en" ? "?lang=en" : "");
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:locale"]', "content", lang === "el" ? "el_GR" : "en_GB");
    setMeta('link[rel="canonical"]', "href", url);
  }, [pathname, lang]);
}
