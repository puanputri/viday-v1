import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getProjectBySlug, projects } from '@/content/projects'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import AnimatedBg from '@/components/shared/AnimatedBg'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import NoiseOverlay from '@/components/shared/NoiseOverlay'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Puan Putri`,
    description: project.tagline,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <AnimatedBg />
      <NoiseOverlay />
      <Navbar />
      <main className="min-h-screen px-4 pb-16 pt-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-white/35 transition-colors hover:text-white/70"
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <div className="mb-8">
            <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">
              {project.company}
            </span>
            <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
              <GradientText>{project.title}</GradientText>
            </h1>
            <p className="mt-2 text-lg text-white/55">{project.tagline}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-violet-400 transition-colors hover:text-violet-300"
              >
                {project.url} <ExternalLink size={12} />
              </a>
            )}
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <GlassCard key={m.label} className="p-4 text-center">
                <div className="font-mono text-xl font-bold text-white">{m.value}</div>
                <div className="mt-1 text-[10px] text-white/30">{m.label}</div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mb-5 p-6">
            <h2 className="mb-3 font-mono text-xs tracking-widest text-white/35 uppercase">Problem</h2>
            <p className="leading-relaxed text-white/65">{project.problem}</p>
          </GlassCard>

          <GlassCard className="mb-5 p-6">
            <h2 className="mb-4 font-mono text-xs tracking-widest text-white/35 uppercase">Key Decisions</h2>
            <div className="space-y-5">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="mb-1 text-sm font-semibold text-white">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{d.reasoning}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="mb-5 p-6">
            <h2 className="mb-4 font-mono text-xs tracking-widest text-white/35 uppercase">Results</h2>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/60">
                  <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="mb-4 font-mono text-xs tracking-widest text-white/35 uppercase">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/[0.10] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-white/55"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </main>
      <Footer />
    </>
  )
}
