import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroDesktop from "@/assets/indigo-iso-hero-bg.webp";
import heroMobile from "@/assets/indigo-iso-hero-mobile.webp";
import wordmarkWhite from "@/assets/logo/iso-wordmark-white.svg";
import { LLink } from "@/components/link";
import { Benefits, ContactBand, HowItWorks, Scope, ServiceGrid } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { positioning } from "@/content";

export function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero hero-iso">
        <picture>
          <source media="(max-width: 640px)" srcSet={heroMobile} width={1800} height={1646} />
          <img className="hero-image" src={heroDesktop} width={3072} height={1024} alt="ISO — INDIGO Strategy & Operations" fetchPriority="high" />
        </picture>
        <div className="wrap hero-inner reveal">
          <h1 className="max-sm:sr-only">
            <img src={wordmarkWhite} alt="ISO — INDIGO Strategy & Operations" className="hero-logo" width={184} height={68} />
          </h1>
          <span className="hero-rule max-sm:hidden" aria-hidden="true" />
          <p className="hero-tagline">{t("Συμβουλευτική, στρατηγική και λειτουργίες για επιχειρήσεις.", "Advisory, strategy and operations for businesses.")}</p>
          <div className="flex flex-wrap gap-3 mt-10">
            <LLink to="/services" className="btn btn-hero btn-lg">{t("Οι υπηρεσίες μας", "Our services")}<ArrowUpRight /></LLink>
            <LLink to="/contact" className="btn btn-lg border border-primary-foreground/50 hover:bg-primary-foreground/10">{t("Επικοινωνία", "Contact")}</LLink>
          </div>
        </div>
        <div className="wrap hero-bottom" style={{ justifyContent: "flex-end" }}>
          <a href="#about" aria-label={t("Συνέχεια", "Continue")} className="flex h-10 w-10 border border-primary-foreground/40 items-center justify-center"><ArrowDown size={18} /></a>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <p className="eyebrow text-muted-foreground pt-3">Strategy &amp; Operations</p>
          <div>
            <h2 className="section-title max-w-2xl">{t(positioning.title.el, positioning.title.en)}</h2>
            <p className="copy mt-6">{t(positioning.body.el, positioning.body.en)}</p>
          </div>
        </div>
      </section>

      <section id="services" className="section border-t border-border">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow text-muted-foreground mb-4">{t("Υπηρεσίες που καλύπτουμε", "Services we cover")}</p>
              <h2 className="section-title max-w-2xl">{t("Δύο άξονες. Ένας συνομιλητής.", "Two axes. One counterpart.")}</h2>
            </div>
            <LLink to="/services" className="text-sm flex items-center gap-4 shrink-0">{t("Όλες οι υπηρεσίες", "All services")}<ArrowUpRight size={18} /></LLink>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <HowItWorks />
      <Benefits />
      <Scope />
      <ContactBand />
    </>
  );
}
