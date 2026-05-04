'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import GradientText from '@/components/ui/GradientText'

const words = ['AI-Augmented', 'Backend', 'Engineer']

const wordReveal = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16">
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-400"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Open to full-time opportunities
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="mb-4"
        >
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[90px]">
            {words.map((word, i) => (
              <motion.span key={word} variants={wordReveal} className="mr-[0.2em] inline-block">
                {i === 0 ? <GradientText>{word}</GradientText> : <span className="text-white">{word}</span>}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-3 font-mono text-xs tracking-[0.2em] text-white/35 uppercase"
        >
          Puan Putri Saqinah Firdaus · Jakarta, Indonesia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
        >
          Building cloud-native systems from Jakarta —{' '}
          <span className="text-white/80">Java/Quarkus microservices</span> and{' '}
          <span className="text-white/80">AI-integrated APIs</span> shipped at{' '}
          <span className="text-white/65">GenAILabs</span> and{' '}
          <span className="text-white/65">Fajri Inc</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <ExternalLink size={15} />
              View Projects
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/75 transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              <Download size={15} />
              Download CV
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/25"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  )
}
