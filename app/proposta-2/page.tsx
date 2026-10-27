import { FooterBilhete } from "@/components/bilhete/footer"
import { HeaderBilhete } from "@/components/bilhete/header"
import { HeroBilhete } from "@/components/bilhete/hero"
import {
  DuvidasBilhete,
  GanhadoresBilhete,
  MensagemBilhete,
  PassosBilhete,
  PremiosBilhete,
  ProjetoBilhete,
} from "@/components/bilhete/secoes"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Bilhete() {
  return (
    <>
      <HeaderBilhete />
      <main id="topo" className="flex-1">
        <HeroBilhete />
        <MensagemBilhete />
        <PassosBilhete />
        <PremiosBilhete />
        <GanhadoresBilhete />
        <DuvidasBilhete />
        <ProjetoBilhete />
      </main>
      <FooterBilhete />
      <WhatsappButton />
    </>
  )
}
