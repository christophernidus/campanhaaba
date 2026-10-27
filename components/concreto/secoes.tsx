import Image from "next/image"
import { ArrowDownToLineIcon } from "lucide-react"

import { BotaoConcreto } from "@/components/concreto/botao"
import { FaqAccordion } from "@/components/faq-accordion"
import { BrandIcon } from "@/components/icons"
import { EMAIL, RELATORIO_ATUAL, WHATSAPP_URL, passos, relatorios } from "@/lib/campanha"

export function MensagemConcreto() {
  return (
    <section aria-labelledby="cz-msg-title" className="cz-secao relative overflow-x-clip bg-rosa">
      <span aria-hidden className="cz-msg-forma" />
      <div className="cz-container relative grid gap-10 lg:grid-cols-12">
        <h2 id="cz-msg-title" className="cz-h2 text-azul lg:col-span-6">
          Sua solidariedade pode mudar futuros.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-azul-escuro lg:col-span-5 lg:col-start-8">
          <p className="text-2xl leading-snug font-semibold text-vinho">
            Adquira um número, concorra a prêmios incríveis e contribua para a continuidade dos nossos projetos sociais.
          </p>
          <p>
            Cada número comprado fortalece essa rede de apoio que acolhe, inspira e abre caminhos para quem mais precisa. E, para
            celebrar esse gesto de generosidade, você participa automaticamente do sorteio de diversos prêmios.
          </p>
          <p>
            Junte-se a nós nessa corrente do bem. Sua contribuição tem o poder de gerar oportunidades, transformar vidas e construir
            um futuro melhor. Boa sorte!
          </p>
        </div>
      </div>
    </section>
  )
}

const formasPasso = ["cz-passo-circulo", "cz-passo-quadrado", "cz-passo-quarto"]

export function PassosConcreto() {
  return (
    <section id="como-participar" aria-labelledby="cz-passos-title" className="cz-secao">
      <div className="cz-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="cz-passos-title" className="cz-h2 text-azul">
            Participar é
            <br />
            muito simples
          </h2>
          <BotaoConcreto />
        </div>
        <ol className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {passos.map((p, i) => (
            <li key={p.titulo} className="reveal">
              <span aria-hidden className={`cz-passo-forma ${formasPasso[i]}`}>
                {i + 1}
              </span>
              <h3 className="cz-h3 mt-8 text-azul">{p.titulo}</h3>
              <p className="mt-3 max-w-[30ch] text-lg text-tinta/80">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function GanhadoresConcreto() {
  return (
    <section id="ganhadores" aria-labelledby="cz-ganh-title" className="cz-secao overflow-x-clip bg-vinho text-white">
      <div className="cz-container grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="cz-ganh-title" className="cz-h2">
            Ganhadores
          </h2>
          <p className="mt-6 max-w-[36ch] text-xl leading-relaxed text-white/85">
            O sorteio usa a extração da Loteria Federal de 20/12/2026. Os nomes e números da sorte ficam publicados aqui por até 15
            dias.
          </p>
        </div>
        <div className="cz-data-bloco lg:col-span-7">
          <span aria-hidden className="cz-data-circulo" />
          <p className="relative">
            <span className="block text-2xl font-semibold">Resultado em</span>
            <time dateTime="2026-12-21" className="cz-data">
              21/12
            </time>
            <span className="block text-2xl font-semibold tabular-nums">2026</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export function DuvidasConcreto() {
  return (
    <section id="duvidas" aria-labelledby="cz-duv-title" className="cz-secao">
      <div className="cz-container grid gap-12 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="cz-duv-title" className="cz-h2 text-azul">
            Dúvidas
          </h2>
          <p className="mt-5 text-lg text-tinta/75">Não encontrou sua resposta? Fale com a organização.</p>
          <ul className="mt-5 space-y-3 text-lg font-semibold text-azul">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="cz-link inline-flex items-center gap-2">
                <BrandIcon name="whatsapp" className="size-5 text-whatsapp" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="cz-link break-all">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <FaqAccordion
          className="cz-faq lg:col-span-8"
          itemClassName="cz-faq-item"
          triggerClassName="cz-faq-trigger"
          contentClassName="cz-faq-conteudo"
        />
      </div>
    </section>
  )
}

export function ProjetoConcreto() {
  return (
    <section aria-labelledby="cz-proj-title" className="cz-secao bg-rosa-forte">
      <div className="cz-container">
        <h2 id="cz-proj-title" className="cz-h2 text-azul">
          Conheça o nosso projeto
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">
          <a href={RELATORIO_ATUAL} target="_blank" className="cz-banner lg:col-span-7">
            <Image
              src="/img/banner-conheca-o-projeto.jpg"
              alt="Capa do Relatório Bianual 2024-2025 da ABA: O futuro começa onde alguém decide acreditar"
              width={2822}
              height={1763}
              sizes="(min-width: 1024px) 700px, 100vw"
              className="w-full"
            />
          </a>
          <div className="lg:col-span-5">
            <h3 className="cz-h3 text-azul">Relatórios</h3>
            <p className="mt-2 text-lg text-tinta/75">Acompanhe aqui os números dos nossos projetos.</p>
            <ul className="mt-6">
              {relatorios.map((r) => (
                <li key={r.label} className="border-t-2 border-azul last:border-b-2">
                  {r.href ? (
                    <a href={r.href} target="_blank" className="cz-relatorio flex items-center gap-4 py-4 text-lg font-semibold text-azul">
                      <span className="flex-1">{r.label}</span>
                      <span className="cz-relatorio-icone">
                        <ArrowDownToLineIcon aria-hidden className="size-5" />
                      </span>
                      <span className="sr-only">(PDF)</span>
                    </a>
                  ) : (
                    <p className="flex items-center gap-4 py-4 text-lg text-tinta/75">
                      <span className="flex-1">{r.label}</span>
                      <span className="text-base">em breve</span>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
