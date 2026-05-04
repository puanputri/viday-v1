'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { toast } from 'sonner'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/puanputri',
    icon: Github,
    note: 'See the code',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: Linkedin,
    note: 'Connect professionally',
  },
  {
    label: 'Email',
    href: 'mailto:puanputrisaqinahf@gmail.com',
    icon: Mail,
    note: 'puanputrisaqinahf@gmail.com',
  },
]

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      toast.success("Message sent — I'll get back to you shortly.")
      reset()
    } catch {
      toast.error('Something went wrong. Email me directly at puanputrisaqinahf@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">05 — Contact</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Let's <GradientText>work together</GradientText>
          </h2>
          <p className="mt-3 max-w-md text-white/45">
            Open to full-time backend engineering roles. Best reach: the form below or email.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <input
                    {...register('name')}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-violet-500/60 focus:bg-white/[0.06]"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-violet-500/60 focus:bg-white/[0.06]"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-violet-500/60 focus:bg-white/[0.06]"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <Send size={14} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {socials.map(({ label, href, icon: Icon, note }) => (
              <GlassCard key={label} hover className="p-4">
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/55 transition-colors hover:text-white"
                >
                  <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-2">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{label}</div>
                    <div className="text-xs text-white/35">{note}</div>
                  </div>
                </a>
              </GlassCard>
            ))}

            <GlassCard className="mt-1 p-5">
              <p className="mb-1.5 font-mono text-[10px] tracking-widest text-white/30 uppercase">Response time</p>
              <p className="text-sm text-white/55">Usually within 24 hours on working days.</p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
