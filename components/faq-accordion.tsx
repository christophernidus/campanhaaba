import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faq } from "@/lib/faq"
import { cn } from "@/lib/utils"

// Mesmo conteúdo oficial nas três versões; cada mundo só troca a pele.
export function FaqAccordion({
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  numbered = false,
}: {
  className?: string
  itemClassName?: string
  triggerClassName?: string
  contentClassName?: string
  numbered?: boolean
}) {
  return (
    <Accordion type="single" collapsible className={className}>
      {faq.map(([q, a], i) => (
        <AccordionItem key={q} value={`q${i}`} className={itemClassName}>
          <AccordionTrigger className={cn("hover:no-underline", triggerClassName)}>
            <span className="flex gap-3">
              {numbered && <span className="faq-num shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>}
              <span>{q}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className={contentClassName}>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
