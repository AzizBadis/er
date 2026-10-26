"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 -mb-19 px-3 pt-3 sm:px-6 lg:px-8">
      <div className={`mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 rounded-full border pl-5 pr-2.5 transition-all duration-300 ${scrolled || menuOpen ? "border-line bg-white/80 shadow-lift backdrop-blur-xl" : "border-line/70 bg-white/70 shadow-soft backdrop-blur-md"}`}>
        <Brand />
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Navigation principale">
          {links.map(({ label, href }) => {
            const current = href === pathname;
            return <Link className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${current ? "bg-accent-soft text-accent" : "text-muted hover:bg-canvas hover:text-ink"}`} href={href} key={href} aria-current={current ? "page" : undefined}>{label}</Link>;
          })}
        </nav>
        <div className="hidden md:block"><Link className="btn-primary" href="/contact">Réserver une démo <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <button className="grid size-11 place-items-center rounded-full text-navy transition-colors hover:bg-canvas md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="menu-mobile">
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur-xl md:hidden" id="menu-mobile" aria-label="Navigation mobile">
          {links.map(({ label, href }) => {
            const current = href === pathname;
            return <Link className={`flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold ${current ? "bg-accent-soft text-accent" : "text-ink hover:bg-canvas"}`} href={href} key={href} aria-current={current ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>;
          })}
          <Link className="btn-primary mt-2 w-full" href="/contact" onClick={() => setMenuOpen(false)}>Réserver une démo</Link>
        </nav>
      )}
    </header>
  );
}
