import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { DemoForm } from "./demo-form";

export const metadata: Metadata = {
  title: "Réserver une démo | GSM ERP",
  description: "Réservez une démonstration personnalisée de GSM ERP avec nos experts fonctionnels.",
};

const includes = [
  ["Analyse de vos besoins", "Échange de 15 min sur vos défis actuels."],
  ["Visite guidée ciblée", "Démonstration des modules pertinents pour votre secteur."],
  ["Questions / Réponses", "Temps dédié avec nos experts fonctionnels."],
];

export default function ContactPage() {
  return (
    <section className="aurora bg-linear-to-b from-canvas to-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40 lg:px-8">
        <div className="max-w-2xl">
          <span className="pill"><span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />Prêt à transformer votre entreprise</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl">Réservez une démo personnalisée</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">Découvrez comment GSM ERP peut optimiser vos processus, réduire vos coûts et accélérer votre croissance grâce à nos solutions sur-mesure.</p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <DemoForm />

          <aside className="card p-7 md:p-8" aria-labelledby="demo-includes">
            <h2 className="text-xl font-bold text-navy" id="demo-includes">Ce que comprend la démo</h2>
            <ul className="mt-6 space-y-5">
              {includes.map(([title, copy]) => (
                <li className="flex gap-3" key={title}>
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent" aria-hidden="true"><Check size={14} strokeWidth={2.5} /></span>
                  <span><b className="block text-base text-ink">{title}</b><span className="mt-0.5 block text-sm leading-relaxed text-muted">{copy}</span></span>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-line">
              <Image className="object-cover" src="/erp-desktop.jpg" alt="Démonstration de la plateforme GSM ERP" fill sizes="(max-width: 1024px) 90vw, 400px" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
