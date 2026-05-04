import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stack from '@/components/sections/Stack'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import AnimatedBg from '@/components/shared/AnimatedBg'
import NoiseOverlay from '@/components/shared/NoiseOverlay'

export default function HomePage() {
  return (
    <>
      <AnimatedBg />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
