import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import company from "@/assets/hero-company.jpg";
import { LLink } from "@/components/link";
import { ContactBand, PageIntro } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { activityNotice, contact, services, steps } from "@/content";

export function ApproachPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Προσέγγιση", "Approach")} title={t("Ένα σημείο επαφής για κάθε ανάγκη.", "One point of contact for every need.")} description={t("Συνδυάζουμε τεχνολογία, υπηρεσίες και επιχειρηματική εμπειρία, απευθείας ή μέσω εξειδικευμένων συνεργατών.", "We combine technology, services and business experience, directly or through specialist partners.")} />
      <section className="section">
        <div className="wrap grid gap-0">
          {steps.map((s, i) => (
            <div key={s.title.en} className="grid md:grid-cols-[120px_1fr_1.4fr] gap-4 md:gap-10 py-10 border-t border-border">
              <span className="eyebrow text-muted-foreground pt-2">0{i + 1}</span>
              <h2 className="text-3xl font-medium">{t(s.title.el, s.title.en)}</h2>
              <p className="copy">{t(s.text.el, s.text.en)}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function AboutPage() {
  const { lang, t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Ποιοι είμαστε", "About")} title="BUSINESS SOLUTIONS by INDIGO GROUP" description={t("Ο Business Solutions Partner της INDIGO GROUP.", "The Business Solutions Partner of INDIGO GROUP.")} />
      <section className="section">
        <div className="wrap grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <p className="copy">{t("Η BUSINESS SOLUTIONS by INDIGO GROUP συγκεντρώνει τις επιχειρηματικές υπηρεσίες της INDIGO GROUP: επιχειρηματική συμβουλευτική και οργάνωση λειτουργιών, εμπορικές συστάσεις και συμβάσεις, καθώς και ολοκληρωμένες λύσεις που συνδυάζουν διαφορετικούς τομείς.", "BUSINESS SOLUTIONS by INDIGO GROUP brings together INDIGO GROUP's business services: business advisory and operations, commercial introductions and contracts, and integrated solutions that combine different sectors.")}</p>
            <p className="copy mt-6">{t("Στόχος μας είναι κάθε επιχείρηση να έχει έναν αξιόπιστο συνεργάτη, που ακούει, προτείνει και υλοποιεί με υπευθυνότητα.", "Our aim is for every business to have one reliable partner that listens, proposes and delivers responsibly.")}</p>
            <div className="mt-10 grid gap-0">
              {services.map((s) => (
                <LLink key={s.slug} to={`/services/${s.slug}`} className="area-row"><span>{s.name}</span><ArrowUpRight size={18} className="text-muted-foreground" /></LLink>
              ))}
            </div>
            <a href={contact.groupUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-lg mt-10">{t("Επισκεφθείτε την INDIGO GROUP", "Visit INDIGO GROUP")}<ArrowUpRight /></a>
            <p className="text-xs text-muted-foreground leading-relaxed mt-10">{activityNotice[lang]}</p>
          </div>
          <img src={company} alt={t("Εννοιολογική εικόνα επιχειρηματικού χώρου", "Conceptual image of a business space")} className="w-full aspect-[4/5] object-cover" loading="lazy" />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = `BUSINESS SOLUTIONS — ${form.service || t("Αίτημα επικοινωνίας", "Contact request")}`;
    const body = `${t("Όνομα", "Name")}: ${form.name}\n${t("Εταιρεία", "Company")}: ${form.company}\nEmail: ${form.email}\n${t("Υπηρεσία", "Service")}: ${form.service}\n\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageIntro eyebrow={t("Επικοινωνία", "Contact")} title={t("Ας μιλήσουμε.", "Let's talk.")} description={t("Πείτε μας για την επιχείρησή σας και θα επικοινωνήσουμε μαζί σας.", "Tell us about your business and we will get back to you.")} />
      <section className="section">
        <div className="wrap grid md:grid-cols-[1fr_1.3fr] gap-16">
          <div className="grid gap-8 content-start">
            <a href={`mailto:${contact.email}`} className="flex gap-4 items-start"><Mail size={20} className="mt-1" /><span><span className="eyebrow text-muted-foreground block mb-2">Email</span>{contact.email}</span></a>
            <a href={`tel:${contact.phoneHref}`} className="flex gap-4 items-start"><Phone size={20} className="mt-1" /><span><span className="eyebrow text-muted-foreground block mb-2">{t("Τηλέφωνο", "Phone")}</span>{contact.phone}</span></a>
            <div className="flex gap-4 items-start"><MapPin size={20} className="mt-1" /><span><span className="eyebrow text-muted-foreground block mb-2">{t("Έδρα", "Location")}</span>{t("Γλυφάδα, Ελλάδα", "Glyfada, Greece")}</span></div>
          </div>
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
            <label className="text-sm">{t("Ονοματεπώνυμο", "Full name")}<input required className="field" value={form.name} onChange={set("name")} autoComplete="name" /></label>
            <label className="text-sm">{t("Εταιρεία", "Company")}<input className="field" value={form.company} onChange={set("company")} autoComplete="organization" /></label>
            <label className="text-sm">Email<input required type="email" className="field" value={form.email} onChange={set("email")} autoComplete="email" /></label>
            <label className="text-sm">{t("Υπηρεσία", "Service")}
              <select className="field" value={form.service} onChange={set("service")}>
                <option value="">{t("Επιλέξτε…", "Select…")}</option>
                {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
              </select>
            </label>
            <label className="text-sm sm:col-span-2">{t("Μήνυμα", "Message")}<textarea required rows={6} className="field resize-y" value={form.message} onChange={set("message")} /></label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn btn-primary btn-lg">{t("Αποστολή", "Send")}<ArrowUpRight /></button>
              <p className="text-xs text-muted-foreground max-w-sm">{t("Η αποστολή ανοίγει το πρόγραμμα email σας με το μήνυμα έτοιμο.", "Sending opens your email app with the message ready.")}</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="page-title">{t("Η σελίδα δεν βρέθηκε.", "Page not found.")}</h1>
        <LLink to="/" className="btn btn-primary mt-4">{t("Αρχική", "Home")}<ArrowUpRight /></LLink>
      </div>
    </section>
  );
}
