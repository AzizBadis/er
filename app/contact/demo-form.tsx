"use client";

import { ArrowLeft, ArrowRight, Building2, CalendarDays, Check, Lock, Mail, Phone } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  demoDate: string;
  need: string;
};

const initialForm: DemoForm = { firstName: "", lastName: "", email: "", phone: "", company: "", demoDate: "", need: "" };
const stepLabels = ["Coordonnées", "Entreprise", "Confirmation"];

export function DemoForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus();
  }, [step]);

  function update(field: keyof DemoForm, value: string) { setForm(current => ({ ...current, [field]: value })); }
  function next(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStep(2); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStep(3); }

  const formattedDate = form.demoDate ? new Date(`${form.demoDate}T00:00`).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "";

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
        <ol className="grid grid-cols-3 border-b border-line bg-canvas" aria-label="Étapes de la demande">
          {stepLabels.map((label, index) => {
            const n = index + 1;
            const done = n < step;
            const current = n === step;
            return (
              <li className={`flex items-center gap-2.5 px-4 py-4 text-sm font-semibold md:px-6 ${current ? "text-accent" : done ? "text-ink" : "text-subtle"}`} key={label} aria-current={current ? "step" : undefined}>
                <span className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${current ? "bg-accent text-white" : done ? "bg-success-soft text-success" : "bg-white text-subtle ring-1 ring-line-strong"}`} aria-hidden="true">{done ? <Check size={14} strokeWidth={3} /> : n}</span>
                <span className="hidden sm:inline">{label}</span>
                <span className="sr-only sm:hidden">{label}</span>
              </li>
            );
          })}
        </ol>

        <div className="p-6 md:p-8">
          {step === 1 && <form onSubmit={next}>
            <h2 className="text-xl font-bold text-navy outline-none" ref={headingRef} tabIndex={-1}>Vos coordonnées</h2>
            <div className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Prénom" id="firstName"><input className="field" id="firstName" value={form.firstName} onChange={e => update("firstName", e.target.value)} autoComplete="given-name" required /></Field>
              <Field label="Nom" id="lastName"><input className="field" id="lastName" value={form.lastName} onChange={e => update("lastName", e.target.value)} autoComplete="family-name" required /></Field>
            </div>
            <Field label="E-mail professionnel" id="email"><IconInput icon={<Mail size={18} />}><input className="field pl-11" id="email" value={form.email} onChange={e => update("email", e.target.value)} type="email" autoComplete="email" placeholder="prenom.nom@entreprise.com" required /></IconInput></Field>
            <Field label="Téléphone" id="phone"><IconInput icon={<Phone size={18} />}><input className="field pl-11" id="phone" value={form.phone} onChange={e => update("phone", e.target.value)} type="tel" autoComplete="tel" placeholder="+216 99 999 999" required /></IconInput></Field>
            </div>
            <button className="btn-primary mt-7 w-full" type="submit">Continuer <ArrowRight size={18} aria-hidden="true" /></button>
          </form>}

          {step === 2 && <form onSubmit={submit}>
            <h2 className="text-xl font-bold text-navy outline-none" ref={headingRef} tabIndex={-1}>Votre entreprise</h2>
            <div className="mt-6 space-y-5">
            <Field label="Entreprise" id="company"><IconInput icon={<Building2 size={18} />}><input className="field pl-11" id="company" value={form.company} onChange={e => update("company", e.target.value)} autoComplete="organization" required /></IconInput></Field>
            <Field label="Date souhaitée pour la démonstration" id="demoDate"><IconInput icon={<CalendarDays size={18} />}><input className="field pl-11" id="demoDate" value={form.demoDate} onChange={e => update("demoDate", e.target.value)} type="date" required /></IconInput></Field>
            <Field label="Votre besoin principal" id="need" hint="Quelques lignes suffisent : contexte, outils actuels, objectifs."><textarea className="field min-h-32 resize-y" id="need" aria-describedby="need-hint" value={form.need} onChange={e => update("need", e.target.value)} required /></Field>
            </div>
            <div className="mt-7 flex gap-3">
              <button className="btn-secondary" type="button" onClick={() => setStep(1)}><ArrowLeft size={18} aria-hidden="true" /> Retour</button>
              <button className="btn-primary flex-1" type="submit">Réserver ma démo <ArrowRight size={18} aria-hidden="true" /></button>
            </div>
          </form>}

          {step === 3 && <div className="py-8 text-center" role="status">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-success-soft text-success" aria-hidden="true"><Check size={32} strokeWidth={2.5} /></span>
            <h2 className="mt-6 text-2xl font-bold text-navy outline-none" ref={headingRef} tabIndex={-1}>Votre demande est envoyée</h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">Merci {form.firstName}. Votre demande de démonstration pour <b className="text-ink">{form.company}</b>, prévue le <b className="text-ink">{formattedDate}</b>, a bien été enregistrée.</p>
            <button className="mt-6 min-h-11 text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-hover" type="button" onClick={() => { setForm(initialForm); setStep(1); }}>Envoyer une autre demande</button>
          </div>}
        </div>
      </div>
      <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted"><Lock className="mt-0.5 shrink-0 text-accent" size={18} aria-hidden="true" />Vos données sont sécurisées et ne seront jamais partagées avec des tiers. Conformité stricte au RGPD.</p>
    </div>
  );
}

function Field({ label, id, hint, children }: { label: string; id: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-ink" htmlFor={id}>{label} <span className="text-accent" aria-hidden="true">*</span></label>
      {children}
      {hint && <p className="mt-1.5 text-sm text-muted" id={`${id}-hint`}>{hint}</p>}
    </div>
  );
}

function IconInput({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return <div className="relative"><span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtle" aria-hidden="true">{icon}</span>{children}</div>;
}
