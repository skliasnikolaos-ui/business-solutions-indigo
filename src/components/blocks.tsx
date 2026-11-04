import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LLink } from "./link";
import { Mark } from "./brand";
import { useLanguage } from "@/i18n";
import { benefits, exclusions, limits, model, services } from "@/content";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="wrap reveal">
        <p className="eyebrow text-muted-foreground">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  const { t } = useLanguage();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
      {services.map((s, i) => (
        <LLink key={s.slug} to={`/services/${s.slug}`} className="service-card group">
          <span className="eyebrow text-muted-foreground">0{i + 1}</span>
          <h3>{s.name}</h3>
          <p className="text-muted-foreground leading-relaxed">{t(s.short.el, s.short.en)}</p>
          <span className="mt-auto pt-8 flex items-center gap-2 text-sm">
            {t("Περισσότερα", "Learn more")}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </LLink>
      ))}
    </div>
  );
}

function Node({ label, sub, strong = false }: { label: string; sub: string; strong?: boolean }) {
  return (
    <div className={`p-6 sm:p-7 border ${strong ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
      {strong && <Mark className="h-9 w-9 mb-4" />}
      <p className="text-xl font-medium">{label}</p>
      <p className={`mt-2 text-sm leading-relaxed ${strong ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{sub}</p>
    </div>
  );
}

function Flow({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="flex md:flex-col items-center justify-center gap-2 py-3 md:py-0 text-[11px] uppercase tracking-[1.5px] text-muted-foreground text-center">
      <span className="flex items-center gap-2">{top}<ArrowRight size={14} className="rotate-90 md:rotate-0" /></span>
      <span className="flex items-center gap-2"><ArrowRight size={14} className="-rotate-90 md:rotate-180" />{bottom}</span>
    </div>
  );
}

export function ModelDiagram() {
  const { t } = useLanguage();
  return (
    <div className="grid md:grid-cols-[1fr_150px_1.1fr_150px_1fr] items-stretch">
      <Node label={t("Πελάτης", "Client")} sub={t("Ένας συνομιλητής για την ανάγκη του.", "One counterpart for its need.")} />
      <Flow top={t("Ανάγκη", "Need")} bottom={t("Χρέωση INDIGO", "INDIGO charges")} />
      <Node strong label="INDIGO" sub={t("Business Solutions Partner — συντονίζει τους κατάλληλους συνεργάτες.", "Business Solutions Partner — coordinates the right partners.")} />
      <Flow top={t("Συντονισμός", "Coordination")} bottom={t("Τιμολόγηση", "Invoicing")} />
      <Node label={t("Εξωτερικοί ειδικοί συνεργάτες", "External specialist partners")} sub={t("Οι κατάλληλοι ειδικοί για κάθε ανάγκη.", "The right specialists for each need.")} />
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section className="section border-t border-border">
      <div className="wrap">
        <p className="eyebrow text-muted-foreground mb-4">{t("Πώς δουλεύουμε", "How we work")}</p>
        <h2 className="section-title max-w-3xl mb-12">{t("Εσείς μιλάτε με την INDIGO. Η INDIGO συντονίζει τα υπόλοιπα.", "You talk to INDIGO. INDIGO coordinates the rest.")}</h2>
        <ModelDiagram />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 mt-14">
          {model.map((s, i) => (
            <div key={s.title.en} className="border-t border-primary pt-6 pb-8">
              <span className="eyebrow text-muted-foreground">0{i + 1}</span>
              <h3 className="text-xl font-medium mt-5 mb-2">{t(s.title.el, s.title.en)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(s.text.el, s.text.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const { t } = useLanguage();
  return (
    <section className="section border-t border-border">
      <div className="wrap grid md:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <p className="eyebrow text-muted-foreground mb-4">{t("Οφέλη για τον πελάτη", "Client benefits")}</p>
          <h2 className="section-title">{t("Λιγότερος συντονισμός. Περισσότερος χρόνος για την επιχείρησή σας.", "Less coordination. More time for your business.")}</h2>
        </div>
        <div>
          {benefits.map((b) => (
            <div key={b.title.en} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-6 border-t border-border">
              <p className="text-lg font-medium">{t(b.title.el, b.title.en)}</p>
              <p className="text-muted-foreground leading-relaxed">{t(b.text.el, b.text.en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Scope({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLanguage();
  return (
    <section className={compact ? "pb-16" : "section border-t border-border"}>
      <div className="wrap grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow text-muted-foreground mb-5">{t("Τι δεν καλύπτουμε εδώ", "Not covered here")}</p>
          {exclusions.map((e) => (
            <div key={e.name} className="py-5 border-t border-border">
              <p className="font-medium mb-1.5">{e.name}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(e.text.el, e.text.en)}{" "}
                <a href={e.url} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4">{e.label}</a>.
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="eyebrow text-muted-foreground mb-5">{t("Όροι συνεργασίας", "Engagement terms")}</p>
          <p className="text-sm text-muted-foreground leading-relaxed py-5 border-t border-border">{limits[lang]}</p>
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  const { t } = useLanguage();
  return (
    <section className="bg-secondary">
      <div className="wrap py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <p className="eyebrow text-muted-foreground mb-4">{t("Ας συζητήσουμε", "Let's talk")}</p>
          <h2 className="section-title max-w-2xl">{t("Πείτε μας τι χρειάζεται η επιχείρησή σας.", "Tell us what your business needs.")}</h2>
        </div>
        <LLink to="/contact" className="btn btn-primary btn-lg self-start md:self-auto">{t("Επικοινωνία", "Contact us")}<ArrowUpRight /></LLink>
      </div>
    </section>
  );
}
