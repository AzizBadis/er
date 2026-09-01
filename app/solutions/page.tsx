"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Building2, Check, ChevronRight, Factory,
  HeartPulse, Menu, Settings2, ShoppingBag,
  Users, Wrench, X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const tabs = [
  {
    label: "Finance & Comptabilité",
    short: "Finance",
    title: "Modules Financiers",
    modules: [
      ["Comptabilité Générale", "Gestion automatisée des flux, écritures et rapprochements bancaires."],
      ["Contrôle de Gestion", "Analyse des coûts, budgets, et rentabilité multi-axes."],
      ["Trésorerie & Prévisions", "Visibilité temps réel sur les liquidités et prévisions à court/moyen terme."],
    ],
    benefits: ["Clôtures mensuelles accélérées de 40%", "Conformité légale et fiscale garantie", "Automatisation des relances clients"],
    integrations: ["Banques SEPA", "Portail Chorus Pro", "OCR Factures"],
  },
  {
    label: "Chaîne Logistique (SCM)", short: "Logistique", title: "Modules Logistiques",
    modules: [["Gestion des Stocks", "Stocks multi-sites, inventaires et valorisation en temps réel."], ["Achats & Fournisseurs", "Demandes d’achat, commandes et suivi de la performance fournisseur."], ["Transport & Livraison", "Planification des expéditions et traçabilité de bout en bout."]],
    benefits: ["Réduction des ruptures de stock", "Traçabilité complète des produits", "Délais d’approvisionnement maîtrisés"], integrations: ["EDI Fournisseurs", "Transporteurs", "Douanes"],
  },
  {
    label: "Ressources Humaines (RH)", short: "RH", title: "Modules Ressources Humaines",
    modules: [["Dossier Collaborateur", "Centralisez les informations, documents et parcours de vos équipes."], ["Temps & Absences", "Planification, congés, pointage et compteurs automatisés."], ["Talents & Formation", "Développez les compétences et pilotez les entretiens."]],
    benefits: ["Administration RH simplifiée", "Expérience collaborateur unifiée", "Données sociales fiables"], integrations: ["Paie", "SIRH", "Organismes sociaux"],
  },
  {
    label: "Relation Client (CRM)", short: "CRM", title: "Modules Relation Client",
    modules: [["Prospects & Opportunités", "Suivez votre pipeline commercial de la détection à la signature."], ["Ventes & Contrats", "Devis, commandes, abonnements et renouvellements centralisés."], ["Service Client", "Tickets, SLA et historique omnicanal dans un espace unique."]],
    benefits: ["Cycle de vente raccourci", "Vision client à 360°", "Satisfaction mesurée en continu"], integrations: ["E-mail", "Téléphonie", "E-commerce"],
  },
  {
    label: "Opérations & Prod", short: "Opérations", title: "Modules Opérations",
    modules: [["Planification", "Capacités, ressources et ordres de fabrication synchronisés."], ["Suivi de Production", "Avancement, consommations et qualité suivis en temps réel."], ["Maintenance", "Prévenez les arrêts avec une maintenance planifiée et prédictive."]],
    benefits: ["Productivité des ateliers améliorée", "Qualité et coûts sous contrôle", "Temps d’arrêt réduit"], integrations: ["Machines IoT", "GMAO", "Qualité"],
  },
];

const sectors = [
  { label: "Industrie", icon: Factory }, { label: "Retail", icon: ShoppingBag },
  { label: "Santé", icon: HeartPulse }, { label: "Services", icon: Wrench },
];

