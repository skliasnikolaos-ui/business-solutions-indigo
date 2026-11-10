import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import wordmark from "@/assets/logo/iso-wordmark-color.svg";
import { Mark } from "./brand";
import { onLogoIntroRequest } from "@/lib/intro-trigger";

/** Full-screen logo intro: the ISO mark spins in like a globe, then the wordmark appears. */
export function LogoIntro() {
  const [phase, setPhase] = useState<"hidden" | "show" | "leave">("hidden");
  const isHome = useLocation().pathname === "/";
  const timers = useRef<number[]>([]);

  const play = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase("show");
    timers.current = [
      window.setTimeout(() => setPhase("leave"), reduced ? 600 : 2600),
      window.setTimeout(() => setPhase("hidden"), reduced ? 900 : 3300),
    ];
  }, []);

  // First visit to the home page in this browser session: play once automatically.
  useEffect(() => {
    if (!isHome) return;
    let seen = false;
    try { seen = window.sessionStorage.getItem("iso-intro-shown") === "1"; } catch { /* ignore */ }
    if (seen) return;
    try { window.sessionStorage.setItem("iso-intro-shown", "1"); } catch { /* ignore */ }
    play();
  }, [isHome, play]);

  // Every click on the header logo replays it.
  useEffect(() => onLogoIntroRequest(play), [play]);
  useEffect(() => () => timers.current.forEach((id) => window.clearTimeout(id)), []);

  if (phase === "hidden") return null;
  return (
    <div className={`logo-intro ${phase === "leave" ? "is-leaving" : ""}`} aria-hidden="true" onClick={() => setPhase("leave")}>
      <div className="logo-intro-globe">
        <span className="logo-intro-orbit" />
        <span className="logo-intro-orbit logo-intro-orbit--b" />
        <Mark className="logo-intro-mark" />
      </div>
      <p className="logo-intro-word"><img src={wordmark} alt="" /></p>
    </div>
  );
}
