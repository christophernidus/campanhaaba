"use client"

import { useSyncExternalStore } from "react"

import { cn } from "@/lib/utils"

const DIA = 86_400_000
const inicio = Date.UTC(2026, 9, 18)
const fim = Date.UTC(2026, 11, 21)
const marcos = [
  { label: "Início das vendas", data: "18/10", t: inicio },
  { label: "Últimas compras", data: "17/12", t: Date.UTC(2026, 11, 17) },
  { label: "Sorteio na Loteria Federal", data: "20/12", t: Date.UTC(2026, 11, 20) },
  { label: "Resultado", data: "21/12", t: fim },
]
const pos = (t: number) => ((t - inicio) / (fim - inicio)) * 100

// Dia atual em número inteiro: estável durante o dia, então serve de snapshot.
const hojeDia = () => Math.floor(Date.now() / DIA)
const semAssinatura = () => () => {}

export function ReguaCampanha({ className }: { className?: string }) {
  const dia = useSyncExternalStore(semAssinatura, hojeDia, () => null)
  const hoje = dia === null ? null : dia * DIA
  const mostrarHoje = hoje !== null && hoje >= inicio && hoje <= fim

  return (
    <div className={cn("regua", className)} role="group" aria-label="Calendário da campanha">
      <div className="regua-trilho" aria-hidden>
        <span className="regua-feito" style={{ transform: `scaleX(${mostrarHoje ? pos(hoje) / 100 : 0})` }} />
        {marcos.map((m) => (
          <span key={m.label} className="regua-ponto" style={{ left: `${pos(m.t)}%` }} />
        ))}
        {mostrarHoje && (
          <span className="regua-hoje" style={{ left: `${pos(hoje)}%` }}>
            Hoje
          </span>
        )}
      </div>
      <ol className="regua-legenda">
        {marcos.map((m) => (
          <li key={m.label}>
            <span className="regua-data tabular-nums">{m.data}</span>
            <span className="regua-label">{m.label}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
