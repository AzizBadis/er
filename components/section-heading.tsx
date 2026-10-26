export function SectionHeading({ kicker, title, children, align = "left", tone = "dark" }: { kicker: string; title: string; children?: React.ReactNode; align?: "left" | "center"; tone?: "dark" | "light" }) {
  return (
    <div className={`mb-10 max-w-2xl md:mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className={`kicker ${tone === "light" ? "text-accent-light" : "text-accent"}`}>{kicker}</span>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight md:text-[2.5rem] md:leading-[1.15] ${tone === "light" ? "text-white" : "text-navy"}`}>{title}</h2>
      {children && <p className={`mt-4 text-base leading-relaxed md:text-lg ${tone === "light" ? "text-on-navy" : "text-muted"}`}>{children}</p>}
    </div>
  );
}
