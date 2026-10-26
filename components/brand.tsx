import Link from "next/link";

export function Brand({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link className={`inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-lg font-extrabold tracking-tight ${tone === "light" ? "text-white" : "text-navy"}`} href="/" aria-label="GSM ERP — accueil">
      <span className="grid size-8 place-items-center rounded-xl bg-linear-to-br from-accent-bright to-accent text-[13px] font-extrabold text-white shadow-glow" aria-hidden="true">G</span>
      GSM ERP
    </Link>
  );
}
