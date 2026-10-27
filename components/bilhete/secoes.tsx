import Image from "next/image"
import { DownloadIcon } from "lucide-react"

import { BotaoBilhete, Campo, Cupom } from "@/components/bilhete/cupom"
import { FaqAccordion } from "@/components/faq-accordion"
import { BrandIcon } from "@/components/icons"
import { EMAIL, RELATORIO_ATUAL, WHATSAPP_URL, passos, premios, relatorios } from "@/lib/campanha"

export function MensagemBilhete() {
  return (
    <section aria-labelledby="bt-msg-title" className="bt-secao">
      <div className="bt-container grid gap-10 text-papel lg:grid-cols-12">
        <h2 id="bt-msg-title" className="bt-h2 lg:col-span-6">
          Sua solidariedade pode mudar futuros.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-papel/85 lg:col-span-5 lg:col-start-8">
          <p className="text-2xl leading-snug text-papel">
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

export function PassosBilhete() {
  return (
    <section id="como-participar" aria-labelledby="bt-passos-title" className="bt-secao pt-0">
      <div className="bt-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="bt-passos-title" className="bt-h2 text-papel">
            Participar é muito simples
          </h2>
          <BotaoBilhete />
        </div>
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {passos.map((p, i) => (
            <Cupom
              as="li"
              key={p.titulo}
              className="bt-cupom-passo reveal"
              canhoto={
                <span className="bt-carbono bt-passo-num" aria-hidden>
                  {i + 1}
                </span>
              }
            >
              <span className="bt-rotulo">
                Etapa {i + 1} de {passos.length}
              </span>
              <h3 className="bt-h3 mt-3">{p.titulo}</h3>
              <p className="mt-2 text-lg text-tinta/80">{p.texto}</p>
            </Cupom>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function PremiosBilhete() {
  return (
    <section id="premios" aria-labelledby="bt-premios-title" className="bt-secao bt-secao-papel">
      <div className="bt-container">
        <h2 id="bt-premios-title" className="bt-h2 text-azul">
          Prêmios
        </h2>
        <Cupom
          as="article"
          className="bt-cupom-carro mt-10"
          canhoto={
            <div className="flex h-full flex-col justify-between gap-4">
              <Campo rotulo="Prêmio">
                <span className="bt-carbono text-6xl">1º</span>
              </Campo>
              <Campo rotulo="Sorteio">20/12/2026</Campo>
            </div>
          }
        >
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]">
            <div>
              <span className="bt-rotulo">1º prêmio</span>
              <h3 className="bt-h2 mt-2 text-azul">
                Toyota Corolla Cross
                <span className="block text-vinho">XR 2.0 Flex</span>
              </h3>
            </div>
            <Image
              src="/img/corolla-cross.png"
              alt="Toyota Corolla Cross XR preto"
              width={1825}
              height={862}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="bt-carro w-full"
            />
          </div>
        </Cupom>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {premios.map((p, i) => (
            <li key={p.img} className="bt-etiqueta reveal">
              <span aria-hidden className="bt-etiqueta-furo" />
              <span className="bt-rotulo">{i + 2}º prêmio</span>
              <Image src={p.img} alt="" width={p.w} height={p.h} sizes="240px" className="bt-etiqueta-img" />
              <h3 className="bt-h3 text-azul">{p.nome}</h3>
              <p className="text-tinta/75">{p.detalhe}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-tinta/70">Imagens meramente ilustrativas.</p>
      </div>
    </section>
  )
}

export function GanhadoresBilhete() {
  return (
    <section id="ganhadores" aria-labelledby="bt-ganh-title" className="bt-secao">
      <div className="bt-container">
        <h2 id="bt-ganh-title" className="bt-h2 text-papel">
          Ganhadores
        </h2>
        <Cupom
          as="article"
          className="bt-cupom-ganhadores mt-10"
          canhoto={
            <Campo rotulo="Resultado">
              <time dateTime="2026-12-21" className="bt-carbono text-4xl">
                21/12/2026
              </time>
            </Campo>
          }
        >
          <div className="relative grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div>
              <p className="bt-h3 text-azul">O sorteio usa a extração da Loteria Federal de 20/12/2026.</p>
              <p className="mt-3 max-w-[48ch] text-lg text-tinta/80">
                Os nomes e números da sorte ficam publicados aqui por até 15 dias.
              </p>
            </div>
            <span className="bt-carimbo" aria-label="Situação: aguardando sorteio">
              Aguardando
              <br />
              sorteio
            </span>
          </div>
        </Cupom>
      </div>
    </section>
  )
}

export function DuvidasBilhete() {
  return (
    <section id="duvidas" aria-labelledby="bt-duv-title" className="bt-secao pt-0">
      <div className="bt-container">
        <div className="bt-folheto grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="bt-duv-title" className="bt-h2 text-azul">
              Dúvidas
            </h2>
            <p className="mt-4 text-lg text-tinta/75">Não encontrou sua resposta? Fale com a organização.</p>
            <ul className="mt-4 space-y-2 text-lg font-semibold text-azul">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="bt-link inline-flex items-center gap-2">
                  <BrandIcon name="whatsapp" className="size-5 text-whatsapp" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="bt-link break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <FaqAccordion
            className="bt-faq lg:col-span-8"
            itemClassName="bt-faq-item"
            triggerClassName="bt-faq-trigger"
            contentClassName="bt-faq-conteudo"
          />
        </div>
      </div>
    </section>
  )
}

export function ProjetoBilhete() {
  return (
    <section aria-labelledby="bt-proj-title" className="bt-secao bt-secao-rosa">
      <div className="bt-container grid gap-10 lg:grid-cols-12 lg:items-center">
        <a href={RELATORIO_ATUAL} target="_blank" className="bt-banner lg:col-span-7">
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
          <h2 id="bt-proj-title" className="bt-h2 text-azul">
            Conheça o nosso projeto
          </h2>
          <p className="mt-3 text-lg text-tinta/75">Acompanhe aqui os números dos nossos projetos.</p>
          <ul className="mt-6 space-y-3">
            {relatorios.map((r) => (
              <li key={r.label}>
                {r.href ? (
                  <a href={r.href} target="_blank" className="bt-relatorio bt-relatorio-ativo">
                    <span className="flex-1">{r.label}</span>
                    <DownloadIcon aria-hidden className="size-5" />
                    <span className="sr-only">(PDF)</span>
                  </a>
                ) : (
                  <p className="bt-relatorio">
                    <span className="flex-1">{r.label}</span>
                    <span className="text-sm">em breve</span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
