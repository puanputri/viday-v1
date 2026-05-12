import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import AnimatedBg from '@/components/shared/AnimatedBg'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import NoiseOverlay from '@/components/shared/NoiseOverlay'

export const metadata = {
  title: 'Java | Puan Putri',
  description: 'My take on Java as a core part of my stack.',
}

export default function JavaPage() {
  return (
    <>
      <AnimatedBg />
      <NoiseOverlay />
      <Navbar />
      <main className="min-h-screen px-4 pb-16 pt-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#stack"
            className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-white/35 transition-colors hover:text-white/70"
          >
            <ArrowLeft size={14} /> Back to stack
          </Link>

          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">Languages</span>
            <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
              <GradientText>Java</GradientText>
            </h1>
          </div>

          {/* Write your Java definition content here */}
          <GlassCard className="p-6">
            <p className="leading-relaxed text-white/65">
              Java is the best of the best.
            </p>
          </GlassCard>
        </div>
      </main>
      <Footer />
    </>
  )
}
