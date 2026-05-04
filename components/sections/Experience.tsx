'use client'

import { motion } from 'framer-motion'
import GradientText from '@/components/ui/GradientText'
import TimelineNode from '@/components/ui/TimelineNode'

const experiences = [
  {
    role: 'Backend Developer',
    company: 'GenAILabs',
    period: '2023 – Present',
    bullets: [
      'Shipped SerpAI — 17+ AI-powered SEO workflow templates with runtime-switchable Claude/Gemini backends, Google APIs integration, and Stripe tiered billing',
      'Built GlobalVin — VIN decoding & vehicle history REST API, containerized with Docker multi-stage Alpine (<80 MB production image)',
      'Designed pluggable SERP scraper pool supporting 8+ providers with automatic failover for SLA continuity',
      'Implemented webhook-driven Stripe usage metering, decoupled from core business logic',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Fajri Inc',
    period: '2023 – 2024',
    bullets: [
      'Designed and delivered RESTful Java/Quarkus services for enterprise clients across multiple production deployments',
      'Improved data processing efficiency by 25% through query optimization and service-layer refactoring',
      'Reduced API response times by 15% and error rates by 30% via structured exception handling and caching',
      'Maintained 95% service uptime across client-facing deployments',
    ],
  },
  {
    role: 'Backend Engineering Mentee',
    company: 'Super Pro (Private Mentorship)',
    period: 'Jan 2023 – Present',
    bullets: [
      'Advanced backend design patterns, architecture principles, and hands-on project delivery under structured mentorship',
      'Applied learnings directly to production work at Fajri Inc and GenAILabs',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">04 — Experience</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Where I've <GradientText>built things</GradientText>
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineNode
              key={exp.company + exp.period}
              {...exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
