import Image from "next/image"

import { BrandIcon } from "@/components/icons"
import { TextoLegal } from "@/components/texto-legal"
import { WHATSAPP_URL, sociais } from "@/lib/campanha"

// A faixa colorida oficial vira um módulo do grid: 12 quadrados, como uma peça concreta.
const faixa = ["#8ad400", "#54c126", "#009b4d", "#008c5a", "#00c2b0", "#00b4dc", "#00b9ff", "#0096e6", "#0078ff", "#0064e6", "#0050be", "#062b58"]

export function FooterConcreto() {
  return (
    <footer className="bg-papel">
      <div aria-hidden className="grid grid-cols-12">
        {faixa.map((c) => (
          <span key={c} className="cz-faixa" style={{ "--c": c } as React.CSSProperties} />
        ))}
      </div>
      <div className="cz-container grid gap-10 py-14 lg:grid-cols-12 lg:items-start">
        <div className="flex items-center gap-4 lg:col-span-3">
          <Image src="/img/logotipo-allianz.png" alt="Allianz" width={296} height={120} className="h-10 w-auto" />
          <span aria-hidden className="cz-header-sep" />
          <Image src="/img/logotipo-aba.png" alt="ABA" width={296} height={120} className="h-10 w-auto" />
        </div>
        <TextoLegal className="max-w-[68ch] text-sm leading-relaxed text-tinta/80 lg:col-span-6" linkClassName="cz-link font-semibold text-azul" />
        <ul className="flex gap-2 lg:col-span-3 lg:justify-end">
          {[...sociais, { href: WHATSAPP_URL, label: "WhatsApp da campanha", icon: "whatsapp" as const }].map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="cz-social">
                <BrandIcon name={s.icon} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
