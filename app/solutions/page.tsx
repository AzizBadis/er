import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Configurator } from "./configurator";
import { ModuleExplorer } from "./module-explorer";

export const metadata: Metadata = {
  title: "Solutions | GSM ERP",
  description: "Finance, logistique, RH, CRM et opérations : découvrez les modules intégrés de GSM ERP.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-line bg-linear-to-b from-canvas to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="kicker text-accent">Solutions ERP</span>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-[3.4rem]">Une plateforme complète, tous vos processus</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">Découvrez la suite d’applications métiers intégrées. Naviguez à travers nos modules spécialisés et composez une architecture logicielle qui s’adapte précisément à la réalité de votre secteur.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#configurateur">Composer mon ERP <ArrowRight size={18} aria-hidden="true" /></a>
              <a className="btn-secondary" href="#modules">Découvrir les modules</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-canvas shadow-xl shadow-navy/10">
            <Image className="object-cover" src="/erp-dashboard.png" alt="Aperçu de la plateforme GSM ERP" fill priority sizes="(max-width: 1024px) 92vw, 48vw" />
          </div>
        </div>
      </section>

      <ModuleExplorer />
      <Configurator />
    </>
  );
}
