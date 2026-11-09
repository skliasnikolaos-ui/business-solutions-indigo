import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { LLink } from "@/components/link";
import { ContactBand, PageIntro, Scope, ServiceGrid } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { limits, pillars, serviceAliases, services } from "@/content";
import { NotFoundPage } from "./misc";

export function ServicesPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Υπηρεσίες", "Services")} title={t("Στρατηγική και λειτουργίες.", "Strategy and operations.")} description={t("Στη στρατηγική: επιχειρηματική συμβουλευτική και ανάπτυξη. Στις λειτουργίες: οργάνωση λειτουργιών, εμπορικές συστάσεις, διαμεσολάβηση και αναζήτηση συμβάσεων — και κάθε άλλη επιχειρηματική ανάγκη, με έναν συνομιλητή.", "In strategy: business advisory and development. In operations: operational organisation, commercial introductions, intermediation and contract sourcing — and any other business need, with one counterpart.")} />
      <section className="section"><div className="wrap"><ServiceGrid /></div></section>
      <Scope />
      <ContactBand />
    </>
  );
}

export function ServicePage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const key = serviceAliases[slug ?? ""] ?? slug;
  const i = services.findIndex((s) => s.slug === key);
  if (i < 0) return <NotFoundPage />;
  const s = services[i];
  return (
    <>
      <div className="wrap pt-8 text-xs text-muted-foreground flex items-center gap-3">
        <LLink to="/services" className="hover:text-foreground">{t("Υπηρεσίες", "Services")}</LLink><span>/</span><span>{s.name}</span>
      </div>
      <PageIntro eyebrow={`${pillars.find((p) => p.id === s.pillar)?.name} / ${s.name}`} title={s.name} description={t(s.short.el, s.short.en)} />
      <section className="section">
        <div className="wrap grid md:grid-cols-[1.2fr_1fr] gap-16">
          <div>
            <p className="copy">{t(s.body.el, s.body.en)}</p>
            <p className="copy mt-6">{t("Ο πελάτης έχει έναν συνομιλητή, την INDIGO. Η INDIGO συντονίζει τους κατάλληλους εξωτερικούς ειδικούς συνεργάτες· οι συνεργάτες τιμολογούν την INDIGO και η INDIGO χρεώνει τον πελάτη.", "The client has one counterpart, INDIGO. INDIGO coordinates the appropriate external specialist partners; the partners invoice INDIGO and INDIGO charges the client.")}</p>
            <LLink to="/contact" className="btn btn-primary btn-lg mt-10">{t("Επικοινωνία", "Contact us")}<ArrowUpRight /></LLink>
            <p className="text-xs text-muted-foreground leading-relaxed mt-10">{limits[lang]}</p>
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
