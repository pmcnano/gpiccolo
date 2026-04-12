export type Lang = 'en' | 'es'

export const careerStart = new Date('2018-03-01')

export function yearsOfExperience(): number {
  return Math.floor((Date.now() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
}

export const links = {
  email: 'paul@gpiccolo.com',
  linkedin: 'https://www.linkedin.com/in/paul-gonzalez-piccolo-8711a113/',
  github: 'https://github.com/pmcnano',
}

export const content = {
  en: {
    nav: { name: 'Paul Gonzalez' },
    hero: {
      name: 'Paul Gonzalez',
      title: 'Senior Software Engineer',
      summary: (years: number) => `Ruby on Rails engineer with ${years}+ years of experience building scalable systems, integrations, and automation. Known for a sharp eye on performance and a strong attention to detail. Currently at Goldbelly.`,
      location: 'Mexico · Remote',
    },
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    projects: [
      {
        name: 'VUCEM PDF',
        description: 'PDF and image converter to 300 DPI for SAT (Mexican tax authority) compliance. Built and shipped as a free tier and a paid Pro tier with user accounts, higher limits, and background processing.',
        stack: ['Ruby', 'Sinatra', 'Rails 8.1', 'PostgreSQL', 'Sidekiq', 'Redis', 'Python', 'Dokku'],
        links: [
          { label: 'Free tier', href: 'https://www.vucempdf.com' },
          { label: 'Pro tier', href: 'https://pro.vucempdf.com' },
        ],
      },
    ],
    experience: [
      {
        company: 'Goldbelly',
        role: 'Senior Software Engineer',
        type: '',
        period: 'Aug 2025 – Present',
        location: 'Remote',
        bullets: [
          'Designed and delivered Multi Recipient Checkout — a feature allowing customers to purchase and ship a single order to multiple recipients',
          'Expanded the feature with eGifting support (email and SMS delivery) and bulk recipient management via CSV/XLS upload, with validation, error reporting, and logging',
          'Drove significant database performance improvements: reduced overall size by 66%, eliminated unused indexes, and resolved N+1 query patterns across API controllers',
          'Drove a platform-wide API performance initiative — profiling and optimizing multiple controllers, with standout results including a 50%+ reduction in P95 response time on the most demanding endpoint',
          'Refactored the SSO integration architecture for Apple, Google, and Facebook — eliminating per-whitelabel subdomain whitelisting requirements and enabling seamless SSO support for any newly onboarded whitelabel',
          'Actively working to raise engineering standards across the team — advocating for performance awareness, intentional git practices, and meaningful PR and commit hygiene',
        ],
      },
      {
        company: 'ShirtSpace.com',
        role: 'Senior Software Engineer',
        type: '',
        period: 'Mar 2019 – Sep 2025',
        location: '',
        bullets: [
          'Progressed from entry-level to senior, contributing to strategic planning and cross-team collaboration',
          'Tackled performance issues and security threats with swift, high-impact resolutions',
          'Designed and implemented a comprehensive store credit system for customer accounts',
          'Expanded supplier network by integrating 7 new partners via REST, SOAP, and GraphQL',
          'Implemented Mixed Integer Linear Programming for fulfillment selection — reduced 30-min calculations to seconds',
          'Developed algorithm variants to optimize cost, shipment count, and transit times',
          'Created a standalone competitor analysis and strategic pricing app',
          'Built internal APIs for React frontend rendering',
        ],
      },
      {
        company: 'DLC Kingdom',
        role: 'Software Engineer',
        type: 'Side project',
        period: 'Mar 2023 – Present',
        location: '',
        bullets: [
          'Built backend system for inventory and order management — 30% YOY growth, 90% process automation',
          'Engineered e-commerce integrations: Amazon, MercadoLibre, WooCommerce, Shopify, Eneba, Kinguin, G2A, and Driffle',
          'Integrated Incomm Payments as a supplier, expanding product sourcing capabilities',
          'Developed smart order processing to detect and prevent fraud',
          'Orchestrated migration from Heroku to VPS using Dokku',
          'Set up open-source BI and CI/CD tooling',
        ],
      },
    ],
    skills: {
      'Languages': ['Ruby', 'JavaScript', 'HTML'],
      'Frameworks & Tools': ['Rails', 'REST API', 'GraphQL', 'Elasticsearch', 'Redis', 'Algorithms'],
      'Cloud & Infra': ['AWS', 'Heroku', 'Dokku', 'DevOps', 'CI/CD'],
      'OS': ['Linux', 'macOS', 'Windows'],
    },
    education: [
      {
        school: 'Universidad Autónoma de Yucatán',
        degree: 'Mechatronics Engineering',
        period: '2006 – 2011',
      },
    ],
    contact: {
      heading: "Let's work together",
      subheading: 'Open to senior engineering roles and consulting opportunities.',
    },
    langToggle: 'ES',
  },
  es: {
    nav: { name: 'Paul Gonzalez' },
    hero: {
      name: 'Paul Gonzalez',
      title: 'Ingeniero de Software Senior',
      summary: (years: number) => `Ingeniero Ruby on Rails con más de ${years} años de experiencia construyendo sistemas escalables, integraciones y automatización. Reconocido por su atención al rendimiento y su gran atención al detalle. Actualmente en Goldbelly.`,
      location: 'México · Remoto',
    },
    sections: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
    },
    projects: [
      {
        name: 'VUCEM PDF',
        description: 'Convertidor de PDFs e imágenes a 300 DPI para cumplimiento con el SAT. Desarrollado y lanzado en dos niveles: una versión gratuita y una Pro de pago con cuentas de usuario, límites superiores y procesamiento en segundo plano.',
        stack: ['Ruby', 'Sinatra', 'Rails 8.1', 'PostgreSQL', 'Sidekiq', 'Redis', 'Python', 'Dokku'],
        links: [
          { label: 'Versión gratuita', href: 'https://www.vucempdf.com' },
          { label: 'Versión Pro', href: 'https://pro.vucempdf.com' },
        ],
      },
    ],
    experience: [
      {
        company: 'Goldbelly',
        role: 'Ingeniero de Software Senior',
        type: '',
        period: 'Ago 2025 – Presente',
        location: 'Remoto',
        bullets: [
          'Diseñé y desarrollé el checkout Multi Destinatario — funcionalidad que permite a los clientes comprar y enviar un pedido a múltiples destinatarios',
          'Amplié la funcionalidad con soporte de eGifting (entrega por correo electrónico y SMS) y gestión masiva de destinatarios mediante CSV/XLS, con validación, reporte de errores y logging',
          'Impulsé mejoras significativas en el rendimiento de la base de datos: reduje el tamaño total en un 66%, eliminé índices no utilizados y resolví patrones de consultas N+1 en los controladores',
          'Impulsé una iniciativa de rendimiento de API a nivel de plataforma — perfilando y optimizando múltiples controladores, con resultados destacados de más de 50% de reducción en el tiempo de respuesta P95 del endpoint más exigente',
          'Refactoricé la arquitectura de integración SSO para Apple, Google y Facebook — eliminando los requisitos de whitelisting de subdominios por whitelabel y habilitando soporte SSO inmediato para cualquier nuevo whitelabel',
          'Trabajando activamente para elevar los estándares de ingeniería del equipo — promoviendo la conciencia sobre rendimiento, buenas prácticas de git y una cultura de commits y PRs con descripción y propósito claros',
        ],
      },
      {
        company: 'ShirtSpace.com',
        role: 'Ingeniero de Software Senior',
        type: '',
        period: 'Mar 2019 – Sep 2025',
        location: '',
        bullets: [
          'Progresé de nivel inicial a senior, contribuyendo a planificación estratégica y colaboración interdepartamental',
          'Resolví problemas de rendimiento y amenazas de seguridad con soluciones rápidas y de alto impacto',
          'Diseñé e implementé un sistema integral de crédito en tienda para cuentas de clientes',
          'Amplié la red de proveedores integrando 7 nuevos socios vía REST, SOAP y GraphQL',
          'Implementé Programación Lineal Entera Mixta para selección de fulfillment — cálculos de 30 min reducidos a segundos',
          'Desarrollé variantes de algoritmos para optimizar costo, envíos y tiempos de tránsito',
          'Creé una app independiente de análisis competitivo y precios estratégicos',
          'Construí APIs internas para renderizado del frontend en React',
        ],
      },
      {
        company: 'DLC Kingdom',
        role: 'Ingeniero de Software',
        type: 'Proyecto propio',
        period: 'Mar 2023 – Presente',
        location: '',
        bullets: [
          'Construí sistema backend para gestión de inventario y órdenes — 30% de crecimiento anual, 90% de automatización',
          'Integré plataformas de e-commerce: Amazon, MercadoLibre, WooCommerce, Shopify, Eneba, Kinguin, G2A y Driffle',
          'Integré Incomm Payments como proveedor, ampliando las capacidades de abastecimiento de productos',
          'Desarrollé procesamiento inteligente de órdenes para detectar y prevenir fraude',
          'Orquesté migración de Heroku a VPS con Dokku',
          'Configuré herramientas open-source de BI y CI/CD',
        ],
      },
    ],
    skills: {
      'Lenguajes': ['Ruby', 'JavaScript', 'HTML'],
      'Frameworks y Herramientas': ['Rails', 'REST API', 'GraphQL', 'Elasticsearch', 'Redis', 'Algoritmos'],
      'Cloud e Infraestructura': ['AWS', 'Heroku', 'Dokku', 'DevOps', 'CI/CD'],
      'Sistemas Operativos': ['Linux', 'macOS', 'Windows'],
    },
    education: [
      {
        school: 'Universidad Autónoma de Yucatán',
        degree: 'Ingeniería Mecatrónica',
        period: '2006 – 2011',
      },
    ],
    contact: {
      heading: 'Trabajemos juntos',
      subheading: 'Abierto a roles senior de ingeniería y oportunidades de consultoría.',
    },
    langToggle: 'EN',
  },
}
