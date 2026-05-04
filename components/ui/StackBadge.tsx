'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StackBadgeProps {
  name: string
  years?: number
}

export default function StackBadge({ name, years }: StackBadgeProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="inline-flex cursor-default items-center rounded-lg border border-white/[0.10] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-white/70 transition-all duration-200 hover:border-violet-500/40 hover:text-white/90">
        {name}
      </span>
      <AnimatePresence>
        {hovered && years !== undefined && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#1A1A2E] px-2 py-1 font-mono text-[10px] text-white/60"
          >
            {years}y exp
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
