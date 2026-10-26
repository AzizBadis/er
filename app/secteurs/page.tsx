import type { Metadata } from "next";
import { SectorExplorer } from "./sector-explorer";

export const metadata: Metadata = {
  title: "Secteurs | Pilotadem",
  description: "Des solutions ERP verticalisées pour 14 secteurs, avec modules pré-configurés et indicateurs adaptés.",
};

export default function SectorsPage() {
  return (
    <section className="aurora bg-linear-to-b from-canvas to-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="pill"><span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />Secteurs</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-6xl lg:text-[4rem]">Un ERP conçu autour de <span className="text-accent">votre métier</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">Découvrez comment nos solutions verticalisées répondent aux défis spécifiques de votre industrie, avec des modules pré-configurés et des indicateurs de performance adaptés.</p>
        </div>
        <SectorExplorer />
      </div>
    </section>
  );
}
