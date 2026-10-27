import { Button } from "@/components/ui/button"
import { PARTICIPE_URL } from "@/lib/campanha"
import { cn } from "@/lib/utils"

// Papel de cupom: corpo + canhoto separados por picote com recortes nas bordas.
export function Cupom({
  className,
  canhoto,
  children,
  as: Tag = "div",
}: {
  className?: string
  canhoto?: React.ReactNode
  children: React.ReactNode
  as?: "div" | "article" | "li"
}) {
  return (
    // A sombra fica no elemento de fora: a máscara dos recortes cortaria uma sombra aplicada no papel.
    <Tag className={cn("bt-cupom", className)}>
      <div className={cn("bt-papel", canhoto && "bt-papel-com-canhoto")}>
        <div className="bt-cupom-corpo">{children}</div>
        {canhoto && <div className="bt-canhoto">{canhoto}</div>}
      </div>
    </Tag>
  )
}

export function Campo({ rotulo, children, className }: { rotulo: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("bt-campo", className)}>
      <span className="bt-rotulo">{rotulo}</span>
      <span className="bt-valor">{children}</span>
    </div>
  )
}

export function BotaoBilhete({ className, compacto = false }: { className?: string; compacto?: boolean }) {
  return (
    <Button asChild className={cn("bt-botao", compacto && "bt-botao-compacto", className)}>
      <a href={PARTICIPE_URL} target="_blank" rel="noopener">
        Participe
      </a>
    </Button>
  )
}
