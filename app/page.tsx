import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BarChart3, Building2, Car, Check, Compass, Factory,
  GraduationCap, HardHat, HeartPulse, Hotel, Landmark, Lock, PackageCheck, Plug,
  Rocket, Settings2, ShieldCheck, Smartphone, Store, Tractor, TrendingUp, Truck, Users, Utensils, Warehouse,
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

const stats = [["99,9 %", "Disponibilité"], ["24/7", "Support expert"], ["14", "Secteurs couverts"], ["90 j", "Délai de déploiement"]];

const steps = [
  { icon: Compass, title: "Cadrage", copy: "Analyse de vos processus et définition d’une feuille de route claire." },
  { icon: Settings2, title: "Configuration", copy: "Activation et paramétrage des modules adaptés à votre secteur." },
  { icon: Rocket, title: "Déploiement", copy: "Mise en production, formation des équipes et suivi des résultats." },
];

export default function Home() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-deep text-white">
        <div className="aurora absolute inset-0 -z-10" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-36 pt-36 sm:px-6 md:pt-40 lg:grid-cols-[.95fr_1.05fr] lg:gap-12 lg:px-8 lg:pb-40">
          <div className="max-w-xl">
            <span className="pill border-white/15 bg-white/5 text-accent-light">
              <span className="relative flex size-2" aria-hidden="true"><span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-light opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-accent-light" /></span>
              ERP nouvelle génération
            </span>
            <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              Votre métier est unique. <span className="text-gradient">Votre ERP aussi.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-on-navy">Une plateforme de gestion unifiée, conçue pour l’excellence opérationnelle. Connectez vos équipes, automatisez vos flux et accélérez votre croissance.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary px-6" href="/contact">Réserver une démo <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link className="btn-on-dark px-6" href="/solutions">Explorer les solutions</Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-navy">
              {["Déploiement en 90 jours", "Conforme RGPD", "Support 24/7"].map((item) => <li className="flex items-center gap-2" key={item}><span className="grid size-5 place-items-center rounded-full bg-accent-light/15 text-accent-light" aria-hidden="true"><Check size={12} strokeWidth={3} /></span>{item}</li>)}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-accent-bright/20 blur-3xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="flex items-center gap-1.5 px-3 pb-2 pt-1" aria-hidden="true">
                {[0, 1, 2].map((dot) => <span className="size-2.5 rounded-full bg-white/20" key={dot} />)}
                <span className="ml-3 h-5 flex-1 rounded-full bg-white/10" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image className="object-cover" src="/erp-dashboard.png" alt="Tableau de bord Pilotadem affiché sur un écran d’ordinateur" fill priority sizes="(max-width: 1024px) 92vw, 52vw" />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-2 hidden w-56 animate-float rounded-2xl border border-white/60 bg-white/90 p-4 text-ink shadow-lift backdrop-blur-xl sm:block lg:-left-10" aria-hidden="true">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted"><TrendingUp className="text-success" size={14} />Clôture mensuelle</div>
              <p className="mt-1 text-2xl font-extrabold tabular-nums tracking-tight text-navy">−40 %</p>
              <div className="mt-3 flex h-8 items-end gap-1">{[30, 45, 38, 60, 72, 90].map((h, i) => <span className="flex-1 rounded-sm bg-accent" key={i} style={{ height: `${h}%`, opacity: .3 + i * .14 }} />)}</div>
            </div>
            <div className="absolute -right-2 -top-6 hidden items-center gap-3 rounded-2xl border border-white/60 bg-white/90 py-3 pl-3 pr-4 text-ink shadow-lift backdrop-blur-xl [animation-delay:-3s] animate-float sm:flex lg:-right-6" aria-hidden="true">
              <span className="grid size-9 place-items-center rounded-xl bg-success-soft text-success"><Check size={18} strokeWidth={3} /></span>
              <span><b className="block text-sm">Stocks synchronisés</b><span className="text-xs text-muted">3 entrepôts · à l’instant</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Chiffres clés">
        <dl className="card grid grid-cols-2 divide-line p-2 shadow-lift md:grid-cols-4 md:divide-x">
          {stats.map(([value, label]) => (
            <div className="px-5 py-5 md:px-8" key={label}>
              <dt className="text-sm font-medium text-muted">{label}</dt>
              <dd className="mt-1 text-3xl font-extrabold tabular-nums tracking-tight text-navy md:text-4xl">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8" id="secteurs">
        <SectionHeading kicker="Une expertise terrain" title="Des solutions pour chaque secteur">Notre architecture modulaire s’adapte précisément aux exigences de votre industrie.</SectionHeading>
        <ul className="reveal grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {sectors.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Link className="card card-hover group flex h-full min-h-32 flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center text-sm font-semibold text-ink hover:text-accent" href="/secteurs">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white" aria-hidden="true"><Icon size={22} strokeWidth={1.9} /></span>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative isolate border-y border-line bg-canvas" id="solutions">
        <div className="dot-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <SectionHeading kicker="Tout ce qu’il vous faut" title="Un écosystème fonctionnel complet">Activez les modules dont vous avez besoin, quand vous en avez besoin.</SectionHeading>

          <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-4">
            <BentoTile className="md:col-span-2 md:row-span-2" icon={BarChart3} title="Finance & Compta" copy="Une vision financière fiable, de la facturation au reporting, disponible en temps réel." bullets={["Facturation & recouvrement", "Rapprochement bancaire", "Déclarations fiscales"]}>
              <div className="mt-8 rounded-2xl border border-line bg-canvas p-5" aria-hidden="true">
                <div className="flex items-center justify-between text-sm"><b className="text-ink">Trésorerie</b><span className="rounded-full bg-success-soft px-2.5 py-0.5 text-xs font-bold text-success">+12,4 %</span></div>
                <svg className="mt-4 h-28 w-full" viewBox="0 0 400 110" preserveAspectRatio="none">
                  <defs><linearGradient id="homeArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="var(--color-accent)" stopOpacity=".3" /><stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" /></linearGradient></defs>
                  <path d="M0 92 C40 80,70 88,110 64 S180 76,220 46 S290 60,330 32 S375 30,400 12 L400 110 L0 110Z" fill="url(#homeArea)" />
                  <path d="M0 92 C40 80,70 88,110 64 S180 76,220 46 S290 60,330 32 S375 30,400 12" fill="none" stroke="var(--color-accent)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </BentoTile>
            <BentoTile className="md:col-span-2" icon={Warehouse} title="Supply Chain" copy="Pilotez vos stocks et vos approvisionnements avec une traçabilité de bout en bout." bullets={["Stocks multi-sites", "Achats & fournisseurs", "Expéditions & traçabilité"]} />
            <BentoTile icon={Users} title="Ressources Humaines" copy="Données collaborateurs, congés et notes de frais dans un espace unique." />
            <article className="reveal on-dark relative isolate flex flex-col overflow-hidden rounded-3xl bg-navy p-7 text-white">
              <div className="aurora absolute inset-0 -z-10" aria-hidden="true" />
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-accent-light" aria-hidden="true"><Lock size={22} /></span>
              <h3 className="mt-6 text-xl font-bold">Sécurité & conformité</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-navy">Hébergement sécurisé, sauvegardes quotidiennes et conformité RGPD.</p>
            </article>
            <article className="reveal card relative flex flex-col overflow-hidden p-7 md:col-span-2 md:flex-row md:items-center md:gap-6">
              <div className="md:flex-1">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true"><Smartphone size={22} /></span>
                <h3 className="mt-6 text-xl font-bold text-navy">Toujours avec vous</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">Validez, consultez et pilotez depuis votre mobile, où que vous soyez.</p>
              </div>
              <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-line md:mt-0 md:w-[46%]">
                <Image className="object-cover" src="/erp-mobile.jpg" alt="Application mobile Pilotadem affichée sur un téléphone" fill sizes="(max-width: 768px) 90vw, 280px" />
              </div>
            </article>
            <BentoTile className="md:col-span-2" icon={Plug} title="Intégrations natives" copy="Banques, e-commerce, transporteurs, paie : connectez vos outils existants sans ressaisie." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8" id="methode">
        <SectionHeading kicker="Une méthode éprouvée" title="Votre transformation, sans la complexité." align="center">Nos experts vous accompagnent du cadrage au déploiement, avec une feuille de route claire et des résultats mesurables.</SectionHeading>
        <ol className="relative grid gap-6 md:grid-cols-3">
          <span className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-linear-to-r from-transparent via-accent/40 to-transparent md:block" aria-hidden="true" />
          {steps.map(({ icon: Icon, title, copy }, index) => (
            <li className="reveal relative flex flex-col items-center text-center" key={title}>
              <span className="relative grid size-14 place-items-center rounded-2xl bg-navy text-white shadow-lift ring-8 ring-white" aria-hidden="true">
                <Icon size={22} />
                <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-accent text-[11px] font-bold tabular-nums">{index + 1}</span>
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy"><span className="sr-only">Étape {index + 1} : </span>{title}</h3>
              <p className="mt-2 max-w-xs text-base leading-relaxed text-muted">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
        <div className="reveal on-dark relative isolate mx-auto flex max-w-7xl flex-col items-start gap-8 overflow-hidden rounded-[2rem] bg-navy-deep px-7 py-14 text-white md:flex-row md:items-center md:justify-between md:px-16 md:py-20">
          <div className="aurora absolute inset-0 -z-10" aria-hidden="true" />
          <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-accent-bright/25 blur-3xl" aria-hidden="true" />
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl md:leading-[1.08]">Prêt à voir Pilotadem <span className="text-gradient">en action ?</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-on-navy">Une démonstration personnalisée, centrée sur vos processus et votre secteur.</p>
          </div>
          <Link className="btn-white shrink-0 px-7 py-4 text-base" href="/contact">Parler à un expert <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

function BentoTile({ icon: Icon, title, copy, bullets, className = "", children }: { icon: React.ComponentType<{ size?: number }>; title: string; copy: string; bullets?: string[]; className?: string; children?: React.ReactNode }) {
  return (
    <article className={`reveal card card-hover group flex flex-col p-7 ${className}`}>
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true"><Icon size={22} /></span>
        <Link className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white" href="/solutions" aria-label={`Découvrir le module ${title}`}><ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted md:text-base">{copy}</p>
      {bullets && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {bullets.map((bullet) => <li className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1.5 text-sm text-ink ring-1 ring-line" key={bullet}><Check className="shrink-0 text-accent" size={14} aria-hidden="true" />{bullet}</li>)}
        </ul>
      )}
      {children}
    </article>
  );
}
