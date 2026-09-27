"use client"

import { Bot, LoaderCircle, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { cn } from "@/lib/utils"

type Props = { copy: Dictionary["chatDemo"] }

const STEP_MS = 1600
const RESTART_MS = 5000

/**
 * Animated fake conversation between a user and an AI agent (hero visual).
 * Messages appear one by one and the loop restarts. With prefers-reduced-motion
 * the full conversation is shown statically.
 */
export function AgentChatDemo({ copy }: Props) {
  const total = copy.messages.length
  const [visible, setVisible] = useState(total)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timeout: number
    const show = (count: number) => {
      setVisible(count)
      // Pause longer on the full conversation, then start over
      const done = count >= total
      timeout = window.setTimeout(() => show(done ? 1 : count + 1), done ? RESTART_MS : STEP_MS)
    }
    show(1)

    return () => window.clearTimeout(timeout)
  }, [total])

  const shown = copy.messages.slice(0, visible)
  const next = copy.messages[visible]
  const agentIsWorking = next !== undefined && next.role !== "user"

  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-primary/10">
        <div className="flex items-center gap-3 border-b bg-muted/50 px-4 py-3">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
            <Bot className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{copy.title}</p>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-500" />
              {copy.status}
            </p>
          </div>
        </div>

        <div className="flex h-96 flex-col justify-end gap-3 p-4" aria-live="polite">
          {shown.map((message, i) => (
            <div
              key={i}
              className={cn(
                "animate-in duration-300 fade-in slide-in-from-bottom-2",
                message.role === "user" && "self-end",
                message.role === "agent" && "self-start",
                message.role === "tool" && "self-center",
              )}
            >
              {message.role === "tool" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  <Zap className="size-3" />
                  {message.text}
                </span>
              ) : (
                <p
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                    message.role === "user"
                      ? "ml-auto rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-muted",
                  )}
                >
                  {message.text}
                </p>
              )}
            </div>
          ))}
          {agentIsWorking && (
            <span className="inline-flex items-center gap-2 self-start text-xs text-muted-foreground">
              <LoaderCircle className="size-3 animate-spin" />
              {copy.typing}
            </span>
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        {copy.caption}
      </figcaption>
    </figure>
  )
}
