# BUSINESS SOLUTIONS by INDIGO GROUP

Αυτόνομο website της INDIGO ως **Business Solutions Partner**: ένα σημείο επαφής για τις επιχειρηματικές ανάγκες κάθε πελάτη. Δίγλωσσο (EL / EN).

## Σελίδες
- `/` Αρχική
- `/services` Υπηρεσίες
- `/services/advisory` · `/services/contracts` · `/services/development` · `/services/solutions`
- `/approach` Πώς δουλεύουμε (μοντέλο συνεργασίας, οφέλη)
- `/about` Ποιοι είμαστε
- `/contact` Επικοινωνία (η φόρμα ανοίγει email προς info@indigogroup.com.gr)

Τα κείμενα βρίσκονται στο `src/content.ts`.

## Τοπική εκτέλεση
```bash
npm install
npm run dev
```

## Build / Δημοσίευση
```bash
npm run build
```
Ο φάκελος `dist/` ανεβαίνει σε Vercel, Netlify ή οποιοδήποτε static hosting (περιλαμβάνονται `vercel.json` και `public/_redirects`).
