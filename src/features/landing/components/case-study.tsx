import { ArrowDown, ArrowRight, CircleCheck } from "lucide-react"
import { Fragment } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { caseNodeIcons } from "../data"
import { Section, SectionHeading } from "./section"

/**
 * Featured case study. Currently an illustrative example (clearly labeled);
 * to be replaced with a real project in milestone 7.
 */
export function CaseStudy({ copy }: { copy: Dictionary["caseStudy"] }) {
  return (
    <Section id={sectionIds.caseStudy}>
      <div className="mb-4">
        <Badge variant="outline">{copy.label}</Badge>
      </div>
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

      {/* Flow diagram: vertical on mobile, horizontal on large screens */}
      <div className="mb-12 rounded-2xl border bg-muted/40 p-6">
        <p className="mb-6 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
          {copy.flowTitle}
        </p>
        <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
          {copy.flow.map((node, i) => {
            const Icon = caseNodeIcons[node.id]
            return (
              <Fragment key={node.id}>
                {i > 0 && (
                  <li aria-hidden className="flex justify-center text-muted-foreground">
                    <ArrowDown className="size-5 lg:hidden" />
                    <ArrowRight className="hidden size-5 lg:block" />
                  </li>
                )}
                <li className="flex flex-1 items-center gap-3 rounded-xl border bg-card p-3 lg:flex-col lg:text-center">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-white">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{node.title}</p>
                    <p className="text-xs text-muted-foreground">{node.detail}</p>
                  </div>
                </li>
              </Fragment>
            )
          })}
        </ol>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{copy.problemTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{copy.problem}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{copy.solutionTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary">
              {copy.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-primary/40">
          <CardHeader>
            <CardTitle>{copy.resultsTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {copy.results.map((item) => (
                <li key={item} className="flex gap-2">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
