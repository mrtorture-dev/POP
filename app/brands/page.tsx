"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Star, Users, Filter, Building2, Calendar, DollarSign, Target, CheckCircle } from "lucide-react"
import Link from "next/link"

const web3Categories = [
  { id: "defi", name: "DeFi", description: "Finanzas descentralizadas y protocolos" },
  { id: "nft", name: "NFTs", description: "Tokens no fungibles y arte digital" },
  { id: "gaming", name: "Gaming", description: "Juegos blockchain y metaverso" },
  { id: "dao", name: "DAOs", description: "Organizaciones autónomas descentralizadas" },
  { id: "exchange", name: "Exchanges", description: "Plataformas de intercambio crypto" },
]

const web2Categories = [
  { id: "fintech", name: "Fintech", description: "Tecnología financiera tradicional" },
  { id: "ecommerce", name: "E-commerce", description: "Comercio electrónico y retail" },
  { id: "saas", name: "SaaS", description: "Software como servicio" },
  { id: "social", name: "Social Media", description: "Redes sociales y contenido" },
  { id: "health", name: "HealthTech", description: "Tecnología en salud y bienestar" },
]

const talents = [
  {
    id: 1,
    name: "Audi",
    specialty: "Content Creator",
    rating: 4.9,
    projects: 5,
    categories: ["defi", "nft"],
    type: "web3",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%2011.39.56%20AM-qdifAqAt8JKS8YZSDRYiO4rN5WJUsk.jpeg",
  },
  {
    id: 2,
    name: "Laura",
    specialty: "Video Producer",
    rating: 4.8,
    projects: 4,
    categories: ["gaming", "exchange"],
    type: "web3",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%206.53.13%20PM-wlYukWw5PtYNCmOrPemNzkIat98G7u.jpeg",
  },
  {
    id: 3,
    name: "Ana Martínez",
    specialty: "Social Media Manager",
    rating: 4.7,
    projects: 5,
    categories: ["fintech", "saas"],
    type: "web2",
    avatar: "/professional-woman-marketing.png",
  },
  {
    id: 4,
    name: "Diego López",
    specialty: "Influencer",
    rating: 4.9,
    projects: 3,
    categories: ["social", "ecommerce"],
    type: "web2",
    avatar: "/professional-man-influencer.png",
  },
  {
    id: 5,
    name: "Sofia Chen",
    specialty: "Blockchain Developer",
    rating: 4.8,
    projects: 4,
    categories: ["defi", "dao"],
    type: "web3",
    avatar: "/asian-woman-developer.png",
  },
  {
    id: 6,
    name: "Miguel Santos",
    specialty: "NFT Artist",
    rating: 4.6,
    projects: 3,
    categories: ["nft", "gaming"],
    type: "web3",
    avatar: "/latino-artist-creative.png",
  },
  {
    id: 7,
    name: "Emma Johnson",
    specialty: "DeFi Analyst",
    rating: 4.9,
    projects: 5,
    categories: ["defi", "exchange"],
    type: "web3",
    avatar: "/blonde-woman-analyst.png",
  },
  {
    id: 8,
    name: "Alex Rodriguez",
    specialty: "Gaming Streamer",
    rating: 4.7,
    projects: 4,
    categories: ["gaming", "dao"],
    type: "web3",
    avatar: "/young-man-gamer-headset.png",
  },
  {
    id: 9,
    name: "Isabella Torres",
    specialty: "UX/UI Designer",
    rating: 4.8,
    projects: 5,
    categories: ["saas", "fintech"],
    type: "web2",
    avatar: "/latina-designer-creative.png",
  },
  {
    id: 10,
    name: "James Wilson",
    specialty: "Marketing Strategist",
    rating: 4.6,
    projects: 3,
    categories: ["ecommerce", "social"],
    type: "web2",
    avatar: "/professional-man-suit-marketing.png",
  },
  {
    id: 11,
    name: "Luna Park",
    specialty: "Community Manager",
    rating: 4.9,
    projects: 4,
    categories: ["dao", "nft"],
    type: "web3",
    avatar: "/korean-woman-community-manager.png",
  },
  {
    id: 12,
    name: "Roberto Silva",
    specialty: "Content Writer",
    rating: 4.5,
    projects: 5,
    categories: ["health", "saas"],
    type: "web2",
    avatar: "/mature-man-writer-glasses.png",
  },
  {
    id: 13,
    name: "Zara Ahmed",
    specialty: "Crypto Educator",
    rating: 4.8,
    projects: 3,
    categories: ["defi", "exchange"],
    type: "web3",
    avatar: "/middle-eastern-woman-educator.png",
  },
  {
    id: 14,
    name: "Tyler Brooks",
    specialty: "Brand Consultant",
    rating: 4.7,
    projects: 4,
    categories: ["social", "ecommerce"],
    type: "web2",
    avatar: "/young-professional-consultant.png",
  },
]

