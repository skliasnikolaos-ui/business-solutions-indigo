import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { LLink } from "@/components/link";
import { ContactBand, PageIntro, ServiceGrid } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { activityNotice, services } from "@/content";
import { NotFoundPage } from "./misc";

export function ServicesPage() {
  const { lang, t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Υπηρεσίες", "Services")} title={t("Ολοκληρωμένες επιχειρηματικές λύσεις.", "Integrated business solutions.")} description={t("Business Advisory & Operations, Contracts και Business Solutions — από έναν συνεργάτη.", "Business Advisory & Operations, Contracts and Business Solutions — from one partner.")} />
      <section className="section">
        <div className="wrap">
          <ServiceGrid />
          <p className="text-xs leading-relaxed text-muted-foreground mt-8 max-w-4xl">{activityNotice[lang]}</p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ServicePage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const i = services.findIndex((s) => s.slug === slug);
  if (i < 0) return <NotFoundPage />;
  const s = services[i];
  return (
    <>
      <div className="wrap pt-8 text-xs text-muted-foreground flex items-center gap-3">
        <LLink to="/services" className="hover:text-foreground">{t("Υπηρεσίες", "Services")}</LLink><span>/</span><span>{s.name}</span>
      </div>
      <PageIntro eyebrow={`0${i + 1} / ${s.name}`} title={s.name} description={t(s.short.el, s.short.en)} />
      <section className="section">
        <div className="wrap grid md:grid-cols-[1.2fr_1fr] gap-16">
          <div>
            <p className="copy">{t(s.body.el, s.body.en)}</p>
            <ul className="mt-10 grid gap-4">
              {s.points.map((p) => (
                <li key={p.en} className="flex gap-4 items-start">
                  <span className="mt-2.5 h-px w-6 bg-primary shrink-0" />
                  <span className="leading-relaxed">{t(p.el, p.en)}</span>
                </li>
              ))}
            </ul>
            <LLink to="/contact" className="btn btn-primary btn-lg mt-10">{t("Ζητήστε συνάντηση", "Request a meeting")}<ArrowUpRight /></LLink>
            <p className="text-xs text-muted-foreground leading-relaxed mt-10">{activityNotice[lang]}</p>
          </div>
          <div>
            <p className="eyebrow mb-7">{t("Τι κάνουμε", "What we do")}</p>
            {s.areas.map((a) => (
              <LLink key={a.en} to="/contact" className="area-row">
                <span>{t(a.el, a.en)}</span><MoveUpRight size={18} className="shrink-0 text-muted-foreground" />
              </LLink>
            ))}
          </div>
        </div>
      </section>
      <div className="wrap pb-10 flex flex-wrap gap-5">
        {services.filter((n) => n.slug !== s.slug).map((n) => (
          <LLink key={n.slug} to={`/services/${n.slug}`} className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">{n.name}</LLink>
        ))}
      </div>
      <ContactBand />
    </>
  );
}
