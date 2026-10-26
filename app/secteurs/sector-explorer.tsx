"use client";

import Link from "next/link";
import {
  ArrowRight, Building2, Bus, Factory, GraduationCap, Hotel, Landmark, Leaf,
  ShoppingBag, Stethoscope, Tractor, Truck, Users, Utensils, Wrench,
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
    <div className="mt-14 grid items-start gap-8 lg:grid-cols-[340px_1fr]">
      <div>
        <h2 className="mb-4 text-sm font-bold uppercase tracking-[.12em] text-muted">{sectors.length} secteurs</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Secteurs d’activité" aria-orientation="vertical" onKeyDown={(event) => onTabListKeyDown(event, sectors.length, active, setActive)}>
          {sectors.map(({ name, summary, icon: ItemIcon }, index) => {
            const selected = active === index;
            return (
              <button className={`flex min-h-14 w-full items-center gap-3 rounded-xl border p-2.5 text-left transition-colors lg:p-3 ${selected ? "border-accent bg-white shadow-sm ring-1 ring-accent" : "border-transparent hover:border-line hover:bg-white"}`} key={name} onClick={() => select(index)} role="tab" id={`sector-tab-${index}`} aria-selected={selected} aria-controls="sector-panel" tabIndex={selected ? 0 : -1}>
                <span className={`grid size-10 shrink-0 place-items-center rounded-lg transition-colors ${selected ? "bg-accent text-white" : "bg-accent-soft text-accent"}`} aria-hidden="true"><ItemIcon size={20} /></span>
                <span className="min-w-0">
                  <span className={`block text-sm font-semibold leading-snug ${selected ? "text-accent" : "text-ink"}`}>{name}</span>
                  <span className="mt-0.5 hidden text-sm text-muted lg:block">{summary}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-navy/5 lg:sticky lg:top-24" ref={panelRef} role="tabpanel" id="sector-panel" aria-labelledby={`sector-tab-${active}`}>
        <div className="border-b border-line bg-linear-to-br from-white to-accent-soft/60 p-6 md:p-10">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[.12em] text-muted"><Icon className="text-accent" size={20} aria-hidden="true" />Fiche sectorielle</div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-[2.75rem] md:leading-[1.1]">{sector.name}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{sector.description}</p>
          <Link className="btn-primary mt-7" href="/contact">Voir la démo <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>

        <div className="p-6 md:p-10">
          <h3 className="text-lg font-bold text-navy">Aperçu interface</h3>
          <InterfacePreview sector={sector} />
        </div>

        <div className="border-t border-line bg-canvas px-6 py-5 md:px-10">
          <h3 className="text-sm font-bold text-ink">Modules clés</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sector.modules.map((module) => <li className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink" key={module}>{module}</li>)}
          </ul>
        </div>
      </article>
    </div>
  );
}

function InterfacePreview({ sector }: { sector: typeof sectors[number] }) {
  return (
    <div className="mt-5 grid gap-6 rounded-xl border border-line bg-canvas p-5 md:grid-cols-[.6fr_1.4fr]">
      <div>
        <p className="text-sm font-semibold text-muted">{sector.kpiLabel}</p>
        <p className="mt-1 text-4xl font-extrabold tabular-nums tracking-tight text-navy">{sector.kpi}</p>
        <div className="mt-5 flex h-16 items-end gap-2" aria-hidden="true">
          {[24, 32, 47, 42, 61].map((h, i) => <span className="flex-1 rounded-t bg-accent" key={i} style={{ height: h, opacity: 0.35 + i * 0.16 }} />)}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between"><b className="text-sm text-ink">Pilotage {sector.name}</b><span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-line">Semaine</span></div>
        <svg className="mt-4 h-[130px] w-full" viewBox="0 0 420 130" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="sectorArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0369a1" stopOpacity=".3" /><stop offset="1" stopColor="#0369a1" stopOpacity="0" /></linearGradient></defs>
          {[33, 66, 99].map((y) => <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="#e2e8f0" />)}
          <path d="M0 108 C45 92,70 105,110 75 S180 93,220 53 S285 80,330 42 S380 51,420 17 L420 130 L0 130Z" fill="url(#sectorArea)" />
          <path d="M0 108 C45 92,70 105,110 75 S180 93,220 53 S285 80,330 42 S380 51,420 17" fill="none" stroke="#0369a1" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}
