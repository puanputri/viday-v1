'use client'

import { motion } from 'framer-motion'
import GradientText from '@/components/ui/GradientText'
import ProjectCard from '@/components/ui/ProjectCard'
import { getFeaturedProjects } from '@/content/projects'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export default function Projects() {
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">03 — Projects</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            <GradientText>Shipped</GradientText> in production
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: '1200px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                company={project.company}
                tagline={project.tagline}
                tech={project.tech}
                metrics={project.metrics}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
