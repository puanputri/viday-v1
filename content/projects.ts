export type ProjectStatus = 'shipped' | 'in-progress'

export interface Project {
  slug: string
  title: string
  company: string
  url?: string
  status: ProjectStatus
  tagline: string
  description: string
  tech: string[]
  metrics: { label: string; value: string }[]
  problem: string
  decisions: { title: string; reasoning: string }[]
  results: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'serpai',
    title: 'SerpAI',
    company: 'GenAILabs',
    status: 'shipped',
    tagline: '17+ AI-powered SEO workflows with runtime-switchable LLM backends',
    description:
      'AI-augmented SEO platform featuring 17+ workflow templates powered by Claude and Gemini with runtime model switching. Integrates Google Search Console, Google Ads APIs, and 8+ SERP scrapers. Stripe-backed tiered billing.',
    tech: ['Python', 'Claude API', 'Gemini', 'Stripe', 'Google APIs', 'PostgreSQL', 'REST API'],
    metrics: [
      { label: 'Workflow templates', value: '17+' },
      { label: 'SERP providers', value: '8+' },
      { label: 'LLM backends', value: '2 (live)' },
    ],
    problem:
      'SEO teams were stitching together 5+ separate tools to run a single research workflow. Each tool had its own data model, billing, and API key management — a compounding operational burden that killed productivity.',
    decisions: [
      {
        title: 'Runtime-switchable LLM router',
        reasoning:
          'Customers have different cost/quality preferences. A unified router lets them choose Claude for quality or Gemini for cost without changing their integration or workflow templates.',
      },
      {
        title: 'Pluggable SERP scraper pool',
        reasoning:
          'SERP providers go down, rate-limit, or change pricing. Supporting 8+ providers with automatic failover ensures SLA continuity and removes single-vendor risk.',
      },
      {
        title: 'Webhook-driven Stripe billing',
        reasoning:
          'Decoupled usage metering from the core workflow engine — billing logic stays in Stripe webhooks, not buried in business logic, keeping the service layer testable.',
      },
    ],
    results: [
      '17+ production SEO workflow templates shipped',
      'Runtime model switching between Claude (Anthropic) and Gemini — zero downtime switchover',
      '8+ SERP provider integrations with automatic failover',
      'Stripe tiered billing with webhook-driven usage metering',
      'Google Search Console & Google Ads API integration in a single platform',
    ],
    featured: true,
  },
  {
    slug: 'globalvin',
    title: 'GlobalVin',
    company: 'GenAILabs',
    url: 'https://globalvin.co',
    status: 'shipped',
    tagline: 'Vehicle data platform — VIN decoding & history reports at scale',
    description:
      'REST API platform delivering VIN decoding, vehicle history reports, and automotive data services. Containerized with Docker multi-stage Alpine builds for a minimal, production-grade deployment footprint.',
    tech: ['Python', 'Docker', 'PostgreSQL', 'REST API', 'Alpine Linux'],
    metrics: [
      { label: 'Image size', value: '<80 MB' },
      { label: 'API endpoints', value: '12+' },
      { label: 'Data providers', value: '3' },
    ],
    problem:
      'Automotive platforms needed a reliable, unified API to decode VINs and retrieve vehicle history across multiple data providers — without vendor lock-in or per-provider integration overhead.',
    decisions: [
      {
        title: 'Multi-stage Docker build on Alpine',
        reasoning:
          'Reduced the production image from ~800 MB to under 80 MB, cutting cold-start times and GHCR storage costs while keeping the build environment fully reproducible.',
      },
      {
        title: 'Provider adapter pattern',
        reasoning:
          'Decoupled data providers behind a common interface, making it trivial to add a fourth provider without changing upstream code or breaking existing consumers.',
      },
    ],
    results: [
      'Production Docker image under 80 MB via Alpine multi-stage build',
      'Unified API abstracting 3 automotive data providers',
      'Zero breaking changes across provider swaps via adapter pattern',
      'Live at globalvin.co',
    ],
    featured: true,
  },
  {
    slug: 'fajri-backend',
    title: 'Enterprise Backend Services',
    company: 'Fajri Inc',
    status: 'shipped',
    tagline: 'Quarkus microservices — 25% faster data processing for enterprise clients',
    description:
      'Designed and delivered RESTful API services for enterprise clients using Java and Quarkus. Measurable improvements across data processing throughput, API latency, uptime, and error rates across multiple production deployments.',
    tech: ['Java', 'Quarkus', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API'],
    metrics: [
      { label: 'Processing efficiency', value: '+25%' },
      { label: 'API response time', value: '-15%' },
      { label: 'Service uptime', value: '95%' },
      { label: 'Error rate reduction', value: '-30%' },
    ],
    problem:
      'Enterprise clients needed backend services that could handle growing data volumes without proportional infrastructure cost increases, while maintaining strict uptime and response-time SLAs.',
    decisions: [
      {
        title: 'Quarkus over Spring Boot',
        reasoning:
          'Faster startup times and lower memory footprint in containerized environments — critical for elastic scaling under variable load and reducing cold-start penalty in Docker/K8s.',
      },
      {
        title: 'Layered architecture (resource → service → repository)',
        reasoning:
          'Kept test coverage tractable and made onboarding new engineers faster. Each layer has a single responsibility and can be tested in isolation.',
      },
    ],
    results: [
      '25% improvement in data processing efficiency',
      '15% reduction in API response time',
      '95% service uptime maintained across production deployments',
      '30% reduction in error rates post-migration to structured exception handling',
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
