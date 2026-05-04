import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-xs text-white/25">
          © {new Date().getFullYear()} Puan Putri Saqinah Firdaus
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/puanputri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 transition-colors hover:text-white/60"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <span className="font-mono text-xs text-white/20">Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  )
}
