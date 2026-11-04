import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { LLink } from "@/components/link";
import { ContactBand, PageIntro, Scope, ServiceGrid } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { limits, services } from "@/content";
import { NotFoundPage } from "./misc";

export function ServicesPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Υπηρεσίες", "Services")} title={t("Ένα σημείο επαφής για κάθε επιχειρηματική ανάγκη.", "One point of contact for every business need.")} description={t("Επιχειρηματική συμβουλευτική και οργάνωση λειτουργιών, εμπορικές συστάσεις και διαμεσολάβηση, αναζήτηση συμβάσεων, επιχειρηματική ανάπτυξη — και κάθε άλλη επιχειρηματική ανάγκη.", "Business advisory and operations, commercial introductions and intermediation, contract sourcing, business development — and any other business need.")} />
      <section className="section"><div className="wrap"><ServiceGrid /></div></section>
      <Scope />
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
