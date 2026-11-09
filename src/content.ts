export type Lang = "el" | "en";
export type Text = { el: string; en: string };

export type Pillar = "strategy" | "operations";

export type Service = {
  slug: string;
  pillar: Pillar;
  name: string;
  short: Text;
  body: Text;
  areas: Text[];
};

export const links = {
  group: "https://www.indigogroup.com.gr",
  groupLabel: "www.indigogroup.com.gr",
};

export const company = {
  short: "ISO",
  name: "INDIGO Strategy & Operations",
};

export const positioning = {
  title: {
    el: "Από τη στρατηγική στην υλοποίηση — με έναν συνομιλητή.",
    en: "From strategy to execution — with one counterpart.",
  },
  body: {
    el: "Η ISO — INDIGO Strategy & Operations είναι ο Business Solutions Partner της INDIGO. Βοηθά τις επιχειρήσεις σε δύο άξονες: στη στρατηγική, δηλαδή στο πού θέλουν να πάνε, και στις λειτουργίες, δηλαδή στο πώς οργανώνεται η υλοποίηση. Ο πελάτης συνεργάζεται με έναν συνομιλητή — την INDIGO — και η INDIGO συντονίζει τους κατάλληλους εξωτερικούς ειδικούς συνεργάτες για κάθε ανάγκη.",
    en: "ISO — INDIGO Strategy & Operations is INDIGO's Business Solutions Partner. It supports businesses on two axes: strategy, meaning where they want to go, and operations, meaning how execution is organised. The client works with one counterpart — INDIGO — and INDIGO coordinates the appropriate external specialist partners for each need.",
  },
};

export const pillars: { id: Pillar; name: string; title: Text; text: Text }[] = [
  {
    id: "strategy",
    name: "Strategy",
    title: { el: "Στρατηγική", en: "Strategy" },
    text: { el: "Κατανόηση της σημερινής εικόνας, κατεύθυνση και διερεύνηση ανάπτυξης.", en: "Understanding where the business stands, setting direction and exploring growth." },
  },
  {
    id: "operations",
    name: "Operational Organisation",
    title: { el: "Λειτουργίες", en: "Operations" },
    text: { el: "Οργάνωση λειτουργιών, συμβάσεις και συντονισμός των κατάλληλων συνεργατών.", en: "Organising operations, contracts and coordinating the right partners." },
  },
];

export const services: Service[] = [
  {
    slug: "strategy",
    pillar: "strategy",
    name: "Business Strategy & Advisory",
    short: { el: "Επιχειρηματική συμβουλευτική και σχεδιασμός κατεύθυνσης.", en: "Business advisory and shaping direction." },
    body: {
      el: "Επιχειρηματική συμβουλευτική: κατανόηση των προκλήσεων της επιχείρησης, σχεδιασμός κατεύθυνσης και καθορισμός προτεραιοτήτων.",
      en: "Business advisory: understanding the business's challenges, shaping direction and setting priorities.",
    },
    areas: [
      { el: "Επιχειρηματική συμβουλευτική", en: "Business advisory" },
      { el: "Κατεύθυνση και προτεραιότητες", en: "Direction and priorities" },
      { el: "Κατανόηση προκλήσεων", en: "Understanding challenges" },
    ],
  },
  {
    slug: "development",
    pillar: "strategy",
    name: "Business Development",
    short: { el: "Επιχειρηματική ανάπτυξη και διερεύνηση νέων ευκαιριών.", en: "Business development and exploration of new opportunities." },
    body: {
      el: "Υποστηρίζουμε την επιχειρηματική ανάπτυξη: διερεύνηση ευκαιριών, νέων συνεργασιών και κατευθύνσεων ανάπτυξης, με τη συμμετοχή κατάλληλων εξωτερικών ειδικών όπου χρειάζεται.",
      en: "We support business development: exploring opportunities, new partnerships and growth directions, involving appropriate external specialists where needed.",
    },
    areas: [
      { el: "Διερεύνηση ευκαιριών", en: "Opportunity exploration" },
      { el: "Νέες συνεργασίες", en: "New partnerships" },
      { el: "Κατευθύνσεις ανάπτυξης", en: "Growth directions" },
    ],
  },
  {
    slug: "operations",
    pillar: "operations",
    name: "Operational Organisation",
    short: { el: "Οργάνωση και υποστήριξη επιχειρησιακών λειτουργιών.", en: "Organising and supporting business operations." },
    body: {
      el: "Υποστήριξη λειτουργιών: βελτίωση οργάνωσης, ροών εργασίας και συντονισμού, ώστε η στρατηγική να μεταφράζεται σε καθημερινή λειτουργία.",
      en: "Operational support: improving organisation, workflows and coordination, so that strategy translates into day-to-day operations.",
    },
    areas: [
      { el: "Οργάνωση λειτουργιών", en: "Operational organisation" },
      { el: "Ροές εργασίας", en: "Workflows" },
      { el: "Συντονισμός", en: "Coordination" },
    ],
  },
  {
    slug: "contracts",
    pillar: "operations",
    name: "Contracts & Intermediation",
    short: { el: "Εμπορικές συστάσεις, διαμεσολάβηση και αναζήτηση συμβάσεων.", en: "Commercial introductions, intermediation and contract sourcing." },
    body: {
      el: "Διερευνούμε εμπορικές συστάσεις, διαμεσολάβηση και αναζήτηση συμβάσεων, σύμφωνα με την εκάστοτε εφαρμοστέα νομοθεσία. Το αντικείμενο και οι προϋποθέσεις κάθε συνεργασίας επιβεβαιώνονται ξεχωριστά.",
      en: "We explore commercial introductions, intermediation and contract sourcing, subject to applicable law. The scope and conditions of each engagement are confirmed individually.",
    },
    areas: [
      { el: "Εμπορικές συστάσεις", en: "Commercial introductions" },
      { el: "Διαμεσολάβηση", en: "Intermediation" },
      { el: "Αναζήτηση συμβάσεων", en: "Contract sourcing" },
    ],
  },
  {
    slug: "solutions",
    pillar: "operations",
    name: "Business Solutions",
    short: { el: "Οποιαδήποτε άλλη επιχειρηματική ανάγκη, με έναν συνομιλητή.", en: "Any other business need, with one counterpart." },
    body: {
      el: "Για κάθε άλλη επιχειρηματική ανάγκη, η INDIGO εντοπίζει και συντονίζει τους κατάλληλους εξωτερικούς ειδικούς συνεργάτες, ώστε ο πελάτης να έχει έναν μόνο συνομιλητή.",
      en: "For any other business need, INDIGO identifies and coordinates the appropriate external specialist partners, so the client has a single counterpart.",
    },
    areas: [
      { el: "Ένα σημείο επαφής", en: "Single point of contact" },
      { el: "Συντονισμός ειδικών συνεργατών", en: "Coordination of specialist partners" },
      { el: "Ενιαία τιμολόγηση από την INDIGO", en: "Single invoicing by INDIGO" },
    ],
  },
];

