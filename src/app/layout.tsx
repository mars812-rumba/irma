import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "IRMA — сложные охотничьи экспедиции", template: "%s — IRMA" },
  description: "IRMA организует сложные охотничьи экспедиции: район, команда, документы, прозрачная смета и резервные сценарии.",
  alternates: { canonical: `${siteUrl}/ru` },
  openGraph: { title: "IRMA — сложные охотничьи экспедиции", description: "Сложная охота должна быть сложной только в поле.", locale: "ru_RU", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
