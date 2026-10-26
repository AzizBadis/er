"use client";

import { BarChart3, Check } from "lucide-react";
import { useState } from "react";
import { onTabListKeyDown } from "@/components/tabs";

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

export function ModuleExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section className="bg-white" id="modules">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker text-accent">Modules</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-[2.5rem]">Explorez nos capacités métiers</h2>
          <p className="mt-4 text-lg text-muted">Sélectionnez un domaine pour découvrir les modules spécifiques et leurs fonctionnalités clés.</p>
        </div>

        <div className="mt-10 flex gap-1 overflow-x-auto rounded-full border border-line bg-canvas p-1.5 lg:mx-auto lg:w-fit" role="tablist" aria-label="Domaines fonctionnels" onKeyDown={(event) => onTabListKeyDown(event, tabs.length, activeTab, setActiveTab)}>
          {tabs.map((tab, index) => {
            const selected = activeTab === index;
            return (
              <button className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors ${selected ? "bg-white text-accent shadow-sm ring-1 ring-line" : "text-muted hover:text-ink"}`} key={tab.label} onClick={() => setActiveTab(index)} role="tab" id={`tab-${index}`} aria-selected={selected} aria-controls="module-panel" tabIndex={selected ? 0 : -1}>
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]" role="tabpanel" id="module-panel" aria-labelledby={`tab-${activeTab}`}>
          <div>
            <h3 className="text-2xl font-bold text-navy">{current.title}</h3>
            <ul className="mt-5 space-y-3">
              {current.modules.map(([title, copy]) => (
                <li className="card card-hover rounded-2xl p-5" key={title}>
                  <h4 className="font-bold text-ink">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{copy}</p>
                </li>
              ))}
            </ul>
            <h4 className="mt-8 text-xs font-bold uppercase tracking-[.12em] text-muted">Avantages clés</h4>
            <ul className="mt-4 space-y-3">
              {current.benefits.map((benefit) => <li className="flex items-center gap-3 text-base text-ink" key={benefit}><span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent text-white" aria-hidden="true"><Check size={12} strokeWidth={3} /></span>{benefit}</li>)}
            </ul>
          </div>
          <div>
            <DashboardPreview title={current.short} />
            <div className="mt-5 rounded-xl border border-line bg-canvas p-5">
              <h4 className="text-sm font-bold text-ink">Intégrations natives</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {current.integrations.map((item) => <li className="rounded-md border border-line bg-white px-3 py-1.5 text-sm text-muted" key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview({ title }: { title: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift" aria-label={`Illustration du tableau de bord ${title}`}>
      <div className="flex h-12 items-center justify-between border-b border-line px-4">
        <div className="flex items-center gap-2 text-sm font-bold text-ink"><span className="grid size-7 place-items-center rounded-md bg-navy text-white" aria-hidden="true"><BarChart3 size={14} /></span>Vue d’ensemble {title}</div>
        <span className="rounded-md bg-canvas px-2.5 py-1 text-xs font-medium text-muted">T4 2026</span>
      </div>
      <div className="grid grid-cols-[64px_1fr]" aria-hidden="true">
        <div className="border-r border-line bg-canvas p-3"><span className="mb-4 block h-2 rounded bg-accent" />{[1, 2, 3, 4, 5].map((item) => <span className="mb-4 block h-1.5 rounded bg-line-strong" key={item} />)}</div>
        <div className="p-5">
          <b className="text-sm text-ink">Évolution du chiffre d’affaires</b>
          <svg className="mt-4 h-[140px] w-full" viewBox="0 0 500 150" preserveAspectRatio="none">
            <defs><linearGradient id="solutionArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0369a1" stopOpacity=".35" /><stop offset="1" stopColor="#0369a1" stopOpacity="0" /></linearGradient></defs>
            {[37, 75, 112].map((y) => <line key={y} x1="0" x2="500" y1={y} y2={y} stroke="#e2e8f0" />)}
            <path d="M0 126 C45 112,55 88,105 94 S170 115,215 78 S275 92,320 63 S405 80,500 22 L500 150 L0 150Z" fill="url(#solutionArea)" />
            <path d="M0 126 C45 112,55 88,105 94 S170 115,215 78 S275 92,320 63 S405 80,500 22" fill="none" stroke="#0369a1" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[["Chiffre d’affaires", "985 k€"], ["Résultat net", "124 k€"], ["Charges", "432 k€"]].map(([label, value]) => <div className="rounded-lg border border-line p-2.5" key={label}><span className="block text-xs text-muted">{label}</span><b className="mt-1 block text-sm tabular-nums text-ink">{value}</b></div>)}
          </div>
        </div>
      </div>
    </figure>
  );
}
