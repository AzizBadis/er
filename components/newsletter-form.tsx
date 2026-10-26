"use client";

import { Check } from "lucide-react";
import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <h2 className="text-xs font-bold uppercase tracking-[.12em] text-ink">Newsletter</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted">Un regard expert sur votre transformation.</p>
      <div aria-live="polite">
        {subscribed ? (
          <p className="mt-4 flex items-center gap-2 rounded-lg bg-success-soft px-3 py-3 text-sm font-semibold text-success"><Check size={18} aria-hidden="true" /> Merci, à bientôt !</p>
        ) : (
          <form className="mt-4" onSubmit={subscribe}>
            <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="newsletter-email">Adresse e-mail</label>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <input className="field min-w-0" id="newsletter-email" type="email" autoComplete="email" required placeholder="vous@entreprise.com" />
              <button className="btn-dark shrink-0" type="submit">S’abonner</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
