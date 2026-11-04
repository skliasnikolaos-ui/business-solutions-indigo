import { ArrowUpRight } from "lucide-react";
import { LLink } from "./link";
import { useLanguage } from "@/i18n";
import { services } from "@/content";

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
    <div className="grid md:grid-cols-3 gap-x-8">
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
