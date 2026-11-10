# ISO — INDIGO Strategy & Operations

Αυτόνομο website της INDIGO ως **Business Solutions Partner**: ένα σημείο επαφής για τις επιχειρηματικές ανάγκες κάθε πελάτη. Δίγλωσσο (EL / EN).

## Σελίδες
- `/` Αρχική
- `/services` Υπηρεσίες
- Strategy: `/services/strategy` · `/services/development`
- Operations: `/services/operations` · `/services/contracts` · `/services/solutions`
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

## Logo
Η τελική ταυτότητα ISO (logo «I | S | O» σε χρωματιστή, λευκή και μονόχρωμη εκδοχή — οριζόντια και κάθετη, SVG και PNG — και οι εικόνες hero) βρίσκεται στο `public/brand/`. Τα στοιχεία επικοινωνίας είναι στο `src/content.ts` (`contact`).
