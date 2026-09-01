"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Building2, Car, Check, ChevronRight, Factory,
  GraduationCap, HardHat, HeartPulse, Hotel, Landmark, Menu,
  PackageCheck, ShieldCheck, Store, Tractor, Truck,
  Users, Utensils, Warehouse, X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const sectors = [
  { name: "Hôtellerie", icon: Hotel }, { name: "Restauration", icon: Utensils },
  { name: "Immobilier", icon: Building2 }, { name: "Retail", icon: Store },
  { name: "Industrie", icon: Factory }, { name: "Logistique", icon: Truck },
  { name: "Santé", icon: HeartPulse }, { name: "Finance", icon: Landmark },
  { name: "Éducation", icon: GraduationCap }, { name: "Agriculture", icon: Tractor },
  { name: "BTP", icon: HardHat }, { name: "Secteur Public", icon: ShieldCheck },
  { name: "Automobile", icon: Car }, { name: "Autres", icon: PackageCheck },
];

const solutions = [
  { icon: BarChart3, title: "Finance & Compta", copy: "Une vision financière fiable, de la facturation au reporting, disponible en temps réel.", bullets: ["Facturation & recouvrement", "Rapprochement bancaire", "Déclarations fiscales"] },
  { icon: Warehouse, title: "Supply Chain", copy: "Pilotez vos stocks et vos approvisionnements avec une traçabilité de bout en bout.", bullets: ["Stocks multi-sites", "Achats & fournisseurs", "Expéditions & traçabilité"] },
  { icon: Users, title: "Ressources Humaines", copy: "Rassemblez les données collaborateurs, la paie et les talents dans un espace unique.", bullets: ["Portail collaborateur", "Congés & absences", "Notes de frais"] },
];

const stats = [["99.9%", "Disponibilité"], ["24/7", "Support expert"]];

const buttonStyles = "inline-flex items-center justify-center gap-2 rounded-[9px] bg-brand-blue px-[22px] py-[15px] text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-[0_10px_28px_rgba(8,116,228,.24)]";

