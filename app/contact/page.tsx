"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Building2, CalendarDays, Check, Mail, Menu,
  Phone, ShieldCheck, X,
} from "lucide-react";
import { FormEvent, useState } from "react";

type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  demoDate: string;
  need: string;
};

const initialForm: DemoForm = { firstName: "", lastName: "", email: "", phone: "", company: "", demoDate: "", need: "" };

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function update(field: keyof DemoForm, value: string) { setForm(current => ({ ...current, [field]: value })); }
  function next(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStep(2); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); setStep(3); }
  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return <main className="overflow-x-clip bg-white">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    <section className="bg-gradient-to-br from-[#fbfafb] via-[#f8f7f8] to-[#dce8fb]">
      <div className="mx-auto max-w-[1220px] px-5 pb-20 pt-14 md:px-7 md:pb-24 md:pt-16">
        <div className="max-w-[720px]"><span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-blue">Prêt à transformer votre entreprise</span><h1 className="mt-4 font-display text-[42px] font-bold leading-[1.08] tracking-[-.025em] text-black md:text-[55px]">Réservez une démo personnalisée</h1><p className="mt-5 max-w-[600px] text-[17px] leading-[1.6] text-[#65676e]">Découvrez comment GSM ERP peut optimiser vos processus, réduire vos coûts et accélérer votre croissance grâce à nos solutions sur-mesure.</p></div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="overflow-hidden rounded-[18px] border-l-4 border-brand-blue bg-white shadow-[0_16px_45px_rgba(25,34,50,.12)]">
              <div className="p-6 md:p-8">
                <div className="flex items-center border-b border-[#e8e8eb] pb-5"><span className="grid size-7 place-items-center rounded-full bg-black text-sm font-bold text-white">{step}</span><span className="ml-2 text-sm text-[#5d6068]">{step === 1 ? "Coordonnées" : step === 2 ? "Votre entreprise" : "Confirmation"}</span><span className="ml-auto flex gap-2">{[1, 2, 3].map(n => <i className={`size-2 rounded-full ${n === step ? "bg-brand-blue" : "bg-[#c9ccd2]"}`} key={n} />)}</span></div>

                {step === 1 && <form className="mt-7" onSubmit={next}><div className="grid gap-4 sm:grid-cols-2"><Field label="Prénom"><input className={inputStyles} value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="Mohamed" required /></Field><Field label="Nom"><input className={inputStyles} value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Benmohamed" required /></Field></div><Field label="Email professionnel"><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#656b75]" size={18}/><input className={`${inputStyles} pl-12`} value={form.email} onChange={e => update("email", e.target.value)} type="email" placeholder="mohamed.benmohamed@entreprise.com" required /></div></Field><Field label="Téléphone"><div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#656b75]" size={18}/><input className={`${inputStyles} pl-12`} value={form.phone} onChange={e => update("phone", e.target.value)} type="tel" placeholder="+216 99 999 999" required /></div></Field><button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3.5 text-sm font-bold text-white transition hover:bg-brand-blue">Continuer vers l’entreprise <ArrowRight size={18}/></button></form>}

                {step === 2 && <form className="mt-7" onSubmit={submit}><Field label="Entreprise"><div className="relative"><Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#656b75]" size={18}/><input className={`${inputStyles} pl-12`} value={form.company} onChange={e => update("company", e.target.value)} placeholder="Nom de votre entreprise" required /></div></Field><Field label="Date souhaitée pour la démonstration"><div className="relative"><CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#656b75]" size={18}/><input className={`${inputStyles} pl-12`} value={form.demoDate} onChange={e => update("demoDate", e.target.value)} type="date" required /></div></Field><Field label="Votre besoin principal"><textarea className={`${inputStyles} min-h-28 resize-y`} value={form.need} onChange={e => update("need", e.target.value)} placeholder="Décrivez brièvement vos enjeux et objectifs…" required /></Field><div className="mt-5 flex gap-3"><button className="flex w-1/3 items-center justify-center gap-2 rounded-lg border border-[#c8ccd3] py-3.5 text-sm font-bold" type="button" onClick={() => setStep(1)}><ArrowLeft size={17}/> Retour</button><button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-black py-3.5 text-sm font-bold text-white transition hover:bg-brand-blue">Réserver ma démo <ArrowRight size={18}/></button></div></form>}

                {step === 3 && sent && <div className="py-12 text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#e9f7ef] text-[#18834f]"><Check size={34} strokeWidth={2.5}/></span><h2 className="mt-6 font-display text-[30px] font-bold text-black">Votre demande est envoyée</h2><p className="mx-auto mt-3 max-w-[420px] text-sm leading-6 text-[#696d76]">Merci {form.firstName}. Votre demande de démonstration pour {form.company}, prévue le {form.demoDate}, a bien été enregistrée.</p><button className="mt-7 text-sm font-bold text-brand-blue underline" onClick={() => { setForm(initialForm); setSent(false); setStep(1); }}>Envoyer une autre demande</button></div>}
              </div>
            </div>
            <div className="mt-7 flex items-center gap-4 rounded-xl bg-[#2876ec] px-5 py-4 text-white"><ShieldCheck className="shrink-0" size={22}/><p className="text-xs leading-5">Vos données sont sécurisées et ne seront jamais partagées avec des tiers. Conformité stricte au RGPD.</p></div>
          </div>

          <aside className="rounded-[18px] bg-[#e8e6e7] p-7 shadow-sm md:p-8"><h2 className="font-display text-[23px] font-bold text-black">Ce que comprend la démo</h2><ul className="mt-6 space-y-5">{[["Analyse de vos besoins", "Échange de 15min sur vos défis actuels."], ["Visite guidée ciblée", "Démonstration des modules pertinents pour votre secteur."], ["Questions / Réponses", "Temps dédié avec nos experts fonctionnels."]].map(([title, copy]) => <li className="flex gap-3" key={title}><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#c9ddfa] text-brand-blue"><Check size={13}/></span><span><b className="block text-sm">{title}</b><small className="mt-1 block leading-5 text-[#62656c]">{copy}</small></span></li>)}</ul><div className="relative mt-7 aspect-[16/8] overflow-hidden rounded-xl"><Image className="object-cover" src="/erp-desktop.jpg" alt="Démonstration de la plateforme GSM ERP" fill sizes="(max-width: 1024px) 90vw, 360px" /></div><div className="mt-7 border-t border-[#d5d2d4] pt-6"><b className="text-[10px] uppercase tracking-[.1em] text-[#5e6067]">Contact direct</b></div></aside>
        </div>
      </div>
    </section>

    <Footer subscribed={subscribed} subscribe={subscribe}/>
  </main>;
}

const inputStyles = "w-full rounded-lg border border-[#ebebee] bg-[#fafafa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a8afba] focus:border-brand-blue focus:bg-white focus:ring-3 focus:ring-brand-blue/10";
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="mt-4 block"><span className="mb-2 block text-xs font-bold text-[#31343a]">{label}</span>{children}</label>; }

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) { return <header className="sticky top-0 z-50 h-[68px] border-b border-brand-line bg-white/95 backdrop-blur-xl md:h-[78px]"><div className="mx-auto flex h-full max-w-[1220px] items-center justify-between px-5 md:px-7"><Brand/><nav className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[68px] flex-col border-b border-brand-line bg-white p-5 shadow-lg md:static md:ml-auto md:mr-8 md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0 md:shadow-none`}><Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/">Accueil</Link><Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/solutions">Solutions</Link><Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/secteurs">Secteurs</Link><Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/#methode">Méthodologie</Link><Link className="px-3 py-3 text-sm font-bold text-brand-blue md:px-0" href="/contact">Contact</Link></nav><Link className="hidden rounded-lg bg-brand-blue px-5 py-3 text-sm font-bold text-white hover:bg-brand-blue-dark md:block" href="/contact">Réserver une démo</Link><button className="p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? <X/> : <Menu/>}</button></div></header>; }
function Brand() { return <Link className="inline-flex items-center whitespace-nowrap font-display text-xl font-bold text-black" href="/">GSM ERP</Link>; }
function Footer({ subscribed, subscribe }: { subscribed: boolean; subscribe: (event: FormEvent<HTMLFormElement>) => void }) { return <footer className="border-t border-brand-line bg-white px-5 pb-7 pt-14"><div className="mx-auto grid max-w-[1164px] gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_.9fr_.9fr_1.1fr_1.2fr]"><div><Brand/><p className="mt-4 max-w-[190px] text-[13px] leading-5 text-brand-muted">L’excellence opérationnelle au service de votre croissance.</p></div><FooterColumn title="Solutions" links={["Gestion Financière", "Chaîne Logistique", "Ressources Humaines", "Intelligence Client"]}/><FooterColumn title="Secteurs" links={["Industrie", "Retail & Commerce", "Services & Santé", "Secteur Public"]}/><div><b className="text-[11px] uppercase tracking-wider">Contact</b></div><div><b className="text-[11px] uppercase tracking-wider">Newsletter</b>{subscribed ? <p className="mt-4 text-sm text-[#168356]">Merci, à bientôt !</p> : <form className="mt-4 flex flex-col gap-2" onSubmit={subscribe}><input className="rounded-md border border-[#bdc4cf] px-3 py-2.5 text-sm" type="email" required placeholder="votre@email.com"/><button className="rounded-md bg-black py-2.5 text-sm font-bold text-white">S’abonner</button></form>}</div></div><div className="mx-auto mt-14 max-w-[1164px] border-t border-brand-line pt-6 text-xs text-[#737b88]">© 2026 GSM ERP. Tous droits réservés.</div></footer>; }
function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div><b className="text-[11px] uppercase tracking-wider">{title}</b><div className="mt-4 flex flex-col gap-2.5">{links.map(link => <a className="text-[13px] text-brand-muted hover:text-brand-blue" href="#" key={link}>{link}</a>)}</div></div>; }
