export type Lang = "el" | "en";
export type Text = { el: string; en: string };

export type Service = {
  slug: string;
  name: string;
  short: Text;
  body: Text;
  areas: { el: string; en: string }[];
  points: Text[];
};

export const services: Service[] = [
  {
    slug: "advisory",
    name: "Business Advisory & Operations",
    short: { el: "Επιχειρηματική καθοδήγηση και οργάνωση λειτουργιών.", en: "Business guidance and operational organisation." },
    body: {
      el: "Επιχειρηματική συμβουλευτική και υποστήριξη λειτουργιών: κατανόηση προκλήσεων, σχεδιασμός κατεύθυνσης και βελτίωση οργάνωσης. Κάθε συνεργασία και η διαθεσιμότητα υπηρεσιών υπόκεινται σε επιβεβαίωση.",
      en: "Business advisory and operational support: understanding challenges, shaping direction and improving organisation. Every engagement and service availability is subject to confirmation.",
    },
    areas: [
      { el: "Επιχειρηματική στρατηγική", en: "Business strategy" },
      { el: "Οργάνωση λειτουργιών", en: "Operations" },
      { el: "Διερεύνηση ανάπτυξης", en: "Growth exploration" },
    ],
    points: [
      { el: "Αποτύπωση της σημερινής εικόνας και των προκλήσεων της επιχείρησης.", en: "Mapping the business's current picture and challenges." },
      { el: "Σχεδιασμός κατεύθυνσης με σαφείς προτεραιότητες.", en: "Shaping direction with clear priorities." },
      { el: "Βελτίωση ροών εργασίας, ρόλων και οργάνωσης.", en: "Improving workflows, roles and organisation." },
    ],
  },
  {
    slug: "contracts",
    name: "Contracts",
    short: { el: "Συνδέοντας ευκαιρίες και επιχειρήσεις.", en: "Connecting opportunities and businesses." },
    body: {
      el: "Διερευνούμε εμπορικές συστάσεις, αναζήτηση συμβάσεων, διαμεσολάβηση και επιχειρηματική ανάπτυξη, σύμφωνα με την εκάστοτε εφαρμοστέα νομοθεσία. Το αντικείμενο και οι προϋποθέσεις κάθε συνεργασίας επιβεβαιώνονται ξεχωριστά. Κατ' εξαίρεση, νομικές υπηρεσίες παρέχονται μόνο μέσω εξειδικευμένου εξωτερικού συνεργάτη της εταιρείας μας.",
      en: "We explore commercial introductions, contract sourcing and intermediation, and business development, subject to applicable law. The scope and conditions of each engagement are confirmed individually. As an exception, legal services are provided only through a specialised external partner of our company.",
    },
    areas: [
      { el: "Εμπορικές συστάσεις", en: "Commercial introductions" },
      { el: "Αναζήτηση συμβάσεων & διαμεσολάβηση", en: "Contract sourcing & intermediation" },
      { el: "Επιχειρηματική ανάπτυξη", en: "Business development" },
    ],
    points: [
      { el: "Σύνδεση με κατάλληλους εμπορικούς εταίρους.", en: "Connecting with suitable commercial partners." },
      { el: "Εντοπισμός και διερεύνηση ευκαιριών συμβάσεων.", en: "Identifying and exploring contract opportunities." },
      { el: "Υποστήριξη της διαδικασίας έως τη συμφωνία.", en: "Supporting the process through to agreement." },
    ],
  },
  {
    slug: "solutions",
    name: "Business Solutions",
    short: { el: "Ολοκληρωμένες επιχειρηματικές λύσεις από έναν συνεργάτη.", en: "Integrated business solutions from one partner." },
    body: {
      el: "Ως Business Solutions Partner, συνδυάζουμε τεχνολογία, υπηρεσίες και επιχειρηματική εμπειρία για να προτείνουμε λύσεις στις ανάγκες κάθε επιχείρησης. Το αντικείμενο, η διαθεσιμότητα και οι όροι κάθε συνεργασίας επιβεβαιώνονται κατόπιν επικοινωνίας.",
      en: "As a Business Solutions Partner, we combine technology, services and business experience to propose solutions for each company's needs. Scope, availability and terms of every engagement are confirmed through direct discussion.",
    },
    areas: [
      { el: "Ολοκληρωμένες λύσεις", en: "Integrated solutions" },
      { el: "Ένα σημείο επαφής", en: "Single point of contact" },
      { el: "Συνδυασμός τομέων", en: "Cross-sector combination" },
    ],
    points: [
      { el: "Μία ομάδα για όλες τις επιχειρηματικές ανάγκες.", en: "One team for every business need." },
      { el: "Συνδυασμός τεχνολογίας, υπηρεσιών και εμπειρίας.", en: "Technology, services and experience combined." },
      { el: "Λύσεις προσαρμοσμένες σε κάθε επιχείρηση.", en: "Solutions tailored to each business." },
    ],
  },
];

export const activityNotice: Text = {
  el: "Όλες οι υπηρεσίες αποτελούν πραγματικές δραστηριότητες της INDIGO GROUP, στο εμπόριο και στις υπηρεσίες, που υλοποιούνται είτε απευθείας είτε μέσω εξειδικευμένων συνεργατών. Οι υπηρεσίες παρέχονται σύμφωνα με την ισχύουσα νομοθεσία· κατ' εξαίρεση, νομικές υπηρεσίες παρέχονται μόνο μέσω εξειδικευμένου εξωτερικού συνεργάτη της εταιρείας μας.",
  en: "All services are genuine INDIGO GROUP activities, in trade and in services, delivered directly or through specialist partners. Services are provided in line with applicable law; as an exception, legal services are provided only through a specialised external partner of our company.",
};

export const nav = [
  { to: "/", el: "Αρχική", en: "Home" },
  { to: "/services", el: "Υπηρεσίες", en: "Services" },
  { to: "/approach", el: "Προσέγγιση", en: "Approach" },
  { to: "/about", el: "Ποιοι είμαστε", en: "About" },
] as const;

export const contact = {
  email: "info@indigogroup.com.gr",
  phone: "210 014 0888",
  phoneHref: "+302100140888",
  groupUrl: "https://indigogroup.com.gr",
};

export const steps: { title: Text; text: Text }[] = [
  { title: { el: "Ακούμε", en: "Listen" }, text: { el: "Κατανοούμε την επιχείρηση, τους στόχους και τις προκλήσεις της.", en: "We understand the business, its goals and challenges." } },
  { title: { el: "Σχεδιάζουμε", en: "Design" }, text: { el: "Προτείνουμε την κατάλληλη λύση και το εύρος της συνεργασίας.", en: "We propose the right solution and engagement scope." } },
  { title: { el: "Υλοποιούμε", en: "Deliver" }, text: { el: "Υλοποιούμε απευθείας ή μέσω εξειδικευμένων συνεργατών.", en: "We deliver directly or through specialist partners." } },
  { title: { el: "Στηρίζουμε", en: "Support" }, text: { el: "Παραμένουμε το ένα σημείο επαφής σε όλη τη διαδρομή.", en: "We remain the single point of contact throughout." } },
];
