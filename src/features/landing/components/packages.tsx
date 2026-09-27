import { CircleCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { sectionIds } from "@/config/site"
import type { Dictionary, PackageId } from "@/i18n/dictionaries/en"
import { whatsappUrl } from "@/lib/contact"
import { cn } from "@/lib/utils"
import { Section, SectionHeading } from "./section"

const RECOMMENDED: PackageId = "pilot"

export function Packages({ copy }: { copy: Dictionary["packages"] }) {
  return (
    <Section id={sectionIds.packages}>
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {copy.items.map((pkg) => {
          const recommended = pkg.id === RECOMMENDED
          return (
            <Card
              key={pkg.id}
              className={cn(
                "relative",
                recommended && "border-primary shadow-lg shadow-primary/10",
              )}
            >
              {recommended && <Badge className="absolute -top-3 left-6">{copy.recommended}</Badge>}
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <p className="pt-2 text-2xl font-bold">{copy.quoteLabel}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={recommended ? "default" : "outline"}>
                  <a
                    href={whatsappUrl(copy.whatsappMessage.replace("{package}", pkg.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