/** Old URLs kept working after the services were regrouped. */
export const serviceAliases: Record<string, string> = { advisory: "strategy" };

export const model: { title: Text; text: Text }[] = [
  { title: { el: "Ένας συνομιλητής", en: "One counterpart" }, text: { el: "Ο πελάτης μιλά μόνο με την INDIGO για την ανάγκη του.", en: "The client speaks only with INDIGO about its need." } },
  { title: { el: "Συντονισμός ειδικών", en: "Specialist coordination" }, text: { el: "Η INDIGO συντονίζει τους κατάλληλους εξωτερικούς ειδικούς συνεργάτες.", en: "INDIGO coordinates the appropriate external specialist partners." } },
  { title: { el: "Τιμολόγηση προς INDIGO", en: "Partners invoice INDIGO" }, text: { el: "Οι συνεργάτες τιμολογούν την INDIGO.", en: "The partners invoice INDIGO." } },
  { title: { el: "Μία χρέωση στον πελάτη", en: "One charge to the client" }, text: { el: "Η INDIGO χρεώνει τον πελάτη.", en: "INDIGO charges the client." } },
];

export const benefits: { title: Text; text: Text }[] = [
  { title: { el: "Ένα σημείο επαφής", en: "Single point of contact" }, text: { el: "Ένας συνομιλητής για όλες τις ανάγκες που καλύπτουμε.", en: "One counterpart for every need we cover." } },
  { title: { el: "Εξοικονόμηση χρόνου", en: "Time savings" }, text: { el: "Δεν χρειάζεται να αναζητάτε και να διαχειρίζεστε μόνοι σας πολλούς συνεργάτες.", en: "No need to find and manage multiple providers yourself." } },
  { title: { el: "Απλούστερος συντονισμός", en: "Simpler coordination" }, text: { el: "Η INDIGO συντονίζει τους συνεργάτες και σας ενημερώνει.", en: "INDIGO coordinates the partners and keeps you informed." } },
  { title: { el: "Κατάλληλοι ειδικοί", en: "The right specialists" }, text: { el: "Για κάθε ανάγκη αναζητείται ο κατάλληλος εξωτερικός ειδικός συνεργάτης.", en: "For each need, the appropriate external specialist is sought." } },
  { title: { el: "Ευελιξία", en: "Flexibility" }, text: { el: "Η συνεργασία προσαρμόζεται στην ανάγκη της κάθε επιχείρησης.", en: "Each engagement adapts to the needs of the business." } },
];

export const limits: Text = {
  el: "Το αντικείμενο, η διαθεσιμότητα και οι όροι κάθε συνεργασίας επιβεβαιώνονται κατόπιν επικοινωνίας. Οι υπηρεσίες παρέχονται σύμφωνα με την ισχύουσα νομοθεσία, απευθείας ή μέσω εξειδικευμένων εξωτερικών συνεργατών. Κατ' εξαίρεση, νομικές υπηρεσίες παρέχονται μόνο μέσω εξειδικευμένου εξωτερικού συνεργάτη της εταιρείας μας.",
  en: "The scope, availability and terms of every engagement are confirmed through direct discussion. Services are provided in line with applicable law, directly or through specialised external partners. As an exception, legal services are provided only through a specialised external partner of our company.",
};


export const nav = [
  { to: "/", el: "Αρχική", en: "Home" },
  { to: "/services", el: "Υπηρεσίες", en: "Services" },
  { to: "/approach", el: "Πώς δουλεύουμε", en: "How we work" },
  { to: "/about", el: "Ποιοι είμαστε", en: "About" },
] as const;

export const contact = {
  email: "info@indigogroup.com.gr",
  phone: "210 014 0888",
  phoneHref: "+302100140888",
};
