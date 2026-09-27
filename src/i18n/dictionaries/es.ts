import type { Dictionary } from "./en"

export const es: Dictionary = {
  meta: {
    title: "Ignacio Sánchez — Agentes de IA y Automatización",
    description:
      "Construyo agentes de IA y automatizaciones con n8n y Microsoft Copilot Studio que le ahorran horas a tu equipo cada semana.",
  },
  nav: {
    services: "Servicios",
    process: "Proceso",
    caseStudy: "Caso",
    packages: "Paquetes",
    about: "Sobre mí",
    faq: "Preguntas",
    cta: "Hablemos",
    openMenu: "Abrir menú",
    menuTitle: "Navegación",
  },
  toggles: {
    language: "Switch to English",
    theme: "Cambiar modo oscuro",
  },
  hero: {
    badge: "Disponible para nuevos proyectos",
    title: "Agentes de IA y automatizaciones que le ahorran horas a tu equipo",
    subtitle:
      "Diseño, construyo y pongo en producción agentes inteligentes y flujos de trabajo con n8n y Microsoft Copilot Studio, conectados a las herramientas que tu empresa ya usa.",
    primaryCta: "Hablemos",
    secondaryCta: "Ver servicios",
    stackLabel: "Construido con",
  },
  chatDemo: {
    title: "Agente de Operaciones",
    status: "En línea · Microsoft Teams",
    caption: "Conversación de demostración — ilustrativa",
    typing: "El agente está escribiendo",
    messages: [
      {
        role: "user",
        text: "¡Hola! ¿En qué estado está el pedido #4812? El cliente está preguntando.",
      },
      { role: "tool", text: "Consultando ERP · pedido #4812" },
      {
        role: "agent",
        text: "El pedido #4812 se despachó ayer por DHL (seguimiento DH-99231). Entrega estimada: jueves.",
      },
      { role: "user", text: "Genial, ¿le avisas al cliente?" },
      { role: "tool", text: "Enviando email · registrando en el CRM" },
      {
        role: "agent",
        text: "Listo ✅ Le envié un email al cliente con el link de seguimiento y registré el contacto en el CRM.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Qué puedo automatizar para ti",
    subtitle:
      "Desde un solo flujo hasta un agente de IA completo: me encargo del diseño, desarrollo, integración y puesta en producción.",
    items: [
      {
        id: "copilot",
        title: "Agentes de IA con Microsoft Copilot Studio",
        description:
          "Agentes que viven en Teams, en tu web o en Microsoft 365 y responden usando tus propios documentos y datos.",
        bullets: [
          "Basados en SharePoint, sitios web y archivos",
          "Acciones con Power Automate",
          "Derivación a una persona cuando hace falta",
        ],
      },
      {
        id: "n8n",
        title: "Automatización de procesos con n8n",
        description:
          "Flujos de punta a punta que mueven datos entre aplicaciones, disparan acciones y se ejecutan solos, sin trabajo manual.",
        bullets: [
          "n8n en la nube o en tu servidor",
          "Pasos con IA: clasificar, resumir, extraer",
          "Manejo de errores y reintentos",
        ],
      },
      {
        id: "chatbots",
        title: "Chatbots para WhatsApp y web",
        description:
          "Asistentes que atienden a tus clientes 24/7, califican leads y agendan citas en los canales que ya usan.",
        bullets: [
          "WhatsApp Business API",
          "Leads directo a tu CRM",
          "Toma de control por una persona",
        ],
      },
      {
        id: "integrations",
        title: "Integraciones y APIs",
        description:
          "Conecto tu CRM, ERP, planillas, e-commerce y sistemas internos para que la información fluya sola.",
        bullets: [
          "APIs REST y webhooks",
          "Conectores a medida",
          "Sincronización y validación de datos",
        ],
      },
      {
        id: "dashboards",
        title: "Reportes y dashboards automáticos",
        description:
          "Deja de armar reportes a mano: los datos se recolectan, procesan y te llegan automáticamente.",
        bullets: [
          "Reportes programados por email",
          "Dashboards web a medida",
          "Alertas sobre métricas clave",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Cómo trabajamos juntos",
    subtitle: "Un proceso claro y de bajo riesgo: ves resultados temprano y decides en cada paso.",
    steps: [
      {
        id: "discovery",
        title: "Diagnóstico",
        description:
          "Mapeamos el proceso, las herramientas involucradas y dónde se pierden las horas. Recibes una propuesta concreta y un presupuesto.",
      },
      {
        id: "prototype",
        title: "Prototipo",
        description:
          "Un piloto funcionando sobre un caso real, para validar el valor antes de invertir en la solución completa.",
      },
      {
        id: "build",
        title: "Implementación",
        description:
          "Desarrollo completo, integración con tus sistemas, pruebas y puesta en producción.",
      },
      {
        id: "support",
        title: "Capacitación y soporte",
        description:
          "Documentación, una sesión de traspaso con tu equipo y soporte continuo para ajustar y mejorar.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Caso",
    label: "Ejemplo ilustrativo",
    title: "Un asistente interno de RR. HH. en Microsoft Teams",
    subtitle:
      "Cómo un agente de Copilot Studio combinado con flujos automáticos puede sacarle las preguntas repetitivas a un equipo de RR. HH.",
    problemTitle: "El problema",
    problem:
      "El equipo de RR. HH. pasa horas cada semana respondiendo las mismas preguntas por email y Teams: días de vacaciones, políticas, constancias, onboarding. Las solicitudes se pierden y los empleados esperan respuestas.",
    solutionTitle: "La solución",
    solution: [
      "Un agente de Copilot Studio disponible dentro de Microsoft Teams.",
      "Respuestas basadas en las políticas de la empresa guardadas en SharePoint.",
      "Flujos que crean solicitudes (constancias, licencias) y avisan a RR. HH.",
      "n8n sincroniza las solicitudes con el sistema de RR. HH. y envía un resumen semanal.",
      "Los casos complejos o sensibles se derivan a una persona.",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Respuestas inmediatas 24/7 a las preguntas más comunes",
      "Solicitudes repetitivas resueltas sin trabajo manual",
      "RR. HH. se enfoca en los casos que realmente necesitan a una persona",
    ],
    flowTitle: "Cómo funciona",
    flow: [
      { id: "channel", title: "Empleado", detail: "Pregunta en Teams" },
      { id: "agent", title: "Agente Copilot Studio", detail: "Entiende y responde" },
      { id: "knowledge", title: "Conocimiento", detail: "Políticas en SharePoint" },
      { id: "flows", title: "Automatizaciones", detail: "Power Automate + n8n" },
      { id: "systems", title: "Sistema de RR. HH.", detail: "Solicitudes y avisos" },
    ],
  },
  tech: {
    eyebrow: "Stack",
    title: "Herramientas con las que trabajo",
  },
  packages: {
    eyebrow: "Paquetes",
    title: "Formas de trabajar juntos",
    subtitle:
      "Cada empresa es distinta, así que cada proyecto se cotiza según su alcance. Elige un punto de partida y hablemos.",
    quoteLabel: "A cotizar",
    cta: "Pedir presupuesto",
    recommended: "Recomendado para empezar",
    whatsappMessage:
      '¡Hola Ignacio! Me interesa el paquete "{package}". ¿Me podrías pasar un presupuesto?',
    items: [
      {
        id: "audit",
        name: "Diagnóstico de automatización",
        description: "Descubre qué automatizar primero y qué haría falta.",
        features: [
          "Revisión de tus procesos y herramientas",
          "Lista priorizada de oportunidades",
          "Propuesta técnica y estimación",
        ],
      },
      {
        id: "pilot",
        name: "Agente o flujo piloto",
        description: "Un caso de uso real, funcionando, para validar el valor rápido.",
        features: [
          "Un agente o flujo de punta a punta",
          "Integración con 1–2 de tus herramientas",
          "Demo y sesión de feedback",
        ],
      },
      {
        id: "implementation",
        name: "Implementación completa",
        description: "Una solución lista para producción e integrada con tus sistemas.",
        features: [
          "Agentes y flujos en producción",
          "Integraciones, pruebas y monitoreo",
          "Documentación y capacitación del equipo",
        ],
      },
      {
        id: "care",
        name: "Mantenimiento y soporte",
        description: "Que todo siga funcionando y mejorando con el tiempo.",
        features: [
          "Monitoreo y correcciones",
          "Ajustes y nuevas automatizaciones",
          "Respuesta prioritaria",
        ],
      },
    ],
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Hola, soy Ignacio",
    paragraphs: [
      "Soy desarrollador full stack de Montevideo, Uruguay. Desde 2023 construyo soluciones web completas de punta a punta — frontend, backend, bases de datos y deploy — con React, Next.js, Node.js y TypeScript.",
      "Hoy me enfoco en agentes de IA y automatización: combino esa base de ingeniería con herramientas como n8n y Microsoft Copilot Studio para construir soluciones confiables, documentadas y fáciles de mantener.",
    ],
    highlights: [
      "Hablas directo con el desarrollador, sin intermediarios",
      "Código limpio, documentación y traspaso incluidos",
      "Trabajo remoto en español e inglés",
    ],
    photoAlt: "Foto de Ignacio Sánchez",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Necesito licencias de Microsoft para usar Copilot Studio?",
        answer:
          "Sí. Copilot Studio funciona sobre el tenant de Microsoft de tu organización y requiere el licenciamiento correspondiente. En el diagnóstico te ayudo a entender qué plan se ajusta a tu caso antes de comprometerte.",
      },
      {
        question: "¿n8n en la nube o en servidor propio?",
        answer:
          "Ambas opciones funcionan. n8n Cloud es la forma más rápida de empezar; en servidor propio tienes más control sobre los datos y los costos. Te recomiendo una según tu volumen, presupuesto y requisitos de seguridad.",
      },
      {
        question: "¿Mis datos están seguros?",
        answer:
          "Las credenciales se guardan de forma segura, el acceso se limita a lo que cada automatización necesita y nada se comparte fuera de las herramientas que apruebes. Los procesos sensibles pueden quedar completamente dentro de tu propia infraestructura.",
      },
      {
        question: "¿Cuánto tarda un proyecto?",
        answer:
          "Depende del alcance. Un piloto suele llevar unas pocas semanas; una implementación completa depende de la cantidad de procesos e integraciones. Junto con el presupuesto recibes un cronograma.",
      },
      {
        question: "¿Qué pasa después de la entrega?",
        answer:
          "Recibes documentación y una sesión de traspaso. Después puedes contratar el plan de mantenimiento o pedir ajustes cuando los necesites.",
      },
      {
        question: "¿Cómo empezamos?",
        answer:
          "Escríbeme por WhatsApp o email con una breve descripción de lo que quieres automatizar. Agendamos una llamada y te envío una propuesta.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Automaticemos tu próximo proceso",
    subtitle:
      "Cuéntame qué le lleva más tiempo a tu equipo. Te respondo con ideas y próximos pasos, sin compromiso.",
    whatsapp: "Escríbeme por WhatsApp",
    email: "Enviar un email",
    responseTime: "Te respondo a la brevedad.",
    whatsappMessage: "¡Hola Ignacio! Me gustaría automatizar un proceso en mi empresa.",
    emailSubject: "Consulta por proyecto de automatización",
    floatingLabel: "Escribir por WhatsApp",
  },
  footer: {
    tagline: "Agentes de IA, automatización de procesos e integraciones.",
    contact: "Contacto",
    links: "Enlaces",
    rights: "Todos los derechos reservados.",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o fue movida.",
    back: "Volver al inicio",
  },
  error: {
    title: "Algo salió mal",
    description: "Ocurrió un error inesperado. Prueba de nuevo.",
    retry: "Reintentar",
  },
}
