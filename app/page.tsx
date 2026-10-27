import Image from "next/image"

import "./escolha.css"

const propostas = [
  {
    href: "/proposta-1",
    numero: "Proposta 1",
    nome: "Geométrico",
    descricao: "Círculos e formas da paleta oficial como palco dos prêmios, com uma linha do tempo da campanha.",
  },
  {
    href: "/proposta-2",
    numero: "Proposta 2",
    nome: "Bilhete",
    descricao: "O site como um bilhete destacável: picote, canhoto e o número da sorte em destaque.",
  },
]

export default function Escolha() {
  return (
    <div className="escolha flex min-h-full flex-1 flex-col">
      <header className="es-container flex items-center justify-between gap-6 pt-6">
        <div className="es-logos">
          <Image src="/img/logotipo-allianz.png" alt="Allianz" width={296} height={120} className="h-9 w-auto" priority />
          <span aria-hidden className="h-7 w-px bg-azul/25" />
          <Image src="/img/logotipo-aba.png" alt="ABA" width={296} height={120} className="h-9 w-auto" priority />
        </div>
      </header>

      <main className="es-container flex-1 pt-14 pb-20 lg:pt-20">
        <h1 className="es-titulo">
          Ação Beneficente da ABA 2026
          <span className="es-subtitulo">Duas propostas para o novo site</span>
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg text-papel/85">
          Passe o mouse sobre uma prévia para percorrer a página, ou abra a proposta para navegar no site completo.
        </p>

        <ul className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {propostas.map((p, i) => (
            <li key={p.href} className="es-card" style={{ animationDelay: `${150 + i * 120}ms` }}>
              <a href={p.href} className="es-link" aria-label={`Abrir ${p.numero}: ${p.nome}`}>
                <div className="es-moldura">
                  <iframe
                    src={p.href}
                    title={`Prévia da ${p.numero}`}
                    tabIndex={-1}
                    aria-hidden
                    loading="lazy"
                    className="es-previa"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="block text-papel/75">{p.numero}</span>
                    <span className="es-nome">{p.nome}</span>
                    <span className="mt-2 block max-w-[42ch] text-papel/85">{p.descricao}</span>
                  </div>
                  <span className="es-botao">Ver {p.numero.toLowerCase()}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <Image src="/img/faixa-colorida-footer.jpg" alt="" width={1205} height={32} className="h-2 w-full object-cover" />
      </footer>
    </div>
  )
}
