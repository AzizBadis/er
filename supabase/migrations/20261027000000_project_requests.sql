-- Demandes de projet / démo envoyées depuis le site (formulaire /contact + configurateur /solutions).
create table if not exists public.project_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  -- Étape 1 : coordonnées
  first_name  text not null check (char_length(first_name) between 1 and 100),
  last_name   text not null check (char_length(last_name) between 1 and 100),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone       text not null check (char_length(phone) between 6 and 30),

  -- Étape 2 : entreprise
  company     text not null check (char_length(company) between 1 and 200),
  demo_date   date not null,
  need        text not null check (char_length(need) between 1 and 5000),

  -- Configurateur (optionnel)
  sector      text check (sector in ('Industrie', 'Retail', 'Santé', 'Services')),
  modules     text[] not null default '{}'
              check (modules <@ array['Finance & pilotage', 'Gestion commerciale', 'Ressources humaines', 'Stocks & opérations']),

  -- Suivi interne
  source      text not null default 'contact' check (source in ('contact', 'configurator')),
  status      text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'won', 'lost'))
);

create index if not exists project_requests_created_at_idx on public.project_requests (created_at desc);
create index if not exists project_requests_status_idx on public.project_requests (status);

-- RLS activé sans policy : seul le serveur (clé secrète / service_role) peut lire ou écrire.
alter table public.project_requests enable row level security;
