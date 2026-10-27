import type { Metadata } from "next"
import { Barlow, Barlow_Condensed, Courier_Prime } from "next/font/google"

import "./bilhete.css"

const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin"], weight: ["400", "600"] })
const condensed = Barlow_Condensed({ variable: "--font-bt-cond", subsets: ["latin"], weight: ["600", "800"] })
const carbono = Courier_Prime({ variable: "--font-carbono", subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = { title: "Ação Beneficente da ABA 2026" }

export default function BilheteLayout({ children }: LayoutProps<"/proposta-2">) {
  return (
    <div className={`${barlow.variable} ${condensed.variable} ${carbono.variable} bilhete flex min-h-full flex-1 flex-col`}>
      {children}
    </div>
  )
}
