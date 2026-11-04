export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="4" y="22" width="30" height="30" fill="#b9c3ea" />
      <rect x="16" y="14" width="30" height="30" fill="#4f5fc4" opacity=".92" />
      <rect x="28" y="4" width="32" height="32" fill="#1e2a78" />
    </svg>
  );
}

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3 sm:gap-4">
      <Mark className="h-9 w-9 sm:h-11 sm:w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] sm:text-[25px] tracking-[0.04em] ${inverted ? "text-primary-foreground" : "text-primary"}`}>
          <span className="font-bold">BUSINESS</span> <span className={`font-light ${inverted ? "text-ice" : "text-[#4f5fc4]"}`}>SOLUTIONS</span>
        </span>
        <span className={`mt-1.5 text-[9px] sm:text-[10px] tracking-[0.32em] font-medium ${inverted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          by INDIGO GROUP
        </span>
      </span>
    </span>
  );
}
