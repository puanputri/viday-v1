'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'

const stackGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Frameworks',
    items: ['Quarkus', 'Spring Boot', 'Node.js', 'Express.js'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Architecture',
    items: ['Microservices', 'RESTful API', 'Event-Driven'],
  },
  {
    label: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions'],
  },
  {
    label: 'Tools',
    items: ['IntelliJ IDEA', 'VS Code', 'Cursor AI', 'Postman', 'DBeaver', 'Jira'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export default function Stack() {
  return (
    <section id="stack" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">02 · Stack</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Tools I <GradientText>ship with</GradientText>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stackGroups.map((group) => (
            <motion.div key={group.label} variants={item}>
              <GlassCard hover className="group h-full p-5">
                <p className="mb-3 font-mono text-[10px] tracking-widest text-violet-400/65 uppercase">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-1 font-mono text-xs text-white/55 transition-colors duration-200 group-hover:border-white/[0.11]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
