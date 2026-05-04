import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary'
}

export default function GradientText({
  className,
  variant = 'primary',
  children,
  ...props
}: GradientTextProps) {
  const gradient =
    variant === 'primary'
      ? 'from-violet-400 via-fuchsia-400 to-cyan-400'
      : 'from-fuchsia-400 to-cyan-400'

  return (
    <span
      className={cn('bg-gradient-to-r bg-clip-text text-transparent', gradient, className)}
      {...props}
    >
      {children}
    </span>
  )
}
