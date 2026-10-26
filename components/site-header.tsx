"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "./brand";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Méthodologie", href: "/#methode" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 md:h-[72px] lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {links.map(({ label, href }) => {
            const current = href === pathname;
            return <Link className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${current ? "text-accent" : "text-muted hover:bg-canvas hover:text-ink"}`} href={href} key={href} aria-current={current ? "page" : undefined}>{label}</Link>;
          })}
        </nav>
        <div className="hidden md:block"><Link className="btn-primary" href="/contact">Réserver une démo</Link></div>
        <button className="grid size-11 place-items-center rounded-lg text-navy hover:bg-canvas md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="menu-mobile">
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-line bg-white px-4 pb-5 pt-2 shadow-lg md:hidden" id="menu-mobile" aria-label="Navigation mobile">
          {links.map(({ label, href }) => {
            const current = href === pathname;
            return <Link className={`flex min-h-12 items-center rounded-lg px-3 text-base font-semibold ${current ? "bg-accent-soft text-accent" : "text-ink hover:bg-canvas"}`} href={href} key={href} aria-current={current ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>;
          })}
          <Link className="btn-primary mt-3 w-full" href="/contact" onClick={() => setMenuOpen(false)}>Réserver une démo</Link>
        </nav>
      )}
    </header>
  );
}
