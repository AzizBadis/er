import Link from "next/link";
import { Brand } from "./brand";
import { NewsletterForm } from "./newsletter-form";

const columns = [
  { title: "Solutions", href: "/solutions", links: ["Gestion financière", "Chaîne logistique", "Ressources humaines", "Relation client"] },
  { title: "Secteurs", href: "/secteurs", links: ["Industrie", "Retail & commerce", "Services & santé", "Secteur public"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr] lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Brand />
          <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-muted">L’excellence opérationnelle au service de votre croissance.</p>
        </div>
        {columns.map(({ title, href, links }) => (
          <div key={title}>
            <h2 className="text-xs font-bold uppercase tracking-[.12em] text-ink">{title}</h2>
            <ul className="mt-4 space-y-1">
              {links.map((link) => <li key={link}><Link className="inline-flex min-h-9 items-center text-sm text-muted transition-colors hover:text-accent" href={href}>{link}</Link></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.12em] text-ink">Contact</h2>
          <ul className="mt-4 space-y-1">
            <li><Link className="inline-flex min-h-9 items-center text-sm text-muted transition-colors hover:text-accent" href="/contact">Réserver une démo</Link></li>
            <li><Link className="inline-flex min-h-9 items-center text-sm text-muted transition-colors hover:text-accent" href="/#methode">Notre méthodologie</Link></li>
          </ul>
        </div>
        <NewsletterForm />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-line px-4 py-6 text-sm text-subtle sm:flex-row sm:px-6 lg:px-8">
        <span>© 2026 GSM ERP. Tous droits réservés.</span>
        <span>France · Tunisie · International</span>
      </div>
    </footer>
  );
}
