'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, Sparkles } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import StackBadge from '@/components/ui/StackBadge'

const coreBadges = [
  { name: 'Java', years: 2 },
  { name: 'Quarkus', years: 2 },
  { name: 'Spring Boot', years: 2 },
  { name: 'Python', years: 2 },
  { name: 'PostgreSQL', years: 2 },
  { name: 'MongoDB', years: 1 },
  { name: 'Docker', years: 2 },
  { name: 'Kubernetes', years: 1 },
  { name: 'REST API', years: 2 },
  { name: 'Microservices', years: 2 },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export default function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">01 — About</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            <GradientText>Systems thinker.</GradientText> <span className="text-white">API builder.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <GlassCard className="h-full p-6">
              <p className="mb-4 leading-relaxed text-white/65">
                Backend engineer with production experience across automotive data platforms and
                AI-powered SaaS — from schema design and business logic to Docker containers and
                cloud deployments. Comfortable owning a service end-to-end.
              </p>
              <p className="leading-relaxed text-white/65">
                Currently focused on AI-augmented development: integrating LLM APIs, building
                retrieval pipelines, and designing backend infrastructure that makes AI products
                reliable at scale.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-sm text-white/45">
                  <MapPin size={14} className="shrink-0 text-violet-400" />
                  Jakarta, Indonesia
                </div>
                <div className="flex items-center gap-2 text-sm text-white/45">
                  <Briefcase size={14} className="shrink-0 text-fuchsia-400" />
                  Backend · AI-Augmented Systems
                </div>
                <div className="flex items-center gap-2 text-sm text-white/45">
                  <Sparkles size={14} className="shrink-0 text-cyan-400" />
                  Open source · New frameworks · LLM integration
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <GlassCard className="h-full p-6">
              <p className="mb-4 font-mono text-[10px] tracking-widest text-white/35 uppercase">
                Core Stack — hover for experience
              </p>
              <div className="flex flex-wrap gap-2">
                {coreBadges.map((badge) => (
                  <StackBadge key={badge.name} name={badge.name} years={badge.years} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
