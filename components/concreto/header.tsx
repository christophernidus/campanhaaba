import Image from "next/image"

import { BotaoConcreto } from "@/components/concreto/botao"
import { nav } from "@/lib/campanha"

export function HeaderConcreto() {
  return (
    <header className="cz-header sticky top-0 z-50">
      <div className="cz-container flex items-center gap-6 py-3">
        <a href="#topo" className="flex shrink-0 items-center gap-4" aria-label="Ação Beneficente da ABA, início">
          <Image src="/img/logotipo-allianz.png" alt="Allianz" width={296} height={120} className="h-9 w-auto sm:h-10" priority />
          <span aria-hidden className="cz-header-sep" />
          <Image src="/img/logotipo-aba.png" alt="ABA" width={296} height={120} className="h-9 w-auto sm:h-10" priority />
        </a>
        <nav aria-label="Principal" className="ml-auto hidden lg:block">
          <ul className="flex gap-8">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="cz-nav-link">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <BotaoConcreto compacto className="ml-auto lg:ml-0" />
      </div>
      <nav aria-label="Seções" className="border-t border-azul/10 lg:hidden">
        <ul className="cz-container flex gap-6 overflow-x-auto py-2.5 whitespace-nowrap">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="cz-nav-link text-sm">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
