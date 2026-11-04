import { ArrowDown, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-solutions.jpg";
import { LLink } from "@/components/link";
import { Benefits, ContactBand, HowItWorks, Scope, ServiceGrid } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { positioning } from "@/content";

export function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={hero} alt="" aria-hidden="true" fetchPriority="high" />
        <div className="wrap hero-inner reveal">
          <p className="eyebrow text-primary-foreground/75">by INDIGO GROUP</p>
          <h1>BUSINESS<br />SOLUTIONS<span className="block w-16 h-px bg-ice mt-8" /></h1>
          <p className="hero-slogan">{t("Ένας συνομιλητής.", "One counterpart.")}<br />{t("Κάθε επιχειρηματική ανάγκη.", "Every business need.")}</p>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-primary-foreground/80 max-w-md">
            {t("Η INDIGO συντονίζει τους κατάλληλους εξωτερικούς ειδικούς συνεργάτες — εσείς έχετε ένα σημείο επαφής.", "INDIGO coordinates the right external specialist partners — you have one point of contact.")}
          </p>
          <div className="flex flex-wrap gap-3 mt-9">
            <LLink to="/services" className="btn btn-hero btn-lg">{t("Οι υπηρεσίες μας", "Our services")}<ArrowUpRight /></LLink>
            <LLink to="/approach" className="btn btn-lg border border-primary-foreground/50 hover:bg-primary-foreground/10">{t("Πώς δουλεύουμε", "How we work")}</LLink>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <span className="eyebrow text-primary-foreground/70">ADVISORY · OPERATIONS · CONTRACTS · BUSINESS DEVELOPMENT</span>
          <a href="#about" aria-label={t("Συνέχεια", "Continue")} className="flex h-10 w-10 border border-primary-foreground/40 items-center justify-center"><ArrowDown size={18} /></a>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <p className="eyebrow text-muted-foreground pt-3">Business Solutions Partner</p>
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
              <h2 className="section-title max-w-2xl">{t("Όλες οι επιχειρηματικές ανάγκες, εκτός ρούχων και τεχνολογίας.", "Every business need, except clothing and technology.")}</h2>
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
