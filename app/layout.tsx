import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campanhaaba.com.br"),
  title: "Ação Beneficente da ABA 2026",
  description:
    "Compre seu bilhete de R$ 70,00, concorra a um Toyota Corolla Cross e outros prêmios e ajude a manter os projetos sociais da ABA.",
  openGraph: {
    title: "Ação Beneficente da ABA 2026",
    description: "Juntos, conseguimos transformar vidas.",
    images: ["/img/premios.png"],
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