const companies = [
  {
    id: 1,
    name: "NTT Data",
    description:
      "Consultora multinacional de negocios y tecnología que reinventa y transforma la actividad de las organizaciones a través de la innovación y la tecnología.",
    rating: 4.8,
    projects: 5,
    categories: ["defi", "dao"],
    type: "web3",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uTxuAkCtBF8VCWJQSKxGiCuNGUedY6.png",
  },
  {
    id: 2,
    name: "Ethereum Lima",
    description:
      "La comunidad de Ethereum Lima fue creada en setiembre del 2020 por un grupo de entusiastas liderado por Adolfo Morán y Juan Diego Salcedo.",
    rating: 4.9,
    projects: 4,
    categories: ["gaming", "nft"],
    type: "web3",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y5WwcNMlt3fhBechY9Fv2JXifd81q6.png",
  },
  {
    id: 3,
    name: "TechFlow Solutions",
    description: "Empresa SaaS especializada en automatización",
    rating: 4.7,
    projects: 5,
    categories: ["saas", "fintech"],
    type: "web2",
    logo: "/abstract-tech-logo.png",
  },
  {
    id: 4,
    name: "HealthConnect",
    description: "Plataforma de telemedicina y salud digital",
    rating: 4.6,
    projects: 3,
    categories: ["health", "social"],
    type: "web2",
    logo: "/health-tech-logo.png",
  },
]

