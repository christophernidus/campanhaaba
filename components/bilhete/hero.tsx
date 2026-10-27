import Image from "next/image"

import { BotaoBilhete, Campo, Cupom } from "@/components/bilhete/cupom"

export function HeroBilhete() {
  return (
    <section aria-labelledby="bt-hero-title" className="bt-hero">
      <div className="bt-container py-10 lg:py-14">
        <Cupom
          className="bt-cupom-hero"
          canhoto={
            <div className="flex h-full flex-col gap-5">
              <p className="bt-rotulo">Canhoto do participante</p>
              <Campo rotulo="Nº da sorte">
                <span className="bt-carbono bt-carbono-vazio" aria-label="Enviado em até 24 horas após a compra">
                  _ _ _ _ _
                </span>
              </Campo>
              <p className="text-sm text-tinta/75">Seus números chegam em até 24 horas.</p>
              <Campo rotulo="Tarifa">
                <span className="bt-carbono text-4xl">R$ 70,00</span>
              </Campo>
              <Campo rotulo="Sorteio">Loteria Federal, 20/12/2026</Campo>
              <BotaoBilhete className="mt-auto w-full" />
            </div>
          }
        >
          <div className="flex items-center justify-between gap-4 border-b-2 border-azul pb-3">
            <span className="bt-rotulo">Bilhete beneficente</span>
            <span className="bt-rotulo text-vinho">2026</span>
          </div>
          <div className="grid gap-6 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <h1 id="bt-hero-title" className="bt-display">
                Ação Beneficente da ABA 2026
              </h1>
              <p className="mt-3 text-2xl text-vinho">Juntos, conseguimos transformar vidas.</p>
            </div>
            <Image
              src="/img/premios-podio.png"
              alt="Os prêmios: Toyota Corolla Cross, notebook Dell, Galaxy A56, Echo Show 8 e Smart TV"
              width={1463}
              height={1075}
              priority
              sizes="(min-width: 1024px) 460px, 85vw"
              className="bt-podio mx-auto w-full max-w-[460px]"
            />
          </div>
          <div className="bt-campos mt-6 grid grid-cols-2 sm:grid-cols-4">
            <Campo rotulo="Pagamento">PIX</Campo>
            <Campo rotulo="Válido de">18/10/2026</Campo>
            <Campo rotulo="Até">17/12/2026</Campo>
            <Campo rotulo="Sorteio">20/12/2026</Campo>
          </div>
        </Cupom>
      </div>
    </section>
  )
}
