import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "GSM ERP | Votre métier, votre ERP",
  description: "Une plateforme ERP modulaire pensée pour accélérer votre croissance.",
};

export const viewport: Viewport = { themeColor: "#0f172a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body suppressHydrationWarning>
        <a className="sr-only z-[100] rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4" href="#contenu">Aller au contenu</a>
        <SiteHeader />
        <main className="overflow-x-clip" id="contenu" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
