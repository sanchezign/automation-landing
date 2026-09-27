import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section"> & { muted?: boolean }

/** Full-width band with a centered container. `muted` alternates the background. */
export function Section({ muted, className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28", muted && "bg-muted/40", className)} {...props}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}

type HeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, className }: HeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl space-y-3", className)}>
      <p className="text-sm font-semibold tracking-wider text-primary uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
