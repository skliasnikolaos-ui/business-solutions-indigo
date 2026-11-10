import logoColor from "@/assets/logo/iso-horizontal-color.svg";
// On dark backgrounds: same coloured squares, white "ISO" and lavender subtitle.
import logoOnDark from "@/assets/logo/iso-horizontal-color-on-dark.svg";

export const BRAND_NAME = "ISO — INDIGO Strategy & Operations";

/** The ISO mark (three overlapping squares), drawn inline so it scales crisply. */
export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="4 4 60.36 60.36" className={className} aria-hidden="true">
      <rect x="6" y="32.42" width="29.94" height="29.94" fill="#B7C1F5" />
      <rect x="19.21" y="19.21" width="29.94" height="29.94" fill="#7F8FE6" />
      <rect x="32.42" y="6" width="29.94" height="29.94" fill="#3949A8" />
      <rect x="19.21" y="32.42" width="16.73" height="16.73" fill="#5B6CDD" />
      <rect x="32.42" y="19.21" width="16.73" height="16.73" fill="#1C2998" />
      <rect x="32.42" y="32.42" width="3.52" height="3.52" fill="#141F92" />
    </svg>
  );
}

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return <img src={inverted ? logoOnDark : logoColor} alt={BRAND_NAME} className="brand-logo" width={255} height={68} />;
}
