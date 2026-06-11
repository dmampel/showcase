export interface Project {
  id: string
  num: string
  category: string
  title: string
  description: string
  features: string[]
  tags: string[]
  accent: string
  figmaUrl?: string
  detailPath?: string
  images: { back: string; front: string }
}

export interface Experiment {
  id: string
  num: string
  tag: string
  title: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    id: 'benticuaga',
    num: '01',
    category: 'Ecommerce · Librería & Office',
    title: 'Benticuaga',
    description:
      'Tienda online de útiles y supplies para público general y empresas. Lo estoy desarrollando con Claude Code y metodología SDD — especificaciones, diseño técnico y tareas antes de tocar código.',
    features: [
      '✦ Admin Dashboard + Estadísticas',
      '✦ Integración MercadoPago',
      '✦ Automatización con n8n',
      '✦ Notificaciones por email',
      '✦ Metodología SDD',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Prisma DB', 'SDD'],
    accent: '#EA580C',
    figmaUrl: 'https://embed.figma.com/design/jxXNWFL7B0cHXDqsc6F5M7/libreria?node-id=0-1&embed-host=share',
    detailPath: '/benticuaga',
    images: {
      back: '/assets/benticuaga/benticuaga-dash.jpeg',
      front: '/assets/benticuaga/benticuaga-home.jpeg',
    },
  },
]

export const experiments: Experiment[] = [
  {
    id: 'rolling',
    num: '02',
    tag: 'Editorial · Web Design',
    title: 'Rolling Stone Mag',
    description:
      'Mi humilde homenaje a la tan iconica revista Rolling Stone. Mi primer proyecto en React. No sabia ni prender la compu.',
    url: 'https://rollingstonemag.vercel.app/',
  },
  {
    id: 'vinyl',
    num: '03',
    tag: 'CSS Animation · JS',
    title: 'Vinyl Player',
    description:
      'Quería algo que me permita escuchar canciones que no estan en Apple Music sin tener que entrar a Youtube. Y amo jugar con los widgets.',
    url: 'https://vinyl-player-beta.vercel.app/',
  },
  {
    id: 'gestor',
    num: '04',
    tag: 'Python · Dashboard',
    title: 'Gestor de Viajes',
    description:
      'En mis tiempos libres soy Uber particular. Hice esta app en Python para gestionar mis ganancias. Excelente herramienta, la uso todos los días.',
    url: 'https://gestorviajes.pythonanywhere.com/pagos?mes=2026-04',
  },
]

export const marqueeItems = [
  'UI Design', 'Ecommerce', 'Figma', 'MercadoPago', 'Python',
  'n8n Automation', 'Web Apps', 'SDD', 'Admin Dashboard',
]
