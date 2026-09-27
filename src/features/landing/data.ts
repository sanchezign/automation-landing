import {
  Bot,
  BookOpen,
  ChartColumn,
  Hammer,
  LifeBuoy,
  MessagesSquare,
  Plug,
  Rocket,
  Search,
  UserRound,
  Workflow,
  Database,
  type LucideIcon,
} from "lucide-react"
import type { CaseNodeId, ProcessStepId, ServiceId } from "@/i18n/dictionaries/en"

/** Non-translatable landing data: icons and tool names. Copy lives in the dictionaries. */

export const heroStack = ["n8n", "Copilot Studio", "WhatsApp", "OpenAI"] as const

export const techStack = [
  "n8n",
  "Microsoft Copilot Studio",
  "Power Automate",
  "Microsoft Teams",
  "SharePoint",
  "OpenAI API",
  "Claude API",
  "WhatsApp Business API",
  "Node.js",
  "TypeScript",
  "Next.js",
  "React",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "REST APIs & Webhooks",
] as const

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  copilot: Bot,
  n8n: Workflow,
  chatbots: MessagesSquare,
  integrations: Plug,
  dashboards: ChartColumn,
}

export const processIcons: Record<ProcessStepId, LucideIcon> = {
  discovery: Search,
  prototype: Rocket,
  build: Hammer,
  support: LifeBuoy,
}

export const caseNodeIcons: Record<CaseNodeId, LucideIcon> = {
  channel: UserRound,
  agent: Bot,
  knowledge: BookOpen,
  flows: Workflow,
  systems: Database,
}
