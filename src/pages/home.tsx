import { ArrowDown, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-operations.jpg";
import { LLink } from "@/components/link";
import { ContactBand, ServiceGrid } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { activityNotice, steps } from "@/content";

export function HomePage() {
  const { lang, t } = useLanguage();
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={hero} alt={t("Ψηφιακό δίκτυο που ενώνει επιχειρηματικές λειτουργίες — εννοιολογική εικόνα", "Digital network connecting business operations — conceptual image")} fetchPriority="high" />
        <div className="wrap hero-inner reveal">
          <p className="eyebrow text-primary-foreground/75">by INDIGO GROUP</p>
          <h1>
            BUSINESS<br />SOLUTIONS
            <span className="block w-16 h-px bg-ice mt-8" />
          </h1>
          <p className="hero-slogan">{t("Ένας συνεργάτης.", "One partner.")}<br />{t("Κάθε επιχειρηματική λύση.", "Every business solution.")}</p>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-primary-foreground/80 max-w-md">
            {t("Επιχειρηματική καθοδήγηση, συμβάσεις και ολοκληρωμένες λύσεις — με γνώμονα τη διαχρονική αξία.", "Business guidance, contracts and integrated solutions — built for lasting value.")}
          </p>
          <div className="flex flex-wrap gap-3 mt-9">
            <LLink to="/services" className="btn btn-hero btn-lg">{t("Οι υπηρεσίες μας", "Our services")}<ArrowUpRight /></LLink>
            <LLink to="/contact" className="btn btn-lg border border-primary-foreground/50 hover:bg-primary-foreground/10">{t("Επικοινωνία", "Contact")}</LLink>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <span className="eyebrow text-primary-foreground/70">ADVISORY · OPERATIONS · CONTRACTS · BUSINESS SOLUTIONS</span>
          <a href="#services" aria-label={t("Οι υπηρεσίες μας", "Our services")} className="flex h-10 w-10 border border-primary-foreground/40 items-center justify-center"><ArrowDown size={18} /></a>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow text-muted-foreground mb-4">{t("Τι προσφέρουμε", "What we offer")}</p>
              <h2 className="section-title max-w-2xl">{t("Τρεις υπηρεσίες. Ένας συνεργάτης.", "Three services. One partner.")}</h2>
            </div>
            <LLink to="/services" className="text-sm flex items-center gap-4">{t("Όλες οι υπηρεσίες", "All services")}<ArrowUpRight size={18} /></LLink>
          </div>
          <ServiceGrid />
          <p className="text-xs leading-relaxed text-muted-foreground mt-8 max-w-4xl">{activityNotice[lang]}</p>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="wrap">
          <p className="eyebrow text-muted-foreground mb-4">{t("Πώς δουλεύουμε", "How we work")}</p>
          <h2 className="section-title max-w-2xl mb-12">{t("Από την πρώτη συζήτηση έως το αποτέλεσμα.", "From the first conversation to the result.")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {steps.map((s, i) => (
              <div key={s.title.en} className="border-t border-primary pt-6 pb-10">
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                <h3 className="text-2xl font-medium mt-6 mb-3">{t(s.title.el, s.title.en)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(s.text.el, s.text.en)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="wrap grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <p className="eyebrow text-muted-foreground pt-3">{t("Η φιλοσοφία μας", "Our philosophy")}</p>
          <div>
            <h2 className="section-title max-w-2xl">{t("Δημιουργώντας διαχρονική αξία.", "Creating lasting value.")}</h2>
            <p className="copy mt-6">{t("Πιστεύουμε στη δύναμη της σύνθεσης. Στην ποιότητα που αντέχει στον χρόνο, στις σχέσεις που βασίζονται στην εμπιστοσύνη και στις ιδέες που εξελίσσονται με υπευθυνότητα.", "We believe in the power of bringing things together. In quality that lasts, relationships built on trust and ideas developed responsibly.")}</p>
            <LLink to="/about" className="inline-flex items-center gap-3 mt-6 text-sm underline underline-offset-4">{t("Ποιοι είμαστε", "About us")}<ArrowUpRight size={16} /></LLink>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
