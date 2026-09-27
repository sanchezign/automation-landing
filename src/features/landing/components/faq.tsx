import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { Section, SectionHeading } from "./section"

export function Faq({ copy }: { copy: Dictionary["faq"] }) {
  return (
    <Section id={sectionIds.faq}>
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        <Accordion type="single" collapsible className="w-full">
          {copy.items.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
