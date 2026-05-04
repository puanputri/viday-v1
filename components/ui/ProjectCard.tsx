'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import GlassCard from './GlassCard'

interface ProjectCardProps {
  slug: string
  title: string
  company: string
  tagline: string
  tech: string[]
  metrics: { label: string; value: string }[]
}

export default function ProjectCard({ slug, title, company, tagline, tech, metrics }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg'])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15 }}
    >
      <GlassCard className="group flex h-full flex-col p-6 transition-all duration-300 hover:border-white/[0.15]">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{company}</span>
            <h3 className="mt-0.5 text-lg font-bold text-white">{title}</h3>
          </div>
          <Link
            href={`/projects/${slug}`}
            className="rounded-lg border border-white/[0.08] p-1.5 text-white/30 opacity-0 transition-all duration-200 hover:border-white/20 hover:text-white group-hover:opacity-100"
            aria-label={`View ${title} case study`}
          >
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-white/50">{tagline}</p>

        {metrics.length > 0 && (
          <div className="mb-5 grid grid-cols-2 gap-2">
            {metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                <div className="font-mono text-sm font-bold text-white">{m.value}</div>
                <div className="mt-0.5 text-[10px] text-white/30">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-white/40"
            >
              {t}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="px-2 py-0.5 font-mono text-[10px] text-white/25">+{tech.length - 4}</span>
          )}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="flex items-center gap-1 font-mono text-xs text-violet-400 transition-colors hover:text-violet-300"
        >
          View case study <ArrowUpRight size={11} />
        </Link>
      </GlassCard>
    </motion.div>
  )
}