function Logo() {
  return (
    <a className="inline-flex shrink-0 items-center whitespace-nowrap font-display text-[18px] sm:text-[21px]" href="#accueil" aria-label="GSM ERP — accueil">
      <span><b>GSM ERP</b></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return (
    <main className="overflow-x-clip">
      <header className="sticky top-0 z-50 h-[68px] border-b border-brand-ink/10 bg-white/95 backdrop-blur-xl md:h-[78px]">
        <div className="mx-auto flex h-full max-w-[1220px] items-center justify-between px-[18px] md:px-7">
          <Logo />
          <nav className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[68px] flex-col border-b border-brand-line bg-white p-5 shadow-[0_14px_30px_rgba(13,29,51,.12)] md:static md:ml-auto md:mr-5 md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:mr-10 lg:gap-9`} aria-label="Navigation principale">
            {["Accueil", "Solutions", "Secteurs", "Méthodologie", "Contact"].map((label) => (
              <Link key={label} className="relative px-3 py-[13px] text-sm font-semibold text-[#414c60] transition after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-blue after:transition hover:text-brand-blue hover:after:scale-x-100 md:px-0 md:py-0 md:after:inset-x-0 md:after:-bottom-2.5" href={label === "Solutions" ? "/solutions" : label === "Secteurs" ? "/secteurs" : label === "Contact" ? "/contact" : `#${label === "Méthodologie" ? "methode" : label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </nav>
          <Link className={`${buttonStyles} hidden px-[18px] py-3 md:inline-flex`} href="/contact">Réserver une démo</Link>
          <button className="grid p-2 text-brand-navy md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-brand-navy text-white" id="accueil">
        <div className="absolute -left-[110px] -top-[230px] size-[430px] rounded-full bg-[#2d74c8]/15" />
        <div className="absolute -bottom-[300px] -right-[330px] size-[520px] rounded-full bg-[#2d74c8]/15" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1220px] flex-col items-center gap-12 px-5 pb-[105px] pt-[70px] md:grid md:grid-cols-2 md:gap-6 md:px-7 md:pb-[104px] md:pt-[72px] lg:grid-cols-[.87fr_1.13fr] lg:gap-[55px]">
          <div className="max-w-[570px]">
            <div className="mb-6 flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[.18em] text-[#8ebcf1]"><span className="h-0.5 w-7 bg-brand-blue" /> ERP nouvelle génération</div>
            <h1 className="mb-6 font-display text-[43px] leading-[1.05] tracking-[-.035em] sm:text-[50px] lg:text-[66px]">Votre métier est unique.<br /><span className="text-[#b8d6f6]">Votre ERP aussi.</span></h1>
            <p className="mb-[30px] max-w-[540px] text-base leading-[1.75] text-[#aebbd0] lg:text-[17px]">Une plateforme de gestion unifiée, conçue pour l’excellence opérationnelle. Connectez vos équipes, automatisez vos flux et accélérez votre croissance.</p>
            <div className="flex flex-col gap-[13px] sm:flex-row"><Link className={buttonStyles} href="/contact">Réserver une démo <ArrowRight size={18} /></Link><Link className={`${buttonStyles} border border-white/10 bg-white/[.075] hover:bg-white/[.13] hover:shadow-none`} href="/solutions">Explorer les solutions</Link></div>
          </div>
          <div className="relative flex h-[320px] w-full items-center md:h-[410px] lg:h-[480px]" aria-label="Aperçu du tableau de bord GSM ERP">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] border border-white/15 shadow-[0_35px_75px_rgba(0,0,0,.45)] md:h-[325px] lg:h-[390px]"><Image className="object-cover" src="/erp-desktop.jpg" alt="Tableau de bord GSM ERP affiché sur un écran d’ordinateur" fill priority sizes="(max-width: 900px) 92vw, 52vw" /></div>
            <div className="absolute bottom-[-12px] left-2.5 aspect-video w-[180px] overflow-hidden rounded-[14px] border-[5px] border-white bg-white shadow-[0_25px_55px_rgba(0,0,0,.35)] md:-left-[34px] md:bottom-[9px] md:w-[235px]">
              <Image className="object-cover" src="/erp-mobile.jpg" alt="Application mobile GSM ERP affichée sur un téléphone" fill sizes="(max-width: 768px) 180px, 235px" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-[55px] max-w-[1220px] px-4 md:-mt-[50px] md:px-7" aria-label="Chiffres clés">
        <div className="grid min-h-[120px] grid-cols-2 items-center rounded-[15px] bg-white px-0 py-6 shadow-[0_16px_45px_rgba(18,30,50,.12)] md:grid-cols-4">
          {stats.map(([value, label], index) => <div className={`flex min-h-16 flex-col justify-center px-5 py-5 md:px-[30px] md:py-[3px] ${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-b md:border-b-0" : ""} ${index < 3 ? "md:border-r" : "md:border-r-0"} border-brand-line`} key={label}><strong className="font-display text-[31px] leading-none text-brand-navy">{value}</strong><span className="mt-2.5 text-[10px] font-extrabold uppercase tracking-[.08em] text-[#727b88]">{label}</span></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-[76px] md:px-7 md:py-[98px]" id="secteurs">
        <SectionHeading kicker="Une expertise terrain" title="Des solutions pour chaque secteur">Notre architecture modulaire s’adapte précisément aux exigences de votre industrie.</SectionHeading>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 md:gap-3 lg:grid-cols-7">
          {sectors.map(({ name, icon: Icon }) => <a className="group relative flex min-h-[115px] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-[#e8ebf1] bg-[#f8f9fb] text-center text-[13px] transition duration-200 hover:-translate-y-1 hover:border-[#a9cdf5] hover:bg-white hover:text-brand-blue hover:shadow-[0_12px_24px_rgba(23,42,72,.09)]" href="#contact" key={name}><span className="grid size-[46px] place-items-center rounded-full bg-[#e4efff] text-brand-blue"><Icon size={25} strokeWidth={1.9} /></span><b>{name}</b><ChevronRight className="absolute right-2.5 top-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" size={17} /></a>)}
        </div>
      </section>

      <section className="bg-[#f5f7fa]" id="solutions">
        <div className="mx-auto max-w-[1220px] px-5 py-[76px] md:px-7 md:py-[92px]">
          <SectionHeading kicker="Tout ce qu’il vous faut" title="Un écosystème fonctionnel complet">Activez les modules dont vous avez besoin, quand vous en avez besoin.</SectionHeading>
          <div className="grid grid-cols-1 gap-[21px] md:grid-cols-3">
            {solutions.map(({ icon: Icon, title, copy, bullets }, index) => <article className="rounded-[13px] border border-[#e9edf2] bg-white px-[25px] py-[28px] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(27,45,74,.1)]" key={title}><div className="flex items-center justify-between"><span className="grid size-[47px] place-items-center rounded-[10px] bg-brand-ice text-brand-blue"><Icon size={26} /></span><span className="font-display text-[28px] text-[#e0e5ed]">0{index + 1}</span></div><h3 className="mb-3 mt-[22px] font-display text-[23px] font-bold text-brand-navy">{title}</h3><p className="min-h-0 text-sm leading-[1.55] text-brand-muted md:min-h-[70px]">{copy}</p><ul className="mb-0 mt-4 list-none border-t border-brand-line px-0 pb-2.5 pt-[15px]">{bullets.map((bullet) => <li className="my-[11px] flex items-center gap-2.5 text-[13px] text-[#374156]" key={bullet}><Check className="text-brand-blue" size={16} />{bullet}</li>)}</ul><a className="mt-1 inline-flex items-center gap-2 text-[13px] font-bold text-brand-blue" href="#contact">Découvrir le module <ArrowRight size={16} /></a></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-11 md:px-7 md:py-[70px]" id="methode">
        <div className="relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[20px] bg-gradient-to-br from-brand-navy to-[#103b68] px-7 py-[38px] text-white md:grid-cols-2 md:gap-[46px] md:px-[58px] md:py-[54px] lg:grid-cols-[1.15fr_1fr_auto]">
          <div className="pointer-events-none absolute -right-[130px] -top-[180px] size-[280px] rounded-full border border-white/10" /><div><span className="mb-[15px] block text-[10px] font-extrabold uppercase tracking-[.17em] text-[#83bdff]">Une méthode éprouvée</span><h2 className="m-0 font-display text-[35px] leading-[1.1] tracking-[-.025em] text-white">Votre transformation,<br />sans la complexité.</h2></div><p className="m-0 text-sm leading-[1.65] text-[#bac8d8]">Nos experts vous accompagnent du cadrage au déploiement, avec une feuille de route claire et des résultats mesurables.</p><a className={`${buttonStyles} w-full bg-white text-brand-navy hover:text-white md:col-span-2 md:w-max lg:col-span-1`} href="#contact">Parler à un expert <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className="border-t border-brand-line bg-white px-7 pb-[25px] pt-[68px]" id="contact">
        <div className="mx-auto grid max-w-[1164px] grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_.9fr_.9fr_1.15fr_1.25fr]">
          <div className="sm:col-span-2 lg:col-span-1"><Logo /><p className="mt-4 max-w-[200px] text-[13px] leading-[1.55] text-brand-muted">L’excellence opérationnelle au service de votre croissance.</p></div>
          <FooterLinks title="Solutions" links={["Gestion financière", "Chaîne logistique", "Ressources humaines", "Intelligence client"]} href="#solutions" /><FooterLinks title="Secteurs" links={["Industrie", "Retail & commerce", "Services & santé", "Secteur public"]} href="#secteurs" />
          <div className="flex flex-col gap-[11px]"><b className="mb-1 text-[11px] uppercase tracking-[.1em]">Contact</b></div>
          <div className="flex flex-col gap-[11px] sm:col-span-2 lg:col-span-1"><b className="mb-1 text-[11px] uppercase tracking-[.1em]">Newsletter</b><p className="m-0 max-w-[220px] text-[13px] leading-[1.55] text-brand-muted">Un regard expert sur votre transformation.</p>{subscribed ? <div className="flex items-center gap-2 rounded-lg bg-[#eaf8f1] p-[11px] text-[13px] text-[#16734a]"><Check size={17} /> Merci, à bientôt !</div> : <form className="flex flex-col gap-2" onSubmit={subscribe}><input className="rounded-md border border-[#bdc4cf] px-3 py-[11px] text-[13px] outline-none transition focus:border-brand-blue focus:ring-3 focus:ring-brand-blue/10" type="email" required placeholder="votre@email.com" aria-label="Votre adresse e-mail" /><button className="cursor-pointer rounded-md bg-brand-navy p-2.5 text-[13px] text-white transition hover:bg-brand-blue" type="submit">S’abonner</button></form>}</div>
        </div>
        <div className="mx-auto mt-[55px] flex max-w-[1164px] flex-col justify-between gap-2 border-t border-brand-line pt-6 text-xs text-[#737b88] sm:flex-row"><span>© 2026 GSM ERP. Tous droits réservés.</span><span>France · Tunisie · International</span></div>
      </footer>
    </main>
  );
}

function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return <div className="mb-[42px] max-w-[720px]"><span className="mb-[15px] block text-[10px] font-extrabold uppercase tracking-[.17em] text-brand-blue">{kicker}</span><h2 className="mb-[15px] font-display text-[34px] leading-[1.1] tracking-[-.025em] text-brand-navy md:text-[48px]">{title}</h2><p className="m-0 leading-[1.65] text-brand-muted">{children}</p></div>;
}

function FooterLinks({ title, links, href }: { title: string; links: string[]; href: string }) {
  return <div className="flex flex-col gap-[11px]"><b className="mb-1 text-[11px] uppercase tracking-[.1em]">{title}</b>{links.map((link) => <a className="text-[13px] text-brand-muted transition hover:text-brand-blue" href={href} key={link}>{link}</a>)}</div>;
}
