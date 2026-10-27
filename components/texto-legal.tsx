import { REGULAMENTO_URL } from "@/lib/campanha"

// Texto legal oficial do rodapé; não reescrever.
export function TextoLegal({ className, linkClassName }: { className?: string; linkClassName?: string }) {
  return (
    <p className={className}>
      Período de Participação: 18/10/2026 a 17/12/2026. Consulte o Certificado de Autorização SPA/ME (Secretaria de prêmios e
      apostas do Ministério da Economia) e o{" "}
      <a href={REGULAMENTO_URL} className={linkClassName}>
        Regulamento completo
      </a>{" "}
      no site da Promoção. Para receber o prêmio é necessário guardar o recibo da doação. Imagens meramente ilustrativas.
    </p>
  )
}
