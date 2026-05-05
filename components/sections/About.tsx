'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react'
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

const funFacts = [
  { emoji: '🌸', label: 'Favorite color', value: 'Pink. Always pink.' },
  { emoji: '🦾', label: 'Biggest inspiration', value: 'Tony Stark. Engineering with style.' },
  { emoji: '🎮', label: 'Off the clock', value: 'Gaming, music, traveling, films' },
  { emoji: '🎬', label: 'Current watchlist', value: 'Horror, Marvel, Black Mirror' },
  { emoji: '🎓', label: 'Latest school', value: 'SMA Negeri 1 Pasir Penyu' },
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
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">01 · About</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            <GradientText>Systems thinker.</GradientText> <span className="text-white">API builder.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <GlassCard className="p-6">
                <p className="mb-4 leading-relaxed text-white/65">
                  Backend engineer with production experience across enterprise services and
                  AI-powered SaaS, covering everything from schema design and business logic to Docker containers and
                  cloud deployments. I own services end-to-end and I like it that way.
                </p>
                <p className="leading-relaxed text-white/65">
                  Deeply interested in AI-augmented development: LLM APIs, retrieval pipelines,
                  and backend infrastructure that makes AI products reliable at scale. Tony Stark
                  didn't outsource the arc reactor. I don't outsource the hard parts either.
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
                    <GraduationCap size={14} className="shrink-0 text-cyan-400" />
                    SMA Negeri 1 Pasir Penyu
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/45">
                    <Heart size={14} className="shrink-0 text-pink-400" />
                    Open to full-time backend roles
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
              <GlassCard className="p-6">
                <p className="mb-4 font-mono text-[10px] tracking-widest text-white/35 uppercase">
                  Core Stack (hover for years)
                </p>
                <div className="flex flex-wrap gap-2">
                  {coreBadges.map((badge) => (
                    <StackBadge key={badge.name} name={badge.name} years={badge.years} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <GlassCard className="h-full p-6">
              <p className="mb-5 font-mono text-[10px] tracking-widest text-white/35 uppercase">
                Fun facts
              </p>
              <div className="flex flex-col gap-4">
                {funFacts.map(({ emoji, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 text-lg leading-none">{emoji}</span>
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{label}</div>
                      <div className="mt-0.5 text-sm text-white/70">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
                <p className="font-mono text-xs text-fuchsia-300/70 italic">
                  "The most dangerous person in the room is the one who has both the vision and the tools to build it."
                </p>
                <p className="mt-1.5 font-mono text-[10px] text-white/25">Black Mirror energy, Tony Stark execution</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
