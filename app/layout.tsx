import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSM ERP | Votre métier, votre ERP",
  description: "Une plateforme ERP modulaire pensée pour accélérer votre croissance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
