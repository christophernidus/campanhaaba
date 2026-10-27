import Image from "next/image"

import { BotaoBilhete } from "@/components/bilhete/cupom"
import { nav } from "@/lib/campanha"

export function HeaderBilhete() {
  return (
    <header className="bt-header sticky top-0 z-50">
      <div className="bt-container flex items-center gap-6 py-3">
        <a href="#topo" className="flex shrink-0 items-center gap-4" aria-label="Ação Beneficente da ABA, início">
          <Image src="/img/logotipo-allianz.png" alt="Allianz" width={296} height={120} className="h-9 w-auto" priority />
          <span aria-hidden className="h-8 w-px bg-azul/25" />
          <Image src="/img/logotipo-aba.png" alt="ABA" width={296} height={120} className="h-9 w-auto" priority />
        </a>
        <nav aria-label="Principal" className="ml-auto hidden lg:block">
          <ul className="flex gap-7">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="bt-nav-link">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <BotaoBilhete compacto className="ml-auto lg:ml-0" />
      </div>
      <nav aria-label="Seções" className="border-t border-azul/10 lg:hidden">
        <ul className="bt-container flex gap-6 overflow-x-auto py-2.5 whitespace-nowrap">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="bt-nav-link">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
