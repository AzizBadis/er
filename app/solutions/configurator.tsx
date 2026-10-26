"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Factory, HeartPulse, ShoppingBag, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sectors = [
  { label: "Industrie", icon: Factory }, { label: "Retail", icon: ShoppingBag },
  { label: "Santé", icon: HeartPulse }, { label: "Services", icon: Wrench },
];

const priorities = ["Finance & pilotage", "Gestion commerciale", "Ressources humaines", "Stocks & opérations"];
const stepLabels = ["Secteur d’activité", "Modules", "Votre estimation"];

export function Configurator() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState("");
  const [selected, setSelected] = useState<string[]>(priorities.slice(0, 2));
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus();
  }, [step]);

  function toggle(item: string) {
    setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  }

  return (
    <section className="on-dark relative isolate bg-navy-deep text-white" id="configurateur"><div className="aurora absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="kicker text-accent-light">Configurateur</span>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">Composez votre architecture</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-on-navy">Ne payez que pour ce que vous utilisez. Sélectionnez votre secteur et cochez les modules indispensables à votre croissance pour obtenir une estimation immédiate.</p>
          <div className="mt-8 border-l-2 border-accent-light pl-5">
            <p className="text-xl font-bold">Déploiement en 90 jours</p>
            <p className="mt-1 text-on-navy">Méthodologie agile garantie.</p>
          </div>
        </div>

        <div className="on-light overflow-hidden rounded-3xl bg-white text-ink shadow-2xl shadow-black/40">
          <div className="h-1.5 bg-line" role="progressbar" aria-label="Progression" aria-valuemin={1} aria-valuemax={3} aria-valuenow={step}>
            <div className="h-full origin-left bg-accent transition-transform duration-300" style={{ transform: `scaleX(${step / 3})` }} />
          </div>
          <div className="p-6 md:p-9">
            <div className="flex justify-between text-sm font-semibold"><span className="text-accent">Étape {step}/3</span><span className="text-muted">{stepLabels[step - 1]}</span></div>

            {step === 1 && <>
              <h3 className="mt-6 text-2xl font-bold text-navy outline-none" ref={headingRef} tabIndex={-1}>Quel est votre secteur ?</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {sectors.map(({ label, icon: Icon }) => {
                  const active = sector === label;
                  return (
                    <button className={`flex min-h-20 flex-col items-center justify-center gap-1.5 rounded-2xl border-2 text-sm font-semibold transition-colors ${active ? "border-accent bg-accent-soft text-accent" : "border-line hover:border-line-strong"}`} key={label} onClick={() => setSector(label)} aria-pressed={active} type="button">
                      <Icon size={22} aria-hidden="true" />{label}
                    </button>
                  );
                })}
              </div>
              <button className="btn-primary mt-7 w-full" disabled={!sector} onClick={() => setStep(2)} type="button">Continuer <ArrowRight size={18} aria-hidden="true" /></button>
            </>}

            {step === 2 && <>
              <h3 className="mt-6 text-2xl font-bold text-navy outline-none" ref={headingRef} tabIndex={-1}>Choisissez vos priorités</h3>
              <fieldset className="mt-6 space-y-3">
                <legend className="sr-only">Modules prioritaires</legend>
                {priorities.map((item) => (
                  <label className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 transition-colors ${selected.includes(item) ? "border-accent bg-accent-soft/50" : "border-line hover:border-line-strong"}`} key={item}>
                    <input className="size-5 accent-accent" type="checkbox" checked={selected.includes(item)} onChange={() => toggle(item)} />
                    <span className="font-semibold">{item}</span>
                  </label>
                ))}
              </fieldset>
              <div className="mt-7 flex gap-3">
                <button className="btn-secondary" onClick={() => setStep(1)} type="button"><ArrowLeft size={18} aria-hidden="true" /> Retour</button>
                <button className="btn-primary flex-1" disabled={selected.length === 0} onClick={() => setStep(3)} type="button">Voir mon estimation</button>
              </div>
            </>}

            {step === 3 && <div className="py-4 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-success-soft text-success" aria-hidden="true"><Check size={32} /></span>
              <h3 className="mt-5 text-2xl font-bold text-navy outline-none" ref={headingRef} tabIndex={-1}>Architecture prête</h3>
              <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-muted">Votre configuration pour le secteur <b className="text-ink">{sector}</b> est prête. Un expert peut maintenant affiner votre estimation.</p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {selected.map((item) => <li className="rounded-full bg-canvas px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line" key={item}>{item}</li>)}
              </ul>
              <Link className="btn-primary mt-7" href="/contact">Recevoir mon estimation <ArrowRight size={18} aria-hidden="true" /></Link>
              <button className="mx-auto mt-3 block min-h-11 text-sm font-semibold text-muted underline underline-offset-4 hover:text-ink" onClick={() => setStep(1)} type="button">Recommencer</button>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}
