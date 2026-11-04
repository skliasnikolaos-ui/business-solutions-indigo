import { Link, NavLink, type LinkProps, type NavLinkProps } from "react-router-dom";
import { useLanguage } from "@/i18n";

function withLang(to: string, lang: string) {
  const [path, hash] = to.split("#");
  return `${path}?lang=${lang}${hash ? `#${hash}` : ""}`;
}

export function LLink({ to, ...rest }: Omit<LinkProps, "to"> & { to: string }) {
  const { lang } = useLanguage();
  return <Link to={withLang(to, lang)} {...rest} />;
}

export function LNavLink({ to, ...rest }: Omit<NavLinkProps, "to"> & { to: string }) {
  const { lang } = useLanguage();
  return <NavLink to={withLang(to, lang)} {...rest} />;
}
