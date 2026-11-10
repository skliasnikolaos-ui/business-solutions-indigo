import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Brand, BRAND_NAME } from "./brand";
import { LogoIntro } from "./intro";
import { requestLogoIntro } from "@/lib/intro-trigger";
import { LLink, LNavLink } from "./link";
import { useLanguage } from "@/i18n";
import { contact, links, nav, services } from "@/content";

function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-background focus:p-4">
        {t("Μετάβαση στο περιεχόμενο", "Skip to content")}
      </a>
      <header className="site-header">
        <div className="wrap h-full flex items-center justify-between gap-5">
          <LLink to="/" aria-label={BRAND_NAME} onClick={() => requestLogoIntro()}><Brand /></LLink>
          <nav className="hidden min-[1101px]:flex items-center gap-7" aria-label={t("Κύρια πλοήγηση", "Main navigation")}>
            {nav.slice(1).map((n) => (
              <LNavLink key={n.to} to={n.to} className={({ isActive }) => `nav-link ${isActive || (n.to === "/services" && pathname.startsWith("/services")) ? "active" : ""}`}>
                {t(n.el, n.en)}
              </LNavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2 text-xs">
              <button aria-pressed={lang === "el"} onClick={() => setLang("el")} className={`px-1.5 py-2 ${lang === "el" ? "font-bold" : "text-muted-foreground"}`}>EL</button>
              <span className="text-border">/</span>
              <button aria-pressed={lang === "en"} onClick={() => setLang("en")} className={`px-1.5 py-2 ${lang === "en" ? "font-bold" : "text-muted-foreground"}`}>EN</button>
            </div>
            <LLink to="/contact" className="btn btn-primary hidden md:inline-flex">{t("Επικοινωνία", "Contact")}<ArrowUpRight /></LLink>
            <button className="min-[1101px]:hidden p-2" aria-label={t("Μενού", "Menu")} aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="absolute top-full w-full bg-background border-b border-border px-6 py-4 flex flex-col shadow-sm" aria-label={t("Πλοήγηση κινητού", "Mobile navigation")}>
            {[...nav, { to: "/contact", el: "Επικοινωνία", en: "Contact" }].map((n) => (
              <LLink key={n.to} to={n.to} className="py-3.5 border-b border-border text-sm last:border-0">{t(n.el, n.en)}</LLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer text-primary-foreground">
      <div className="wrap py-16 grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
        <div>
          <Brand inverted />
          <p className="mt-6 text-primary-foreground/75 max-w-sm leading-relaxed">
            {t("Στρατηγική και λειτουργίες. Ένας συνομιλητής.", "Strategy and operations. One counterpart.")}
          </p>
        </div>
        <div>
          <p className="eyebrow text-ice mb-5">{t("Υπηρεσίες", "Services")}</p>
          <div className="grid gap-3 text-sm">
            {services.map((s) => <LLink key={s.slug} to={`/services/${s.slug}`} className="hover:text-ice">{s.name}</LLink>)}
          </div>
        </div>
        <div>
          <p className="eyebrow text-ice mb-5">{t("Η εταιρεία", "Company")}</p>
          <div className="grid gap-3 text-sm">
            {nav.slice(2).map((n) => <LLink key={n.to} to={n.to} className="hover:text-ice">{t(n.el, n.en)}</LLink>)}
            <a href={links.group} target="_blank" rel="noreferrer" className="hover:text-ice inline-flex items-center gap-1.5">INDIGO GROUP <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow text-ice mb-5">{t("Ας μιλήσουμε", "Let's connect")}</p>
          <a className="block mb-4 text-sm" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="block text-sm mb-2" href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          <a className="block text-sm mb-4" href={`tel:${contact.mobileHref}`}>{contact.mobile}</a>
          <a className="block text-sm text-primary-foreground/70 leading-relaxed hover:text-ice" href={contact.mapUrl} target="_blank" rel="noreferrer">{t(contact.address.el, contact.address.en)}</a>
          <LLink to="/contact" className="flex items-center gap-3 mt-5 text-sm">{t("Επικοινωνία", "Contact")}<ArrowRight size={16} /></LLink>
        </div>
      </div>
      <div className="wrap border-t border-primary-foreground/20 py-7 flex flex-wrap justify-between gap-5 text-xs text-primary-foreground/65">
        <p>© {new Date().getFullYear()} ISO — INDIGO Strategy &amp; Operations</p>
        <p>{t("Μέλος της INDIGO GROUP", "A member of INDIGO GROUP")}</p>
      </div>
    </footer>
  );
}

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1"><Outlet /></main>
      <Footer />
      <LogoIntro />
    </div>
  );
}
