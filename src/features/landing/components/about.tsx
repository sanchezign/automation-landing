import { CircleCheck, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { sectionIds, siteConfig } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { Section, SectionHeading } from "./section"

export function About({ copy }: { copy: Dictionary["about"] }) {
  return (
    <Section id={sectionIds.about} muted>
      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        <div className="mx-auto w-56 md:w-full">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-2 p-1">
            <Image
              src={siteConfig.avatarUrl}
              alt={copy.photoAlt}
              width={460}
              height={460}
              className="aspect-square rounded-[1.3rem] object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} className="mb-6" />
          <div className="space-y-4 text-lg text-muted-foreground">
            {copy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 space-y-2">
            {copy.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                GitHub <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
