import Image from "next/image"

import { premios } from "@/lib/campanha"

const formas = ["cz-fundo-circulo", "cz-fundo-quadrado", "cz-fundo-quarto", "cz-fundo-circulo-verde"]

export function PremiosConcreto() {
  return (
    <section id="premios" aria-labelledby="cz-premios-title" className="cz-secao bg-azul text-white">
      <div className="cz-container">
        <h2 id="cz-premios-title" className="cz-h2">
          Prêmios
        </h2>

        <div className="mt-12 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="cz-numeral text-celeste" aria-hidden>
              1º
            </p>
            <h3 className="cz-h3 mt-2">
              Toyota Corolla Cross
              <span className="block text-white/75">XR 2.0 Flex</span>
            </h3>
          </div>
          <div className="cz-palco lg:col-span-8">
            <span aria-hidden className="cz-palco-meia" />
            <Image
              src="/img/corolla-cross.png"
              alt="Toyota Corolla Cross XR preto, 1º prêmio"
              width={1825}
              height={862}
              sizes="(min-width: 1024px) 760px, 100vw"
              className="cz-corolla reveal"
            />
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {premios.map((p, i) => (
            <li key={p.img} className="cz-premio reveal">
              <div className={`cz-premio-palco ${formas[i]}`}>
                <Image src={p.img} alt="" width={p.w} height={p.h} sizes="260px" className="cz-premio-img" />
              </div>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="cz-numeral-sm text-celeste" aria-hidden>
                  {i + 2}º
                </span>
                <div>
                  <h3 className="text-xl leading-tight font-bold">
                    <span className="sr-only">{i + 2}º prêmio: </span>
                    {p.nome}
                  </h3>
                  <p className="mt-1 text-white/75">{p.detalhe}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-14 text-sm text-white/75">Imagens meramente ilustrativas.</p>
      </div>
    </section>
  )
}
