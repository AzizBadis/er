"use client";

import Link from "next/link";
import {
  ArrowRight, Building2, Bus, CheckCircle2, Factory, GraduationCap, Hotel, Landmark, Leaf,
  ShoppingBag, Stethoscope, Tractor, TrendingUp, Truck, Users, Utensils, Wrench,
} from "lucide-react";
import { useRef, useState } from "react";
import { onTabListKeyDown } from "@/components/tabs";

const sectors = [
  { name: "Industrie & Production", summary: "GPAO, Traçabilité, TRS", icon: Factory, description: "Orchestrez l’ensemble de votre chaîne de production. De la gestion des nomenclatures à la supervision en temps réel des lignes, optimisez vos flux et garantissez la traçabilité complète de vos produits finis.", kpi: "84,2 %", kpiLabel: "Taux de rendement synthétique", modules: ["Gestion Nomenclatures (BOM)", "Planification Sous-traitance", "Contrôle Qualité", "Maintenance (GMAO)"] },
  { name: "Retail & E-commerce", summary: "Omnicanal, Stocks, POS", icon: ShoppingBag, description: "Unifiez magasins, e-commerce et stocks dans une expérience omnicanale fluide. Pilotez vos ventes, vos marges et vos approvisionnements depuis une seule plateforme.", kpi: "+18 %", kpiLabel: "Croissance du panier moyen", modules: ["Caisse & POS", "E-commerce", "Stocks Omnicanaux", "Fidélité Client"] },
  { name: "Santé & Médico-social", summary: "DPI, Facturation, Planning", icon: Stethoscope, description: "Sécurisez les parcours patients, coordonnez les équipes et automatisez la facturation. Une gestion conforme, pensée pour les établissements de santé et médico-sociaux.", kpi: "99,8 %", kpiLabel: "Disponibilité des dossiers", modules: ["Dossier Patient", "Planning Soignant", "Facturation", "Stocks Pharmacie"] },
  { name: "BTP & Construction", summary: "Chantiers, Matériel, RH", icon: Wrench, description: "Maîtrisez la rentabilité de chaque chantier, l’affectation des équipes et la disponibilité du matériel. Anticipez les écarts et suivez l’avancement en direct.", kpi: "−22 %", kpiLabel: "Écarts budgétaires", modules: ["Suivi de Chantier", "Parc Matériel", "Achats Projet", "Main-d’œuvre"] },
  { name: "Agroalimentaire", summary: "Lots, DLC, Qualité", icon: Tractor, description: "Assurez la traçabilité des lots, la gestion des dates limites et la conformité qualité de la matière première au produit fini.", kpi: "100 %", kpiLabel: "Lots tracés", modules: ["Lots & Traçabilité", "DLC/DLUO", "Recettes", "Qualité"] },
  { name: "Transport & Logistique", summary: "Flotte, WMS, Itinéraires", icon: Truck, description: "Optimisez les tournées, le taux de remplissage et la gestion de flotte. Gardez une visibilité continue sur chaque livraison et chaque entrepôt.", kpi: "−16 %", kpiLabel: "Coût par livraison", modules: ["Gestion de Flotte", "WMS", "Planification", "Preuve de Livraison"] },
  { name: "Services & Conseil", summary: "Projets, Temps, Facturation", icon: Users, description: "Pilotez vos missions, les temps passés et la rentabilité des consultants. Automatisez la facturation selon vos jalons et contrats.", kpi: "+12 %", kpiLabel: "Taux d’occupation", modules: ["Gestion de Projets", "Feuilles de Temps", "Facturation", "Plan de Charge"] },
  { name: "Hôtellerie", summary: "Réservations, PMS, Achats", icon: Hotel, description: "Centralisez réservations, housekeeping, achats et pilotage financier pour offrir une expérience client irréprochable.", kpi: "+9 %", kpiLabel: "Taux d’occupation", modules: ["PMS", "Housekeeping", "Achats", "Revenue Management"] },
  { name: "Restauration", summary: "Stocks, Recettes, Marges", icon: Utensils, description: "Standardisez vos recettes, réduisez les pertes et suivez vos marges par établissement, service et produit.", kpi: "−14 %", kpiLabel: "Pertes matières", modules: ["Fiches Techniques", "Stocks", "Commandes", "Marges"] },
  { name: "Immobilier", summary: "Biens, Baux, Charges", icon: Building2, description: "Gérez votre patrimoine, vos baux et vos interventions avec une vision financière consolidée de chaque actif.", kpi: "96 %", kpiLabel: "Taux de recouvrement", modules: ["Patrimoine", "Baux", "Charges", "Maintenance"] },
  { name: "Finance", summary: "Risques, Conformité, Reporting", icon: Landmark, description: "Accélérez vos clôtures, fiabilisez vos contrôles et disposez d’un reporting réglementaire toujours à jour.", kpi: "−40 %", kpiLabel: "Temps de clôture", modules: ["Comptabilité", "Risques", "Conformité", "Consolidation"] },
  { name: "Éducation", summary: "Scolarité, Planning, Finance", icon: GraduationCap, description: "Simplifiez la gestion des inscriptions, des emplois du temps, de la facturation et des ressources pédagogiques.", kpi: "92 %", kpiLabel: "Taux de satisfaction", modules: ["Scolarité", "Planning", "Facturation", "Portail Étudiant"] },
  { name: "Agriculture", summary: "Parcelles, Cultures, Coûts", icon: Leaf, description: "Suivez parcelles, campagnes, intrants et rendements pour prendre des décisions fondées sur vos données terrain.", kpi: "+11 %", kpiLabel: "Rendement moyen", modules: ["Parcelles", "Campagnes", "Intrants", "Matériel"] },
  { name: "Secteur Public", summary: "Budget, Marchés, Services", icon: Bus, description: "Modernisez les processus publics, sécurisez l’exécution budgétaire et améliorez le suivi des services aux citoyens.", kpi: "100 %", kpiLabel: "Traçabilité budgétaire", modules: ["Budget", "Marchés Publics", "Patrimoine", "Services Citoyens"] },
];

