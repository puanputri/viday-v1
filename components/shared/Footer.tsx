export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-xs text-white/25">
          © {new Date().getFullYear()} Puan Putri Saqinah Firdaus
        </span>
        <span className="font-mono text-xs text-white/20">Built with Next.js · Deployed on Vercel</span>
      </div>
    </footer>
  )
}