export default function SolutionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const current = tabs[activeTab];

  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return (
    <main className="overflow-x-clip bg-white">
      <header className="sticky top-0 z-50 h-[68px] border-b border-brand-line bg-white/95 backdrop-blur-xl md:h-[78px]">
        <div className="mx-auto flex h-full max-w-[1220px] items-center justify-between px-5 md:px-7">
          <Brand />
          <nav className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[68px] flex-col border-b border-brand-line bg-white p-5 shadow-lg md:static md:ml-auto md:mr-8 md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0 md:shadow-none`}>
            <Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/">Accueil</Link>
            <Link className="px-3 py-3 text-sm font-bold text-brand-blue md:px-0" href="/solutions">Solutions</Link>
            <Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/secteurs">Secteurs</Link>
            <Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/#methode">Méthodologie</Link>
            <Link className="px-3 py-3 text-sm font-semibold text-[#4d5360] md:px-0" href="/contact">Contact</Link>
          </nav>
          <Link className="hidden rounded-lg bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark md:block" href="/contact">Réserver une démo</Link>
          <button className="p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-white to-[#eef5ff]">
        <div className="mx-auto grid min-h-[500px] max-w-[1220px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-7 md:py-20">
          <div>
            <span className="mb-5 block text-[11px] font-extrabold uppercase tracking-[.15em] text-brand-blue">Solutions ERP</span>
            <h1 className="max-w-[570px] font-display text-[43px] font-bold leading-[1.12] tracking-[-.03em] text-black md:text-[58px]">Une plateforme complète,<br />tous vos processus</h1>
            <p className="mt-6 max-w-[575px] text-[17px] leading-[1.65] text-[#5e6470]">Découvrez la suite d&apos;applications métiers intégrées. Naviguez à travers nos modules spécialisés et composez une architecture logicielle qui s&apos;adapte précisément à la réalité de votre secteur.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a className="inline-flex items-center justify-center rounded-lg bg-black px-7 py-3.5 text-sm font-bold text-white" href="#configurateur">Voir la démo produit</a><a className="inline-flex items-center justify-center rounded-lg border border-[#a9adb5] px-7 py-3.5 text-sm font-bold text-[#30343b]" href="#modules">Découvrir les modules</a></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[#d9e0e9] bg-[#edf4fb] shadow-[0_22px_60px_rgba(22,48,78,.12)]">
            <Image className="object-cover" src="/erp-dashboard.png" alt="Aperçu de la plateforme GSM ERP" fill priority sizes="(max-width: 768px) 92vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-[#fbfafc]" id="modules">
        <div className="mx-auto max-w-[1220px] px-5 py-16 md:px-7 md:py-20">
          <div className="text-center"><h2 className="font-display text-[34px] font-bold text-black md:text-[42px]">Explorez nos capacités métiers</h2><p className="mt-3 text-[#6b6f78]">Sélectionnez un domaine pour découvrir les modules spécifiques et leurs fonctionnalités clés.</p></div>
          <div className="mt-10 flex gap-2 overflow-x-auto border-b border-[#ccd1d9]" role="tablist">
            {tabs.map((tab, index) => <button className={`shrink-0 border-b-2 px-4 pb-4 text-sm font-semibold transition ${activeTab === index ? "border-brand-blue text-brand-blue" : "border-transparent text-[#555b65] hover:text-brand-blue"}`} key={tab.label} onClick={() => setActiveTab(index)} role="tab" aria-selected={activeTab === index}>{tab.label}</button>)}
          </div>
          <div className="mt-11 grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h3 className="font-display text-[26px] font-bold text-black">{current.title}</h3>
              <div className="mt-5 space-y-3">{current.modules.map(([title, copy]) => <article className="group flex items-center justify-between rounded-xl border border-[#d5d9e0] bg-white p-4 transition hover:border-brand-blue hover:shadow-md" key={title}><div><h4 className="font-bold text-[#262a31]">{title}</h4><p className="mt-1 text-sm leading-5 text-[#686e78]">{copy}</p></div><ChevronRight className="ml-3 shrink-0 text-[#777d86] transition group-hover:translate-x-1 group-hover:text-brand-blue" /></article>)}</div>
              <h4 className="mb-3 mt-8 text-[11px] font-extrabold uppercase tracking-[.08em] text-[#5b616b]">Avantages clés</h4>
              <ul className="space-y-3">{current.benefits.map((benefit) => <li className="flex items-center gap-2.5 text-[15px] text-[#383d45]" key={benefit}><span className="grid size-[17px] shrink-0 place-items-center rounded-full bg-brand-blue text-white"><Check size={12} strokeWidth={3} /></span>{benefit}</li>)}</ul>
            </div>
            <div>
              <DashboardPreview title={current.short} />
              <div className="mt-5 rounded-xl border border-[#d3d7df] bg-[#f8f8fa] p-4"><b className="block text-xs">Intégrations Natives</b><div className="mt-3 flex flex-wrap gap-2">{current.integrations.map((item) => <span className="rounded-md border border-[#ccd2da] bg-white px-3 py-1.5 text-sm text-[#555b65]" key={item}>{item}</span>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white" id="configurateur">
        <div className="mx-auto grid max-w-[1220px] items-center gap-10 px-5 py-20 md:px-7 lg:grid-cols-2 lg:py-24">
          <div><h2 className="font-display text-[43px] font-bold leading-[1.12] md:text-[54px]">Composez votre<br />architecture</h2><p className="mt-5 max-w-[510px] text-[17px] leading-[1.6] text-[#aebbd0]">Ne payez que pour ce que vous utilisez. Sélectionnez votre secteur et cochez les modules indispensables à votre croissance pour obtenir une estimation immédiate.</p><div className="mt-7 border-l-2 border-brand-blue pl-5"><b className="font-display text-xl">Déploiement en 90 jours</b><small className="mt-1 block text-[#9aa8ba]">Méthodologie agile garantie.</small></div></div>
          <div className="overflow-hidden rounded-[18px] bg-white text-[#171b22] shadow-[0_25px_70px_rgba(0,0,0,.4)]">
            <div className="h-2 bg-[#e4e5e8]"><div className="h-full bg-brand-blue transition-all" style={{ width: `${step * 33.333}%` }} /></div>
            <div className="p-7 md:p-9"><div className="flex justify-between text-[11px] font-bold"><span className="text-brand-blue">Étape {step}/3</span><span className="text-[#858b94]">{step === 1 ? "Secteur d’activité" : step === 2 ? "Modules" : "Votre estimation"}</span></div>
              {step === 1 && <><h3 className="mt-6 font-display text-[25px] font-bold">Quel est votre secteur ?</h3><div className="mt-6 grid grid-cols-2 gap-3">{sectors.map(({ label, icon: Icon }) => <button className={`flex min-h-[66px] flex-col items-center justify-center rounded-lg border text-sm font-bold transition ${sector === label ? "border-brand-blue bg-brand-ice text-brand-blue" : "border-[#d0d4dc] hover:border-brand-blue"}`} key={label} onClick={() => setSector(label)}><Icon size={21} /><span className="mt-1">{label}</span></button>)}</div><button className="mt-7 w-full rounded-lg bg-brand-blue py-3.5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50" disabled={!sector} onClick={() => setStep(2)}>Continuer</button></>}
              {step === 2 && <><h3 className="mt-6 font-display text-[25px] font-bold">Choisissez vos priorités</h3><div className="mt-6 space-y-3">{["Finance & pilotage", "Gestion commerciale", "Ressources humaines", "Stocks & opérations"].map((item, index) => <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#d0d4dc] p-4" key={item}><input className="accent-brand-blue" type="checkbox" defaultChecked={index < 2} /> <span className="font-semibold">{item}</span></label>)}</div><div className="mt-7 flex gap-3"><button className="w-1/3 rounded-lg border border-[#c9ced6] py-3 font-bold" onClick={() => setStep(1)}>Retour</button><button className="flex-1 rounded-lg bg-brand-blue py-3 font-bold text-white" onClick={() => setStep(3)}>Voir mon estimation</button></div></>}
              {step === 3 && <div className="py-7 text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#eaf8f1] text-[#168356]"><Check size={34} /></span><h3 className="mt-5 font-display text-[27px] font-bold">Architecture prête</h3><p className="mx-auto mt-3 max-w-[370px] text-sm leading-6 text-[#68707c]">Votre configuration pour le secteur {sector} est prête. Un expert peut maintenant affiner votre estimation.</p><a className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 font-bold text-white" href="mailto:contact@tech-erp.com">Recevoir mon estimation <ArrowRight size={18} /></a><button className="mt-4 block w-full text-sm text-[#6c727c] underline" onClick={() => setStep(1)}>Recommencer</button></div>}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-line bg-white px-5 pb-7 pt-14" id="contact">
        <div className="mx-auto grid max-w-[1164px] gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_.9fr_.9fr_1.1fr_1.2fr]">
          <div><Brand /><p className="mt-4 max-w-[190px] text-[13px] leading-5 text-brand-muted">L’excellence opérationnelle au service de votre croissance.</p></div>
          <FooterColumn title="Solutions" links={["Gestion Financière", "Chaîne Logistique", "Ressources Humaines", "Intelligence Client"]} />
          <FooterColumn title="Secteurs" links={["Industrie", "Retail & Commerce", "Services & Santé", "Secteur Public"]} />
          <div><b className="text-[11px] uppercase tracking-wider">Contact</b></div>
          <div><b className="text-[11px] uppercase tracking-wider">Newsletter</b>{subscribed ? <p className="mt-4 text-sm text-[#168356]">Merci, à bientôt !</p> : <form className="mt-4 flex flex-col gap-2" onSubmit={subscribe}><input className="rounded-md border border-[#bdc4cf] px-3 py-2.5 text-sm" type="email" required placeholder="votre@email.com" /><button className="rounded-md bg-black py-2.5 text-sm font-bold text-white">S’abonner</button></form>}</div>
        </div>
        <div className="mx-auto mt-14 max-w-[1164px] border-t border-brand-line pt-6 text-xs text-[#737b88]">© 2026 GSM ERP. Tous droits réservés.</div>
      </footer>
    </main>
  );
}

function Brand() { return <Link className="inline-flex items-center whitespace-nowrap font-display text-xl font-bold text-black" href="/">GSM ERP</Link>; }

function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div><b className="text-[11px] uppercase tracking-wider">{title}</b><div className="mt-4 flex flex-col gap-2.5">{links.map((link) => <a className="text-[13px] text-brand-muted hover:text-brand-blue" href="#modules" key={link}>{link}</a>)}</div></div>; }

function DashboardPreview({ title }: { title: string }) {
  return <div className="overflow-hidden rounded-xl border border-[#d5dae2] bg-white shadow-sm"><div className="flex h-11 items-center justify-between border-b border-[#e6e9ee] px-4"><div className="flex items-center gap-2 text-xs font-bold"><span className="grid size-6 place-items-center rounded bg-brand-navy text-white"><BarChart3 size={14} /></span>{title} Overview</div><span className="rounded-md bg-[#f5f6f8] px-3 py-1 text-[10px] text-[#747b86]">Q4 2026</span></div><div className="grid grid-cols-[70px_1fr]"><aside className="border-r border-[#e8ebef] bg-[#f5f7fa] p-3"><span className="mb-3 block h-2 rounded bg-brand-blue" />{[1,2,3,4,5].map((item) => <span className="mb-4 block h-1.5 rounded bg-[#c8ced7]" key={item} />)}</aside><div className="p-5"><b className="text-xs">Revenue Growth Trend</b><svg className="mt-5 h-[145px] w-full" viewBox="0 0 500 150" aria-label="Évolution du chiffre d’affaires"><defs><linearGradient id="solutionArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#164f99" stopOpacity=".72"/><stop offset="1" stopColor="#164f99" stopOpacity=".04"/></linearGradient></defs><path d="M0 126 C45 112,55 88,105 94 S170 115,215 78 S275 92,320 63 S405 80,500 22 L500 150 L0 150Z" fill="url(#solutionArea)"/><path d="M0 126 C45 112,55 88,105 94 S170 115,215 78 S275 92,320 63 S405 80,500 22" fill="none" stroke="#123f79" strokeWidth="3"/></svg><div className="mt-5 grid grid-cols-3 gap-2">{[["Total Revenue","€985K"],["Net Profit","€124K"],["Operating Costs","€432K"]].map(([label,value]) => <div className="rounded-md border border-[#e1e4e9] p-2" key={label}><small className="block text-[9px] text-[#7b818b]">{label}</small><b className="mt-1 block text-sm">{value}</b></div>)}</div></div></div></div>;
}
