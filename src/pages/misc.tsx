import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Smartphone, User } from "lucide-react";
import { LLink } from "@/components/link";
import { Benefits, ContactBand, HowItWorks, PageIntro, Scope } from "@/components/blocks";
import { useLanguage } from "@/i18n";
import { contact, links, positioning, services } from "@/content";

export function ApproachPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Πώς δουλεύουμε", "How we work")} title={t("Ένας συνομιλητής. Οι κατάλληλοι ειδικοί.", "One counterpart. The right specialists.")} description={t("Ο πελάτης έχει έναν συνομιλητή, την INDIGO. Η INDIGO συντονίζει τους κατάλληλους εξωτερικούς ειδικούς συνεργάτες, οι συνεργάτες τιμολογούν την INDIGO και η INDIGO χρεώνει τον πελάτη.", "The client has one counterpart, INDIGO. INDIGO coordinates the appropriate external specialist partners, the partners invoice INDIGO and INDIGO charges the client.")} />
      <HowItWorks />
      <Benefits />
      <Scope />
      <ContactBand />
    </>
  );
}

export function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("Ποιοι είμαστε", "About")} title="ISO — INDIGO Strategy & Operations" description={t("Ο Business Solutions Partner της INDIGO για στρατηγική και λειτουργίες.", "INDIGO's Business Solutions Partner for strategy and operations.")} />
      <section className="section">
        <div className="wrap grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <p className="copy">{t(positioning.body.el, positioning.body.en)}</p>
            <p className="copy mt-6">{t("Στη στρατηγική καλύπτουμε επιχειρηματική συμβουλευτική και επιχειρηματική ανάπτυξη. Στις λειτουργίες καλύπτουμε οργάνωση λειτουργιών, εμπορικές συστάσεις, διαμεσολάβηση και αναζήτηση συμβάσεων, καθώς και κάθε άλλη επιχειρηματική ανάγκη.", "In strategy, we cover business advisory and business development. In operations, we cover operational organisation, commercial introductions, intermediation and contract sourcing, as well as any other business need.")}</p>
            <a href={links.group} target="_blank" rel="noreferrer" className="btn btn-outline btn-lg mt-10">{links.groupLabel}<ArrowUpRight /></a>
          </div>
          <div>
            <p className="eyebrow mb-7">{t("Υπηρεσίες", "Services")}</p>
            {services.map((s) => (
              <LLink key={s.slug} to={`/services/${s.slug}`} className="area-row"><span>{s.name}</span><ArrowUpRight size={18} className="text-muted-foreground" /></LLink>
            ))}
          </div>
        </div>
      </section>
      <Scope compact />
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
    const subject = `ISO — ${form.service || t("Αίτημα επικοινωνίας", "Contact request")}`;
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
            <a href={`tel:${contact.mobileHref}`} className="flex gap-4 items-start"><Smartphone size={20} className="mt-1" /><span><span className="eyebrow text-muted-foreground block mb-2">{t("Κινητό", "Mobile")}</span>{contact.mobile}</span></a>
            <a href={contact.mapUrl} target="_blank" rel="noreferrer" className="flex gap-4 items-start"><MapPin size={20} className="mt-1 shrink-0" /><span><span className="eyebrow text-muted-foreground block mb-2">{t("Διεύθυνση", "Address")}</span>{t(contact.address.el, contact.address.en)}</span></a>
            <div className="flex gap-4 items-start"><User size={20} className="mt-1" /><span><span className="eyebrow text-muted-foreground block mb-2">{t("Υπεύθυνος επικοινωνίας", "Contact person")}</span>{t(contact.person, contact.personEn)}<span className="block text-sm text-muted-foreground mt-1">{contact.role}</span></span></div>
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
