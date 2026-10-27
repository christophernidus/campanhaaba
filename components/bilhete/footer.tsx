import Image from "next/image"

import { BrandIcon } from "@/components/icons"
import { TextoLegal } from "@/components/texto-legal"
import { WHATSAPP_URL, sociais } from "@/lib/campanha"

export function FooterBilhete() {
  return (
    <footer className="bt-footer">
      <Image src="/img/faixa-colorida-footer.jpg" alt="" width={1205} height={32} className="h-2 w-full object-cover" />
      <div className="bt-container grid gap-8 py-12 lg:grid-cols-12 lg:items-start">
        <div className="flex items-center gap-4 lg:col-span-3">
          <Image src="/img/logotipo-allianz.png" alt="Allianz" width={296} height={120} className="h-9 w-auto" />
          <span aria-hidden className="h-8 w-px bg-azul/25" />
          <Image src="/img/logotipo-aba.png" alt="ABA" width={296} height={120} className="h-9 w-auto" />
        </div>
        <TextoLegal className="max-w-[68ch] text-sm leading-relaxed text-tinta/80 lg:col-span-6" linkClassName="bt-link font-semibold text-azul" />
        <ul className="flex gap-2 lg:col-span-3 lg:justify-end">
          {[...sociais, { href: WHATSAPP_URL, label: "WhatsApp da campanha", icon: "whatsapp" as const }].map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="bt-social">
                <BrandIcon name={s.icon} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
