import { BrandIcon } from "@/components/icons"
import { WHATSAPP_URL } from "@/lib/campanha"

export function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Fale conosco pelo WhatsApp"
      className="whatsapp-fab fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white sm:right-6 sm:bottom-6"
    >
      <BrandIcon name="whatsapp" className="size-7" />
    </a>
  )
}