export function SectorExplorer() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLElement>(null);
  const sector = sectors[active];
  const Icon = sector.icon;

  function select(index: number) {
    setActive(index);
    // On narrow screens the panel sits below the list; bring it into view.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panelRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    }
  }

  return (
    <div className="mt-16 grid items-start gap-8 lg:grid-cols-[380px_1fr] lg:gap-10">
      <div className="rounded-3xl border border-line bg-white/70 p-3 shadow-soft backdrop-blur lg:sticky lg:top-28">
        <div className="flex items-center justify-between px-3 pb-3 pt-2">
          <h2 className="kicker text-muted">Choisissez un secteur</h2>
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold tabular-nums text-accent">{sectors.length}</span>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:max-h-[calc(100vh-13rem)] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1" role="tablist" aria-label="Secteurs d’activité" aria-orientation="vertical" onKeyDown={(event) => onTabListKeyDown(event, sectors.length, active, setActive)}>
          {sectors.map(({ name, summary, icon: ItemIcon }, index) => {
            const selected = active === index;
            return (
              <button className={`group flex min-h-16 w-full items-center gap-4 rounded-2xl border p-3.5 text-left transition-all duration-200 ${selected ? "border-accent bg-white shadow-lift ring-1 ring-accent" : "border-transparent hover:border-line hover:bg-white hover:shadow-soft"}`} key={name} onClick={() => select(index)} role="tab" id={`sector-tab-${index}`} aria-selected={selected} aria-controls="sector-panel" tabIndex={selected ? 0 : -1}>
                <span className={`grid size-12 shrink-0 place-items-center rounded-xl transition-colors ${selected ? "bg-accent text-white shadow-glow" : "bg-accent-soft text-accent group-hover:bg-accent/15"}`} aria-hidden="true"><ItemIcon size={22} /></span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-base font-semibold leading-snug ${selected ? "text-accent" : "text-ink"}`}>{name}</span>
                  <span className="mt-0.5 block truncate text-sm text-muted">{summary}</span>
                </span>
                <ArrowRight className={`shrink-0 transition-all duration-200 ${selected ? "translate-x-0 text-accent opacity-100" : "-translate-x-1 text-subtle opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} size={18} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      <article className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift" ref={panelRef} role="tabpanel" id="sector-panel" aria-labelledby={`sector-tab-${active}`}>
        <div className="animate-panel-in" key={active}>
          <div className="relative overflow-hidden border-b border-line bg-linear-to-br from-white via-white to-accent-soft p-7 md:p-12">
            <div className="dot-grid absolute inset-y-0 right-0 w-1/2 [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden="true" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid size-16 place-items-center rounded-2xl bg-linear-to-br from-accent-bright to-accent text-white shadow-glow" aria-hidden="true"><Icon size={30} /></span>
                <div>
                  <p className="kicker text-muted">Fiche sectorielle</p>
                  <p className="mt-1 text-sm font-semibold text-accent">{sector.summary}</p>
                </div>
              </div>
              <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-navy md:text-5xl md:leading-[1.05]">{sector.name}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{sector.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="btn-primary px-6 text-base" href="/contact">Voir la démo <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link className="btn-secondary px-6 text-base" href="/solutions">Explorer les modules</Link>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-12">
            <h3 className="text-xl font-bold text-navy">Aperçu interface</h3>
            <InterfacePreview sector={sector} />
          </div>

          <div className="border-t border-line bg-canvas p-7 md:px-12 md:py-10">
            <h3 className="text-xl font-bold text-navy">Modules clés</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {sector.modules.map((module) => (
                <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 text-base font-medium text-ink shadow-soft" key={module}>
                  <CheckCircle2 className="shrink-0 text-accent" size={22} aria-hidden="true" />{module}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

function InterfacePreview({ sector }: { sector: typeof sectors[number] }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-[.75fr_1.25fr]">
      <div className="flex flex-col rounded-2xl bg-navy p-6 text-white">
        <p className="text-sm font-semibold text-on-navy">{sector.kpiLabel}</p>
        <p className="mt-2 text-5xl font-extrabold tabular-nums tracking-tight">{sector.kpi}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light"><TrendingUp size={16} aria-hidden="true" />Résultat moyen client</p>
        <div className="mt-auto flex h-20 items-end gap-2 pt-6" aria-hidden="true">
          {[30, 42, 58, 52, 76].map((h, i) => <span className="flex-1 rounded-t-md bg-accent-bright" key={i} style={{ height: h, opacity: 0.35 + i * 0.16 }} />)}
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-canvas p-6">
        <div className="flex items-center justify-between gap-3"><b className="text-base text-ink">Pilotage {sector.name}</b><span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">Semaine</span></div>
        <svg className="mt-5 h-[180px] w-full text-accent" viewBox="0 0 420 130" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="sectorArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="currentColor" stopOpacity=".3" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
          {[33, 66, 99].map((y) => <line className="text-line" key={y} x1="0" x2="420" y1={y} y2={y} stroke="currentColor" vectorEffect="non-scaling-stroke" />)}
          <path d="M0 108 C45 92,70 105,110 75 S180 93,220 53 S285 80,330 42 S380 51,420 17 L420 130 L0 130Z" fill="url(#sectorArea)" />
          <path d="M0 108 C45 92,70 105,110 75 S180 93,220 53 S285 80,330 42 S380 51,420 17" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="mt-3 flex justify-between text-xs font-medium text-subtle" aria-hidden="true">{["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => <span key={d}>{d}</span>)}</div>
      </div>
    </div>
  );
}

