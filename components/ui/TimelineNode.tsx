'use client'

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

interface TimelineNodeProps {
  role: string
  company: string
  period: string
  bullets: string[]
  isLast?: boolean
}

export default function TimelineNode({ role, company, period, bullets, isLast = false }: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 pl-8"
    >
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="z-10 mt-1.5 h-3 w-3 rounded-full border-2 border-violet-500 bg-[#0A0A0F]" />
        {!isLast && (
          <div
            className="mt-1 w-px flex-1 bg-gradient-to-b from-violet-500/40 to-transparent"
            style={{ minHeight: '72px' }}
          />
        )}
      </div>

      <GlassCard className="mb-6 w-full p-5">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-semibold text-white">{role}</h3>
            <p className="text-sm text-violet-400">{company}</p>
          </div>
          <span className="whitespace-nowrap font-mono text-xs text-white/30">{period}</span>
        </div>
        <ul className="space-y-1.5">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-white/55">
              <span className="mt-0.5 shrink-0 text-violet-500">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  )
}
