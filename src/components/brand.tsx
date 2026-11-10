import logoColor from "@/assets/logo/iso-horizontal-color.svg";
// On dark backgrounds: same coloured squares, white "ISO" and lavender subtitle.
import logoOnDark from "@/assets/logo/iso-horizontal-color-on-dark.svg";

export const BRAND_NAME = "ISO — INDIGO Strategy & Operations";

/** The ISO mark (three overlapping squares), drawn inline so it scales crisply. */
export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="4 4 73 73" className={className} aria-hidden="true">
      <rect x="6" y="38.26" width="36.57" height="36.57" fill="#B7C1F5" />
      <rect x="22.13" y="22.13" width="36.57" height="36.57" fill="#7F8FE6" />
      <rect x="38.26" y="6" width="36.57" height="36.57" fill="#3949A8" />
      <rect x="22.13" y="38.26" width="20.43" height="20.43" fill="#5B6CDD" />
      <rect x="38.26" y="22.13" width="20.43" height="20.43" fill="#1C2998" />
      <rect x="38.26" y="38.26" width="4.3" height="4.3" fill="#141F92" />
    </svg>
  );
}

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return <img src={inverted ? logoOnDark : logoColor} alt={BRAND_NAME} className="brand-logo" width={267} height={81} />;
}
