import Image from "next/image"

import { BotaoConcreto } from "@/components/concreto/botao"
import { ReguaCampanha } from "@/components/regua-campanha"

export function HeroConcreto() {
  return (
    <section aria-labelledby="cz-hero-title" className="cz-hero">
      <div className="cz-container grid items-center gap-10 pt-10 pb-12 lg:grid-cols-12 lg:gap-8 lg:pt-14">
        <div className="lg:col-span-6">
          <h1 id="cz-hero-title" className="cz-display text-azul">
            Ação
            <br />
            Beneficente
            <br />
            da ABA 2026
          </h1>
          <p className="cz-lead mt-6 max-w-[22ch] text-vinho">Juntos, conseguimos transformar vidas.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <BotaoConcreto />
            <p className="text-lg text-azul">
              Bilhete de <strong className="font-bold tabular-nums">R$ 70,00</strong>, pago via PIX
            </p>
          </div>
        </div>

        {/* Composição concreta: as formas são o palco dos prêmios */}
        <div className="cz-composicao lg:col-span-6">
          <span aria-hidden className="cz-forma cz-forma-circulo" />
          <span aria-hidden className="cz-forma cz-forma-quarto" />
          <span aria-hidden className="cz-forma cz-forma-meia" />
          <span aria-hidden className="cz-forma cz-forma-ponto" />
          <Image
            src="/img/premios-podio.png"
            alt="Os prêmios: Toyota Corolla Cross, notebook Dell, Galaxy A56, Echo Show 8 e Smart TV"
            width={1463}
            height={1075}
            priority
            sizes="(min-width: 1024px) 600px, 92vw"
            className="cz-podio"
          />
        </div>
      </div>
      <div className="cz-container pb-14">
        <ReguaCampanha className="cz-regua" />
      </div>
    </section>
  )
}
