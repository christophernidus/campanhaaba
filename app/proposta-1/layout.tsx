import type { Metadata } from "next"
import { Archivo } from "next/font/google"

import "./concreto.css"

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] })

export const metadata: Metadata = { title: "Ação Beneficente da ABA 2026" }

export default function ConcretoLayout({ children }: LayoutProps<"/proposta-1">) {
  return <div className={`${archivo.variable} concreto flex min-h-full flex-1 flex-col`}>{children}</div>
}
