import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { heroStack } from "../data"
import { AgentChatDemo } from "./agent-chat-demo"

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict

  return (
    <section className="relative overflow-hidden">
      {/* Soft brand glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand/20 to-brand-2/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="space-y-6">
          <Badge variant="outline" className="gap-2 px-3 py-1">
            <span className="size-2 rounded-full bg-emerald-500" />
            {hero.badge}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{hero.title}</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={`#${sectionIds.contact}`}>
                {hero.primaryCta} <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`#${sectionIds.services}`}>{hero.secondaryCta}</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-sm text-muted-foreground">
            <span>{hero.stackLabel}:</span>
            {heroStack.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
        <AgentChatDemo copy={dict.chatDemo} />
      </div>
    </section>
  )
}
