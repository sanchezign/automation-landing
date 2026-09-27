import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { processIcons } from "../data"
import { Section, SectionHeading } from "./section"

export function Process({ copy }: { copy: Dictionary["process"] }) {
  return (
    <Section id={sectionIds.process} muted>
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />
      <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {copy.steps.map((step, i) => {
          const Icon = processIcons[step.id]
          return (
            <li key={step.id} className="relative space-y-3">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
