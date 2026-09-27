/**
 * Source of truth for UI copy. `es.ts` must implement the same shape
 * (enforced by the `Dictionary` type), so a missing translation is a type error.
 */

export type ChatRole = "user" | "agent" | "tool"
export type ChatMessage = { role: ChatRole; text: string }
export type ServiceId = "copilot" | "n8n" | "chatbots" | "integrations" | "dashboards"
export type ProcessStepId = "discovery" | "prototype" | "build" | "support"
export type PackageId = "audit" | "pilot" | "implementation" | "care"
export type CaseNodeId = "channel" | "agent" | "knowledge" | "flows" | "systems"

export const en = {
  meta: {
    title: "Ignacio Sánchez — AI Agents & Automation",
    description:
      "I build AI agents and automations with n8n and Microsoft Copilot Studio that save your team hours every week.",
  },
  nav: {
    services: "Services",
    process: "Process",
    caseStudy: "Case study",
    packages: "Packages",
    about: "About",
    faq: "FAQ",
    cta: "Let's talk",
    openMenu: "Open menu",
    menuTitle: "Navigation",
  },
  toggles: {
    language: "Cambiar a español",
    theme: "Toggle dark mode",
  },
  hero: {
    badge: "Available for new projects",
    title: "AI agents & automations that save your team hours",
    subtitle:
      "I design, build and deploy intelligent agents and workflows with n8n and Microsoft Copilot Studio — connected to the tools your business already uses.",
    primaryCta: "Let's talk",
    secondaryCta: "See services",
    stackLabel: "Built with",
  },
  chatDemo: {
    title: "Operations Agent",
    status: "Online · Microsoft Teams",
    caption: "Demo conversation — illustrative",
    typing: "Agent is typing",
    messages: [
      {
        role: "user",
        text: "Hi! What's the status of order #4812? The client is asking.",
      },
      { role: "tool", text: "Querying ERP · order #4812" },
      {
        role: "agent",
        text: "Order #4812 was shipped yesterday via DHL (tracking DH-99231). Estimated delivery: Thursday.",
      },
      { role: "user", text: "Great, can you let the client know?" },
      { role: "tool", text: "Sending email · logging in CRM" },
      {
        role: "agent",
        text: "Done ✅ I emailed the client with the tracking link and logged the contact in the CRM.",
      },
    ] as ChatMessage[],
  },
  services: {
    eyebrow: "Services",
    title: "What I can automate for you",
    subtitle:
      "From a single workflow to a full AI agent: I take care of design, development, integration and deployment.",
    items: [
      {
        id: "copilot",
        title: "AI agents with Microsoft Copilot Studio",
        description:
          "Agents that live in Teams, your website or Microsoft 365 and answer using your own documents and data.",
        bullets: [
          "Grounded on SharePoint, websites and files",
          "Actions with Power Automate",
          "Handoff to a human when needed",
        ],
      },
      {
        id: "n8n",
        title: "Workflow automation with n8n",
        description:
          "End-to-end workflows that move data between apps, trigger actions and run on a schedule — without manual work.",
        bullets: [
          "Cloud or self-hosted n8n",
          "AI steps: classify, summarize, extract",
          "Error handling and retries",
        ],
      },
      {
        id: "chatbots",
        title: "WhatsApp & web chatbots",
        description:
          "Assistants that answer customers 24/7, qualify leads and book appointments on the channels they already use.",
        bullets: ["WhatsApp Business API", "Lead capture into your CRM", "Human takeover"],
      },
      {
        id: "integrations",
        title: "Integrations & APIs",
        description:
          "Connect your CRM, ERP, spreadsheets, e-commerce and internal systems so information flows on its own.",
        bullets: ["REST APIs and webhooks", "Custom connectors", "Data sync and validation"],
      },
      {
        id: "dashboards",
        title: "Automated reports & dashboards",
        description:
          "Stop building reports by hand: data is collected, processed and delivered to you automatically.",
        bullets: ["Scheduled reports by email", "Custom web dashboards", "Alerts on key metrics"],
      },
    ] as { id: ServiceId; title: string; description: string; bullets: string[] }[],
  },
  process: {
    eyebrow: "Process",
    title: "How we work together",
    subtitle: "A clear, low-risk process: you see results early and decide at every step.",
    steps: [
      {
        id: "discovery",
        title: "Discovery",
        description:
          "We map the process, the tools involved and where the hours are lost. You get a concrete proposal and a quote.",
      },
      {
        id: "prototype",
        title: "Prototype",
        description:
          "A working pilot on a real use case, so you can validate the value before investing in the full solution.",
      },
      {
        id: "build",
        title: "Implementation",
        description:
          "Full development, integration with your systems, testing and deployment to production.",
      },
      {
        id: "support",
        title: "Training & support",
        description:
          "Documentation, a handover session for your team, and ongoing support to adjust and improve.",
      },
    ] as { id: ProcessStepId; title: string; description: string }[],
  },
  caseStudy: {
    eyebrow: "Case study",
    label: "Illustrative example",
    title: "An internal HR assistant in Microsoft Teams",
    subtitle:
      "How a Copilot Studio agent combined with automated workflows can take repetitive questions off an HR team.",
    problemTitle: "The problem",
    problem:
      "The HR team spends hours every week answering the same questions by email and Teams: vacation days, policies, certificates, onboarding. Requests get lost and employees wait for answers.",
    solutionTitle: "The solution",
    solution: [
      "A Copilot Studio agent available inside Microsoft Teams.",
      "Answers grounded on the company's policies stored in SharePoint.",
      "Flows that create requests (certificates, time off) and notify HR.",
      "n8n syncs the requests with the HR system and sends a weekly summary.",
      "Complex or sensitive cases are handed off to a person.",
    ],
    resultsTitle: "Expected outcomes",
    results: [
      "Instant answers 24/7 for the most common questions",
      "Repetitive requests handled without manual work",
      "HR focuses on the cases that really need a person",
    ],
    flowTitle: "How it works",
    flow: [
      { id: "channel", title: "Employee", detail: "Asks in Teams" },
      { id: "agent", title: "Copilot Studio agent", detail: "Understands and answers" },
      { id: "knowledge", title: "Knowledge", detail: "SharePoint policies" },
      { id: "flows", title: "Automations", detail: "Power Automate + n8n" },
      { id: "systems", title: "HR system", detail: "Requests & notifications" },
    ] as { id: CaseNodeId; title: string; detail: string }[],
  },
  tech: {
    eyebrow: "Stack",
    title: "Tools I work with",
  },
  packages: {
    eyebrow: "Packages",
    title: "Ways to work together",
    subtitle:
      "Every business is different, so every project is quoted based on its scope. Pick a starting point and let's talk.",
    quoteLabel: "Custom quote",
    cta: "Request a quote",
    recommended: "Recommended start",
    // {package} is replaced with the package name
    whatsappMessage:
      'Hi Ignacio! I\'m interested in the "{package}" package. Could you send me a quote?',
    items: [
      {
        id: "audit",
        name: "Automation audit",
        description: "Find out what to automate first and what it would take.",
        features: [
          "Review of your processes and tools",
          "Prioritized list of automation opportunities",
          "Technical proposal and estimate",
        ],
      },
      {
        id: "pilot",
        name: "Pilot agent or workflow",
        description: "One real use case, working, to validate the value fast.",
        features: [
          "One agent or workflow end to end",
          "Integration with 1–2 of your tools",
          "Demo and feedback session",
        ],
      },
      {
        id: "implementation",
        name: "Full implementation",
        description: "A production-ready solution integrated with your systems.",
        features: [
          "Agents and workflows in production",
          "Integrations, testing and monitoring",
          "Documentation and team training",
        ],
      },
      {
        id: "care",
        name: "Maintenance & support",
        description: "Keep everything running and improving over time.",
        features: ["Monitoring and fixes", "Adjustments and new automations", "Priority response"],
      },
    ] as { id: PackageId; name: string; description: string; features: string[] }[],
  },
  about: {
    eyebrow: "About",
    title: "Hi, I'm Ignacio",
    paragraphs: [
      "I'm a full-stack developer from Montevideo, Uruguay. Since 2023 I've been building complete web solutions end to end — frontend, backend, databases and deployment — with React, Next.js, Node.js and TypeScript.",
      "Today I focus on AI agents and automation: I combine that engineering background with tools like n8n and Microsoft Copilot Studio to build solutions that are reliable, documented and easy to maintain.",
    ],
    highlights: [
      "You talk directly with the developer — no intermediaries",
      "Clean code, documentation and handover included",
      "I work remotely in English and Spanish",
    ],
    photoAlt: "Photo of Ignacio Sánchez",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question: "Do I need Microsoft licenses to use Copilot Studio?",
        answer:
          "Yes. Copilot Studio runs on your organization's Microsoft tenant and requires the corresponding licensing. During the audit I help you understand which plan fits your use case before you commit.",
      },
      {
        question: "n8n in the cloud or self-hosted?",
        answer:
          "Both work. n8n Cloud is the fastest way to start; self-hosting gives you more control over data and costs. I recommend one based on your volume, budget and security requirements.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Credentials are stored securely, access is limited to what each automation needs, and nothing is shared outside the tools you approve. Sensitive processes can stay entirely inside your own infrastructure.",
      },
      {
        question: "How long does a project take?",
        answer:
          "It depends on the scope. A pilot usually takes a few weeks; a full implementation depends on the number of processes and integrations. You get a timeline with the quote.",
      },
      {
        question: "What happens after delivery?",
        answer:
          "You receive documentation and a handover session. After that you can hire the maintenance plan or request adjustments whenever you need them.",
      },
      {
        question: "How do we start?",
        answer:
          "Send me a message on WhatsApp or by email with a short description of what you want to automate. We schedule a call and I send you a proposal.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's automate your next process",
    subtitle:
      "Tell me what takes your team the most time. I'll reply with ideas and next steps — no commitment.",
    whatsapp: "Message me on WhatsApp",
    email: "Send an email",
    responseTime: "I'll get back to you as soon as possible.",
    whatsappMessage: "Hi Ignacio! I'd like to automate a process in my business.",
    emailSubject: "Automation project inquiry",
    floatingLabel: "Chat on WhatsApp",
  },
  footer: {
    tagline: "AI agents, workflow automation and integrations.",
    contact: "Contact",
    links: "Links",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or was moved.",
    back: "Back to home",
  },
  error: {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again.",
    retry: "Try again",
  },
}

export type Dictionary = typeof en
