import type { Metadata } from "next";
import { SectorExplorer } from "./sector-explorer";

export const metadata: Metadata = {
  title: "Secteurs | GSM ERP",
  description: "Des solutions ERP verticalisées pour 14 secteurs, avec modules pré-configurés et indicateurs adaptés.",
};

export default function SectorsPage() {
  return (
    <section className="bg-linear-to-b from-canvas to-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="kicker text-accent">Secteurs</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-[3.4rem]">Un ERP conçu autour de <span className="text-accent">votre métier</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">Découvrez comment nos solutions verticalisées répondent aux défis spécifiques de votre industrie, avec des modules pré-configurés et des indicateurs de performance adaptés.</p>
        </div>
        <SectorExplorer />
      </div>
    </section>
  );
}