const companyProjects = {
  1: [
    {
      id: 1,
      title: "Transformación Digital Empresarial",
      objectives: "Promocionar servicios de consultoría en transformación digital",
      activities: "Crear contenido sobre casos de éxito, webinars educativos, posts en LinkedIn",
      remuneration: "$2,500 USD",
      status: "vigente",
      type: "web3",
    },
    {
      id: 2,
      title: "Serie Educativa Cloud Computing",
      objectives: "Educar empresas sobre migración a la nube",
      activities: "Producir 5 videos tutoriales, infografías técnicas, webinar en vivo",
      remuneration: "$3,200 USD",
      status: "pasado",
      type: "web3",
    },
    {
      id: 3,
      title: "Promoción Servicios de IA",
      objectives: "Aumentar awareness sobre soluciones de inteligencia artificial",
      activities: "Contenido sobre casos de uso de IA, demos técnicos, AMAs",
      remuneration: "$1,800 USD",
      status: "vigente",
      type: "web3",
    },
    {
      id: 4,
      title: "Campaña Ciberseguridad Empresarial",
      objectives: "Concientizar sobre importancia de la ciberseguridad",
      activities: "Videos educativos, posts informativos, colaboraciones con expertos",
      remuneration: "$2,000 USD",
      status: "pasado",
      type: "web3",
    },
    {
      id: 5,
      title: "Lanzamiento Plataforma IoT",
      objectives: "Promocionar nueva solución de Internet de las Cosas",
      activities: "Demos de productos, casos de uso industriales, contenido técnico",
      remuneration: "$2,800 USD",
      status: "vigente",
      type: "web3",
    },
  ],
  2: [
    {
      id: 6,
      title: "Promoción Nuevo NFT Game",
      objectives: "Generar hype para lanzamiento de juego P2E",
      activities: "Gameplay videos, streams en Twitch, reviews",
      remuneration: "$4,000 USDT",
      status: "vigente",
      type: "web3",
    },
    {
      id: 7,
      title: "Colección NFT Exclusiva",
      objectives: "Promocionar drop limitado de NFTs",
      activities: "Unboxing videos, arte conceptual, historias detrás",
      remuneration: "$3,500 USDT",
      status: "pasado",
      type: "web3",
    },
    {
      id: 8,
      title: "Torneo Gaming Blockchain",
      objectives: "Organizar competencia con premios en tokens",
      activities: "Cobertura del evento, entrevistas, highlights",
      remuneration: "$5,000 USDT",
      status: "vigente",
      type: "web3",
    },
    {
      id: 9,
      title: "Metaverso Land Sale",
      objectives: "Promocionar venta de terrenos virtuales",
      activities: "Tours virtuales, explicaciones de utilidad, demos",
      remuneration: "$3,800 USDT",
      status: "pasado",
      type: "web3",
    },
  ],
  3: [
    {
      id: 10,
      title: "Lanzamiento SaaS Automation",
      objectives: "Promocionar nueva herramienta de automatización",
      activities: "Demos en video, casos de uso, testimoniales",
      remuneration: "$2,200 USD",
      status: "vigente",
      type: "web2",
    },
    {
      id: 11,
      title: "Campaña B2B LinkedIn",
      objectives: "Generar leads calificados para empresas",
      activities: "Contenido profesional, case studies, whitepapers",
      remuneration: "$3,000 USD",
      status: "pasado",
      type: "web2",
    },
    {
      id: 12,
      title: "Webinar Series Fintech",
      objectives: "Educar sobre automatización financiera",
      activities: "Presentaciones, Q&A sessions, follow-up content",
      remuneration: "$2,500 USD",
      status: "vigente",
      type: "web2",
    },
    {
      id: 13,
      title: "Integration Partnership",
      objectives: "Promocionar nuevas integraciones API",
      activities: "Tutoriales técnicos, documentación, demos",
      remuneration: "$2,800 USD",
      status: "pasado",
      type: "web2",
    },
    {
      id: 14,
      title: "Customer Success Stories",
      objectives: "Mostrar casos de éxito de clientes",
      activities: "Entrevistas, video testimoniales, case studies",
      remuneration: "$2,000 USD",
      status: "vigente",
      type: "web2",
    },
  ],
  4: [
    {
      id: 15,
      title: "Telemedicina Awareness",
      objectives: "Educar sobre beneficios de consultas virtuales",
      activities: "Contenido educativo, testimonios de pacientes",
      remuneration: "$1,800 USD",
      status: "vigente",
      type: "web2",
    },
    {
      id: 16,
      title: "Mental Health Campaign",
      objectives: "Promover servicios de salud mental online",
      activities: "Contenido sensible, recursos informativos",
      remuneration: "$2,200 USD",
      status: "pasado",
      type: "web2",
    },
    {
      id: 17,
      title: "Elderly Care Digital",
      objectives: "Enseñar tecnología médica a adultos mayores",
      activities: "Tutoriales simples, contenido accesible",
      remuneration: "$1,500 USD",
      status: "vigente",
      type: "web2",
    },
  ],
}

