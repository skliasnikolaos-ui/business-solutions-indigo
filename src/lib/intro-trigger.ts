// Lets the header logo replay the intro overlay (same pattern as the INDIGO GROUP site).
const listeners = new Set<() => void>();

export function onLogoIntroRequest(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function requestLogoIntro(): void {
  listeners.forEach((listener) => listener());
}
