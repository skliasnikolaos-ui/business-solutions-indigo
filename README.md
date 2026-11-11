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

## Δημοσίευση στο www.i-s-o.gr (Hetzner)

Το site είναι στατικό: μετά το `npm run build` ανεβαίνει ό,τι υπάρχει στον φάκελο `dist/` (μαζί με το κρυφό `.htaccess`).

**Hetzner Webhosting (konsoleH)**
1. Ανεβάστε **όλο** το περιεχόμενο του `dist/` (και το `.htaccess`) στον φάκελο `public_html` μέσω FTP/SFTP ή του File Manager.
2. Στο konsoleH ενεργοποιήστε δωρεάν SSL (Let's Encrypt) για `i-s-o.gr` και `www.i-s-o.gr`.
3. Το `.htaccess` κάνει: https + www, σωστό άνοιγμα όλων των σελίδων, συμπίεση, caching και headers ασφαλείας.

**DNS** (στο Hetzner DNS ή στον καταχωρητή του .gr):
- `A` για `i-s-o.gr` και `www` → IP του Hetzner hosting/server (ή `CNAME www → i-s-o.gr`).

**Hetzner Cloud (nginx)** — αντί για `.htaccess`:
```nginx
server {
  server_name i-s-o.gr www.i-s-o.gr;
  root /var/www/i-s-o.gr;
  location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
  location / { try_files $uri $uri/ /index.html; }
}
```
(SSL με `certbot --nginx -d i-s-o.gr -d www.i-s-o.gr`.)

**Αυτόματη ενημέρωση από το GitHub:** το `.github/workflows/deploy-hetzner.yml` ανεβάζει το site σε κάθε αλλαγή στο `main`, μόλις προστεθούν τα secrets `HETZNER_HOST`, `HETZNER_USER`, `HETZNER_PORT`, `HETZNER_PATH`, `HETZNER_SSH_KEY`.

Η διεύθυνση του site ορίζεται στο `src/seo.ts` (`SITE_URL`), στο `index.html`, στο `public/sitemap.xml` και στο `public/robots.txt`.
