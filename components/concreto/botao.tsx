import { Button } from "@/components/ui/button"
import { PARTICIPE_URL } from "@/lib/campanha"
import { cn } from "@/lib/utils"

// Retângulo azul com um círculo celeste que cresce no hover: a forma concreta é o próprio botão.
export function BotaoConcreto({ className, compacto = false }: { className?: string; compacto?: boolean }) {
  return (
    <Button asChild className={cn("cz-botao", compacto && "cz-botao-compacto", className)}>
      <a href={PARTICIPE_URL} target="_blank" rel="noopener">
        <span className="relative z-10">Participe</span>
        <span aria-hidden className="cz-botao-circulo" />
      </a>
    </Button>
  )
}
