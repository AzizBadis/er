export function SectionHeading({ kicker, title, children, align = "left", tone = "dark" }: { kicker: string; title: string; children?: React.ReactNode; align?: "left" | "center"; tone?: "dark" | "light" }) {
  return (
    <div className={`reveal mb-10 max-w-2xl md:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className={tone === "light" ? "pill border-white/15 bg-white/5 text-accent-light" : "pill"}>
        <span className={`size-1.5 rounded-full ${tone === "light" ? "bg-accent-light" : "bg-accent"}`} aria-hidden="true" />{kicker}
      </span>
      <h2 className={`mt-5 text-3xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1] ${tone === "light" ? "text-white" : "text-navy"}`}>{title}</h2>
      {children && <p className={`mt-4 text-base leading-relaxed md:text-lg ${tone === "light" ? "text-on-navy" : "text-muted"}`}>{children}</p>}
    </div>
  );
}
