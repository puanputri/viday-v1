import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function GlassCard({ className, hover = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md',
        hover && 'transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
