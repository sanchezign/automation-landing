import { CircleCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { serviceIcons } from "../data"
import { Section, SectionHeading } from "./section"

export function Services({ copy }: { copy: Dictionary["services"] }) {
  return (
    <Section id={sectionIds.services}>
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {copy.items.map((service) => {
          const Icon = serviceIcons[service.id]
          return (
            <Card key={service.id} className="transition-shadow hover:shadow-lg">
              <CardHeader className="space-y-3">
                <span className="grid size-11 place-items-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
