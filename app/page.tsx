import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Building2, Car, Check, Compass, Factory,
  GraduationCap, HardHat, HeartPulse, Hotel, Landmark, PackageCheck,
  Rocket, Settings2, ShieldCheck, Store, Tractor, Truck, Users, Utensils, Warehouse,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

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

const stats = [["99,9 %", "Disponibilité"], ["24/7", "Support expert"], ["14", "Secteurs couverts"], ["90 j", "Délai de déploiement"]];

const steps = [
  { icon: Compass, title: "Cadrage", copy: "Analyse de vos processus et définition d’une feuille de route claire." },
  { icon: Settings2, title: "Configuration", copy: "Activation et paramétrage des modules adaptés à votre secteur." },
  { icon: Rocket, title: "Déploiement", copy: "Mise en production, formation des équipes et suivi des résultats." },
];

export default function Home() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(3,105,161,.35),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-28 pt-16 sm:px-6 md:pt-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:px-8 lg:pb-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-accent-light">
              <span className="size-1.5 rounded-full bg-accent-light" aria-hidden="true" /> ERP nouvelle génération
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Votre métier est unique. <span className="text-accent-light">Votre ERP aussi.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-on-navy">Une plateforme de gestion unifiée, conçue pour l’excellence opérationnelle. Connectez vos équipes, automatisez vos flux et accélérez votre croissance.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary px-6" href="/contact">Réserver une démo <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link className="btn-on-dark px-6" href="/solutions">Explorer les solutions</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-navy">
              {["Déploiement en 90 jours", "Conforme RGPD", "Support 24/7"].map((item) => <li className="flex items-center gap-2" key={item}><Check className="text-accent-light" size={16} aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="relative pb-6 pl-4 sm:pl-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40">
              <Image className="object-cover" src="/erp-desktop.jpg" alt="Tableau de bord GSM ERP affiché sur un écran d’ordinateur" fill priority sizes="(max-width: 1024px) 92vw, 52vw" />
            </div>
            <div className="absolute bottom-0 left-0 aspect-video w-[44%] max-w-[240px] overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl shadow-black/40">
              <Image className="object-cover" src="/erp-mobile.jpg" alt="Application mobile GSM ERP affichée sur un téléphone" fill sizes="240px" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Chiffres clés">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-xl shadow-navy/5 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="bg-white px-5 py-6 md:px-8" key={label}>
              <dt className="text-sm font-medium text-muted">{label}</dt>
              <dd className="mt-1 text-3xl font-extrabold tabular-nums tracking-tight text-navy">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8" id="secteurs">
        <SectionHeading kicker="Une expertise terrain" title="Des solutions pour chaque secteur">Notre architecture modulaire s’adapte précisément aux exigences de votre industrie.</SectionHeading>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {sectors.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Link className="group flex h-full min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-line bg-white p-4 text-center text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:bg-accent-soft/40 hover:text-accent" href="/secteurs">
                <span className="grid size-11 place-items-center rounded-lg bg-accent-soft text-accent" aria-hidden="true"><Icon size={22} strokeWidth={1.9} /></span>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-canvas" id="solutions">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHeading kicker="Tout ce qu’il vous faut" title="Un écosystème fonctionnel complet">Activez les modules dont vous avez besoin, quand vous en avez besoin.</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map(({ icon: Icon, title, copy, bullets }) => (
              <article className="flex flex-col rounded-2xl border border-line bg-white p-7 transition-shadow duration-200 hover:shadow-lg hover:shadow-navy/5" key={title}>
                <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent" aria-hidden="true"><Icon size={24} /></span>
                <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{copy}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {bullets.map((bullet) => <li className="flex items-center gap-2.5 text-sm text-ink" key={bullet}><Check className="shrink-0 text-accent" size={16} aria-hidden="true" />{bullet}</li>)}
                </ul>
                <Link className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-semibold text-accent hover:text-accent-hover" href="/solutions">Découvrir le module <ArrowRight size={16} aria-hidden="true" /><span className="sr-only">{title}</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8" id="methode">
        <SectionHeading kicker="Une méthode éprouvée" title="Votre transformation, sans la complexité.">Nos experts vous accompagnent du cadrage au déploiement, avec une feuille de route claire et des résultats mesurables.</SectionHeading>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, copy }, index) => (
            <li className="relative rounded-2xl border border-line bg-white p-7" key={title}>
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-navy text-white" aria-hidden="true"><Icon size={22} /></span>
                <span className="text-sm font-bold tabular-nums text-subtle">Étape {index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="on-dark relative isolate mx-auto flex max-w-7xl flex-col items-start gap-8 overflow-hidden rounded-3xl bg-navy px-7 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_100%_0%,rgba(3,105,161,.45),transparent_70%)]" aria-hidden="true" />
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Prêt à voir GSM ERP en action ?</h2>
            <p className="mt-4 text-lg leading-relaxed text-on-navy">Une démonstration personnalisée, centrée sur vos processus et votre secteur.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link className="btn-white px-6" href="/contact">Parler à un expert <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