const talentProjects = {
  1: [
    {
      id: 101,
      title: "Explicando DeFi para Principiantes",
      objectives: "Crear contenido educativo sobre protocolos DeFi",
      activities: "Videos explicativos, infografías, posts en redes sociales",
      remuneration: "$1,500 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 102,
      title: "Review de Wallet MetaMask",
      objectives: "Enseñar uso seguro de wallets crypto",
      activities: "Tutorial paso a paso, tips de seguridad, Q&A",
      remuneration: "$800 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 103,
      title: "Análisis de NFT Collection",
      objectives: "Revisar nueva colección de arte digital",
      activities: "Unboxing, análisis de rareza, predicciones de precio",
      remuneration: "$1,200 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 104,
      title: "Cobertura de Conferencia Blockchain",
      objectives: "Reportar eventos principales de la industria",
      activities: "Entrevistas, resúmenes, contenido en vivo",
      remuneration: "$2,000 USDT",
      status: "finalizado",
      type: "web3",
    },
  ],
  2: [
    {
      id: 201,
      title: "Documental Gaming Blockchain",
      objectives: "Mostrar evolución de juegos P2E",
      activities: "Entrevistas a desarrolladores, gameplay, análisis",
      remuneration: "$3,500 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 202,
      title: "Trailer para Nuevo Exchange",
      objectives: "Crear video promocional profesional",
      activities: "Producción audiovisual, motion graphics, edición",
      remuneration: "$2,800 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 203,
      title: "Serie Educativa Trading",
      objectives: "Enseñar análisis técnico básico",
      activities: "Videos tutoriales, ejemplos prácticos, ejercicios",
      remuneration: "$4,000 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 204,
      title: "Cobertura de Hackathon",
      objectives: "Documentar competencia de desarrolladores",
      activities: "Filmación del evento, entrevistas, highlights",
      remuneration: "$2,200 USDT",
      status: "en_progreso",
      type: "web3",
    },
  ],
  3: [
    {
      id: 301,
      title: "Campaña Lanzamiento Fintech",
      objectives: "Generar awareness para nueva app financiera",
      activities: "Estrategia de contenido, posts programados, engagement",
      remuneration: "$2,500 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 302,
      title: "Gestión Redes SaaS Startup",
      objectives: "Aumentar seguidores y conversiones",
      activities: "Content calendar, community management, ads",
      remuneration: "$3,200 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 303,
      title: "Crisis Management Healthcare",
      objectives: "Manejar comunicación durante crisis",
      activities: "Respuesta rápida, comunicados, monitoreo",
      remuneration: "$4,000 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 304,
      title: "Influencer Campaign E-commerce",
      objectives: "Coordinar colaboraciones con micro-influencers",
      activities: "Selección de talentos, negociación, seguimiento de KPIs",
      remuneration: "$2,800 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 305,
      title: "Rebranding Social Media",
      objectives: "Actualizar presencia digital de marca",
      activities: "Nuevos templates, bio updates, content refresh",
      remuneration: "$1,800 USD",
      status: "finalizado",
      type: "web2",
    },
  ],
  4: [
    {
      id: 401,
      title: "Promoción App de Delivery",
      objectives: "Generar descargas y primeras órdenes",
      activities: "Posts patrocinados, stories, códigos de descuento",
      remuneration: "$1,500 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 402,
      title: "Review Productos Tech",
      objectives: "Mostrar gadgets y accesorios tecnológicos",
      activities: "Unboxing videos, reviews honestos, comparaciones",
      remuneration: "$2,200 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 403,
      title: "Campaña Lifestyle Brand",
      objectives: "Asociar marca con estilo de vida aspiracional",
      activities: "Contenido lifestyle, outfit posts, day in my life",
      remuneration: "$3,000 USD",
      status: "finalizado",
      type: "web2",
    },
  ],
  5: [
    {
      id: 501,
      title: "Smart Contract Audit",
      objectives: "Revisar seguridad de contratos DeFi",
      activities: "Análisis de código, documentación de vulnerabilidades, reporte técnico",
      remuneration: "$4,500 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 502,
      title: "DAO Governance Tutorial",
      objectives: "Explicar sistemas de votación descentralizada",
      activities: "Videos educativos, guías paso a paso, workshops",
      remuneration: "$2,800 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 503,
      title: "DeFi Protocol Integration",
      objectives: "Implementar nueva funcionalidad de yield farming",
      activities: "Desarrollo frontend, testing, documentación",
      remuneration: "$5,200 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 504,
      title: "Blockchain Security Workshop",
      objectives: "Educar sobre mejores prácticas de seguridad",
      activities: "Presentaciones técnicas, demos en vivo, Q&A",
      remuneration: "$3,000 USDT",
      status: "en_progreso",
      type: "web3",
    },
  ],
  6: [
    {
      id: 601,
      title: "Colección NFT Generativa",
      objectives: "Crear 10,000 NFTs únicos con rareza programática",
      activities: "Arte conceptual, programación generativa, metadata",
      remuneration: "$6,000 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 602,
      title: "Gaming Assets Design",
      objectives: "Diseñar items y personajes para juego P2E",
      activities: "Concept art, modelado 3D, animaciones",
      remuneration: "$4,200 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 603,
      title: "Marketplace Art Curation",
      objectives: "Seleccionar y promocionar arte digital de calidad",
      activities: "Evaluación artística, escritura de descripciones, promoción",
      remuneration: "$2,500 USDT",
      status: "finalizado",
      type: "web3",
    },
  ],
  7: [
    {
      id: 701,
      title: "DeFi Yield Comparison Report",
      objectives: "Analizar rendimientos de diferentes protocolos",
      activities: "Investigación de mercado, análisis de datos, reportes semanales",
      remuneration: "$3,800 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 702,
      title: "Risk Assessment Framework",
      objectives: "Desarrollar metodología de evaluación de riesgos DeFi",
      activities: "Modelado financiero, documentación, presentaciones",
      remuneration: "$4,500 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 703,
      title: "Exchange Liquidity Analysis",
      objectives: "Estudiar patrones de liquidez en DEXs",
      activities: "Análisis de datos on-chain, visualizaciones, insights",
      remuneration: "$3,200 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 704,
      title: "Token Economics Review",
      objectives: "Evaluar modelos tokenómicos de nuevos proyectos",
      activities: "Análisis económico, proyecciones, recomendaciones",
      remuneration: "$2,800 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 705,
      title: "DeFi Insurance Deep Dive",
      objectives: "Investigar protocolos de seguros descentralizados",
      activities: "Comparación de productos, análisis de cobertura, guías",
      remuneration: "$3,500 USDT",
      status: "finalizado",
      type: "web3",
    },
  ],
  8: [
    {
      id: 801,
      title: "P2E Game Tournament",
      objectives: "Organizar competencia de juegos blockchain",
      activities: "Streaming en vivo, comentarios, entrevistas a jugadores",
      remuneration: "$3,000 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 802,
      title: "DAO Community Building",
      objectives: "Crear y moderar comunidad de gaming DAO",
      activities: "Gestión de Discord, eventos comunitarios, governance",
      remuneration: "$2,200 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 803,
      title: "NFT Game Reviews",
      objectives: "Evaluar y reseñar nuevos juegos blockchain",
      activities: "Gameplay testing, video reviews, comparaciones",
      remuneration: "$1,800 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 804,
      title: "Gaming Guild Management",
      objectives: "Liderar guild de jugadores profesionales",
      activities: "Reclutamiento, training, estrategia de earnings",
      remuneration: "$4,000 USDT",
      status: "en_progreso",
      type: "web3",
    },
  ],
  9: [
    {
      id: 901,
      title: "Fintech App Redesign",
      objectives: "Mejorar UX de aplicación de pagos móviles",
      activities: "Research de usuarios, wireframes, prototipos, testing",
      remuneration: "$4,200 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 902,
      title: "SaaS Dashboard Design",
      objectives: "Crear interfaz intuitiva para herramienta B2B",
      activities: "User journey mapping, diseño de componentes, sistema de diseño",
      remuneration: "$3,800 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 903,
      title: "E-commerce Mobile App",
      objectives: "Diseñar experiencia de compra móvil optimizada",
      activities: "Prototipado, testing A/B, optimización de conversión",
      remuneration: "$3,500 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 904,
      title: "Banking Platform UX",
      objectives: "Simplificar procesos bancarios digitales",
      activities: "Análisis de flujos, rediseño de formularios, accesibilidad",
      remuneration: "$5,000 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 905,
      title: "Startup Brand Identity",
      objectives: "Crear identidad visual completa para fintech",
      activities: "Logo design, paleta de colores, guidelines, aplicaciones",
      remuneration: "$2,800 USD",
      status: "finalizado",
      type: "web2",
    },
  ],
  10: [
    {
      id: 1001,
      title: "E-commerce Growth Strategy",
      objectives: "Aumentar ventas online en 150% en 6 meses",
      activities: "Análisis de mercado, campañas paid, optimización SEO",
      remuneration: "$4,500 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 1002,
      title: "Social Media Campaign",
      objectives: "Lanzar producto con influencer marketing",
      activities: "Estrategia de contenido, gestión de influencers, métricas",
      remuneration: "$3,200 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 1003,
      title: "Brand Repositioning",
      objectives: "Cambiar percepción de marca en mercado premium",
      activities: "Investigación de mercado, nueva propuesta de valor, campaña",
      remuneration: "$5,500 USD",
      status: "finalizado",
      type: "web2",
    },
  ],
  11: [
    {
      id: 1101,
      title: "DAO Discord Management",
      objectives: "Crear y gestionar comunidad de 10K+ miembros",
      activities: "Moderación, eventos, bots, engagement strategies",
      remuneration: "$2,800 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 1102,
      title: "NFT Community Growth",
      objectives: "Hacer crecer comunidad de holders de NFT",
      activities: "Eventos exclusivos, AMAs, partnerships, gamification",
      remuneration: "$3,500 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 1103,
      title: "Governance Participation",
      objectives: "Aumentar participación en votaciones DAO",
      activities: "Educación sobre propuestas, incentivos, comunicación",
      remuneration: "$2,200 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 1104,
      title: "Cross-Chain Community",
      objectives: "Unificar comunidades de diferentes blockchains",
      activities: "Bridges de comunicación, eventos multi-chain, coordinación",
      remuneration: "$4,000 USDT",
      status: "en_progreso",
      type: "web3",
    },
  ],
  12: [
    {
      id: 1201,
      title: "HealthTech Content Strategy",
      objectives: "Crear contenido educativo sobre telemedicina",
      activities: "Artículos técnicos, whitepapers, case studies, blogs",
      remuneration: "$2,500 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 1202,
      title: "SaaS Documentation",
      objectives: "Escribir documentación técnica completa",
      activities: "API docs, user guides, tutorials, FAQs",
      remuneration: "$3,800 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 1203,
      title: "Medical Device Content",
      objectives: "Crear contenido regulatorio para dispositivos médicos",
      activities: "Manuales de usuario, documentos FDA, training materials",
      remuneration: "$4,200 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 1204,
      title: "Wellness Blog Series",
      objectives: "Escribir serie de artículos sobre bienestar digital",
      activities: "Investigación médica, entrevistas a expertos, SEO optimization",
      remuneration: "$2,000 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 1205,
      title: "Pharmaceutical Copywriting",
      objectives: "Crear contenido para lanzamiento de medicamento",
      activities: "Material promocional, estudios clínicos, compliance review",
      remuneration: "$5,000 USD",
      status: "finalizado",
      type: "web2",
    },
  ],
  13: [
    {
      id: 1301,
      title: "Crypto Basics Course",
      objectives: "Crear curso online para principiantes en crypto",
      activities: "Videos educativos, quizzes, certificaciones, soporte",
      remuneration: "$3,500 USDT",
      status: "finalizado",
      type: "web3",
    },
    {
      id: 1302,
      title: "Exchange Trading Workshop",
      objectives: "Enseñar estrategias de trading en exchanges",
      activities: "Webinars en vivo, análisis técnico, simulaciones",
      remuneration: "$2,800 USDT",
      status: "en_progreso",
      type: "web3",
    },
    {
      id: 1303,
      title: "DeFi Safety Guide",
      objectives: "Educar sobre riesgos y seguridad en DeFi",
      activities: "Guías escritas, videos explicativos, casos de estudio",
      remuneration: "$2,200 USDT",
      status: "finalizado",
      type: "web3",
    },
  ],
  14: [
    {
      id: 1401,
      title: "Social Media Brand Audit",
      objectives: "Evaluar y mejorar presencia digital de marca",
      activities: "Análisis competitivo, recomendaciones estratégicas, implementación",
      remuneration: "$3,200 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 1402,
      title: "E-commerce Brand Strategy",
      objectives: "Desarrollar identidad de marca para tienda online",
      activities: "Brand positioning, voice & tone, visual guidelines",
      remuneration: "$4,500 USD",
      status: "en_progreso",
      type: "web2",
    },
    {
      id: 1403,
      title: "Influencer Partnership Program",
      objectives: "Crear programa de embajadores de marca",
      activities: "Selección de influencers, contratos, seguimiento de KPIs",
      remuneration: "$3,800 USD",
      status: "finalizado",
      type: "web2",
    },
    {
      id: 1404,
      title: "Crisis Communication Plan",
      objectives: "Preparar estrategia para manejo de crisis de marca",
      activities: "Protocolos de respuesta, templates, training de equipo",
      remuneration: "$2,500 USD",
      status: "en_progreso",
      type: "web2",
    },
  ],
}

