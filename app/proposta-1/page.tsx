import { FooterConcreto } from "@/components/concreto/footer"
import { HeaderConcreto } from "@/components/concreto/header"
import { HeroConcreto } from "@/components/concreto/hero"
import { PremiosConcreto } from "@/components/concreto/premios"
import {
  DuvidasConcreto,
  GanhadoresConcreto,
  MensagemConcreto,
  PassosConcreto,
  ProjetoConcreto,
} from "@/components/concreto/secoes"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Concreto() {
  return (
    <>
      <HeaderConcreto />
      <main id="topo" className="flex-1">
        <HeroConcreto />
        <MensagemConcreto />
        <PassosConcreto />
        <PremiosConcreto />
        <GanhadoresConcreto />
        <DuvidasConcreto />
        <ProjetoConcreto />
      </main>
      <FooterConcreto />
      <WhatsappButton />
    </>
  )
}
