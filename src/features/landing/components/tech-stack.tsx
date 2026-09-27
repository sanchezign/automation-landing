import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { techStack } from "../data"
import { Section, SectionHeading } from "./section"

export function TechStack({ copy }: { copy: Dictionary["tech"] }) {
  return (
    <Section muted className="py-16 md:py-20">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} className="mb-8" />
      <ul className="flex flex-wrap gap-3">
        {techStack.map((tool) => (
          <li key={tool}>
            <Badge variant="outline" className="bg-card px-4 py-2 text-sm">
              {tool}
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  )
}