export default function BrandsPage() {
  const [activeTab, setActiveTab] = useState<"web3" | "web2">("web3")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<any>(null)
  const [showProjects, setShowProjects] = useState(false)
  const [selectedTalent, setSelectedTalent] = useState<any>(null)
  const [showTalentProjects, setShowTalentProjects] = useState(false)

  const currentCategories = activeTab === "web3" ? web3Categories : web2Categories
  const filteredTalents = talents.filter((talent) => {
    const matchesTab = talent.type === activeTab
    const matchesCategory = !selectedCategory || talent.categories.includes(selectedCategory)
    return matchesTab && matchesCategory
  })

  const filteredCompanies = companies.filter((company) => {
    const matchesTab = company.type === activeTab
    const matchesCategory = !selectedCategory || company.categories.includes(selectedCategory)
    return matchesTab && matchesCategory
  })

  const handleCompanyClick = (company: any) => {
    setSelectedCompany(company)
    setShowProjects(true)
  }

  const getCompanyProjects = (companyId: number) => {
    return companyProjects[companyId as keyof typeof companyProjects] || []
  }

  const handleTalentClick = (talent: any) => {
    setSelectedTalent(talent)
    setShowTalentProjects(true)
  }

  const getTalentProjects = (talentId: number) => {
    return talentProjects[talentId as keyof typeof talentProjects] || []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C003E] via-[#6A0DAD] via-[#D63384] to-[#FF8A3D]">
      <header className="py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-white">POP</span>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/brands" className="text-orange-300 hover:text-white transition-colors font-medium">
                Brands
              </Link>
              <Link href="/#talento" className="text-white hover:text-orange-300 transition-colors font-medium">
                Talento
              </Link>
              <Link href="/#blog" className="text-white hover:text-orange-300 transition-colors font-medium">
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Proof of Talent</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Conecta con creadores especializados en Web3 y Web2 para impulsar tu proyecto
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            <Button
              variant={activeTab === "web3" ? "default" : "ghost"}
              className={`rounded-full px-8 py-2 ${
                activeTab === "web3" ? "bg-white text-black hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
              onClick={() => {
                setActiveTab("web3")
                setSelectedCategory(null)
              }}
            >
              Web3
            </Button>
            <Button
              variant={activeTab === "web2" ? "default" : "ghost"}
              className={`rounded-full px-8 py-2 ${
                activeTab === "web2" ? "bg-white text-black hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
              onClick={() => {
                setActiveTab("web2")
                setSelectedCategory(null)
              }}
            >
              Web2
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${
                selectedCategory === null
                  ? "bg-white text-black hover:bg-gray-100"
                  : "border-white/30 text-white hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </Button>
            {currentCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? "bg-white text-black hover:bg-gray-100"
                    : "border-white/30 text-white hover:bg-white/20"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Descriptions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {currentCategories.map((category) => (
            <Card
              key={category.id}
              className="bg-gradient-to-br from-purple-900/40 to-orange-900/40 backdrop-blur-sm border-white/20"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                <CardDescription className="text-white/70">{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Talents Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Talentos Afiliados ({filteredTalents.length})</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTalents.map((talent) => (
              <Card
                key={talent.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => handleTalentClick(talent)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={talent.avatar || "/placeholder.svg"}
                      alt={talent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-lg">{talent.name}</CardTitle>
                  <CardDescription className="text-white/70">{talent.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-medium">{talent.rating}</span>
                    </div>
                    <span className="text-white/70 text-sm">{talent.projects} proyectos completados</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {talent.categories.map((catId) => {
                      const category = currentCategories.find((c) => c.id === catId)
                      return category ? (
                        <Badge key={catId} variant="secondary" className="text-xs bg-white/20 text-white">
                          {category.name}
                        </Badge>
                      ) : null
                    })}
                  </div>

                  <Button className="w-full bg-white hover:bg-gray-100 text-black">Ver Proyectos</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Empresas Afiliadas ({filteredCompanies.length})</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company) => (
              <Card
                key={company.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => handleCompanyClick(company)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white/20 flex items-center justify-center">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-white text-lg">{company.name}</CardTitle>
                  <CardDescription className="text-white/70 text-sm">{company.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-medium">{company.rating}</span>
                    </div>
                    <span className="text-white/70">{company.projects} proyectos activos</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {company.categories.map((catId) => {
                      const category = currentCategories.find((c) => c.id === catId)
                      return category ? (
                        <Badge key={catId} variant="secondary" className="text-xs bg-white/20 text-white">
                          {category.name}
                        </Badge>
                      ) : null
                    })}
                  </div>

                  <Button className="w-full bg-white hover:bg-gray-100 text-black">Ver Proyectos</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={showProjects} onOpenChange={setShowProjects}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-[#2C003E] via-[#6A0DAD] to-[#D63384] border-white/20">
            <DialogHeader>
              <DialogTitle className="text-white text-2xl flex items-center gap-3">
                {selectedCompany && (
                  <>
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/20 flex items-center justify-center">
                      <img
                        src={selectedCompany.logo || "/placeholder.svg"}
                        alt={`${selectedCompany.name} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    Proyectos de {selectedCompany.name}
                  </>
                )}
              </DialogTitle>
            </DialogHeader>

            {selectedCompany && (
              <div className="space-y-6">
                {/* Company Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white/80 mb-2">{selectedCompany.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-medium">{selectedCompany.rating}</span>
                    </div>
                    <span className="text-white/70">{selectedCompany.projects} proyectos activos</span>
                  </div>
                </div>

                {/* Projects List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Proyectos Disponibles</h3>
                  {getCompanyProjects(selectedCompany.id).map((project) => (
                    <Card key={project.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                          <Badge
                            variant={project.status === "vigente" ? "default" : "secondary"}
                            className={
                              project.status === "vigente" ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                            }
                          >
                            {project.status === "vigente" ? (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" /> Vigente
                              </>
                            ) : (
                              <>
                                <Calendar className="w-3 h-3 mr-1" /> Finalizado
                              </>
                            )}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4 text-orange-400" />
                            <span className="text-white font-medium">Objetivos:</span>
                          </div>
                          <p className="text-white/80 text-sm">{project.objectives}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white font-medium">Actividades:</span>
                          </div>
                          <p className="text-white/80 text-sm">{project.activities}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-4 h-4 text-yellow-400" />
                            <span className="text-white font-medium">Remuneración:</span>
                          </div>
                          <p className="text-white font-semibold">{project.remuneration}</p>
                        </div>

                        {project.status === "vigente" && (
                          <Button className="w-full bg-white hover:bg-gray-100 text-black mt-4">
                            Aplicar a este proyecto
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={showTalentProjects} onOpenChange={setShowTalentProjects}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-[#2C003E] via-[#6A0DAD] to-[#D63384] border-white/20">
            <DialogHeader>
              <DialogTitle className="text-white text-2xl flex items-center gap-3">
                {selectedTalent && (
                  <>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={selectedTalent.avatar || "/placeholder.svg"}
                        alt={selectedTalent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    Proyectos de {selectedTalent.name}
                  </>
                )}
              </DialogTitle>
            </DialogHeader>

            {selectedTalent && (
              <div className="space-y-6">
                {/* Talent Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white/80 mb-2">{selectedTalent.specialty}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-medium">{selectedTalent.rating}</span>
                    </div>
                    <span className="text-white/70">{selectedTalent.projects} proyectos completados</span>
                  </div>
                </div>

                {/* Projects List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Historial de Proyectos</h3>
                  {getTalentProjects(selectedTalent.id).map((project) => (
                    <Card key={project.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                          <Badge
                            variant={project.status === "en_progreso" ? "default" : "secondary"}
                            className={
                              project.status === "en_progreso" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                            }
                          >
                            {project.status === "en_progreso" ? (
                              <>
                                <Calendar className="w-3 h-3 mr-1" /> En Progreso
                              </>
                            ) : (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" /> Finalizado
                              </>
                            )}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4 text-orange-400" />
                            <span className="text-white font-medium">Objetivos:</span>
                          </div>
                          <p className="text-white/80 text-sm">{project.objectives}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white font-medium">Actividades:</span>
                          </div>
                          <p className="text-white/80 text-sm">{project.activities}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-4 h-4 text-yellow-400" />
                            <span className="text-white font-medium">Remuneración:</span>
                          </div>
                          <p className="text-white font-semibold">{project.remuneration}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
