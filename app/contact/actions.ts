"use server";

const SECTORS = ["Industrie", "Retail", "Santé", "Services"] as const;
const MODULES =["Finance & pilotage", "Gestion commerciale", "Ressources humaines", "Stocks & opérations"] as const;

export type ProjectRequestInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  demoDate: string;
  need: string;
  sector?: string;
  modules?: string[];
};

export type ProjectRequestResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function createProjectRequest(input: ProjectRequestInput): Promise<ProjectRequestResult> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return { ok: false, error: "Le service est momentanément indisponible. Réessayez plus tard." };

  const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");
  const row = {
    first_name: clean(input.firstName, 100),
    last_name: clean(input.lastName, 100),
    email: clean(input.email, 254).toLowerCase(),
    phone: clean(input.phone, 30),
    company: clean(input.company, 200),
    demo_date: clean(input.demoDate, 10),
    need: clean(input.need, 5000),
    sector: SECTORS.find(s => s === input.sector) ?? null,
    modules: Array.isArray(input.modules) ? MODULES.filter(m => input.modules!.includes(m)) : [],
    source: input.sector ? "configurator" : "contact",
  };

  if (!row.first_name || !row.last_name || !row.company || !row.need) return { ok: false, error: "Merci de remplir tous les champs obligatoires." };
  if (!EMAIL_RE.test(row.email)) return { ok: false, error: "Adresse e-mail invalide." };
  if (row.phone.replace(/\D/g, "").length < 6) return { ok: false, error: "Numéro de téléphone invalide." };
  if (!DATE_RE.test(row.demo_date) || row.demo_date < new Date().toISOString().slice(0, 10)) return { ok: false, error: "Choisissez une date à venir pour la démonstration." };

  const res = await fetch(`${url}/rest/v1/project_requests`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("project_requests insert failed", res.status, await res.text());
    return { ok: false, error: "Votre demande n’a pas pu être enregistrée. Réessayez dans un instant." };
  }
  return { ok: true };
}
