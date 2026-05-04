export default function AnimatedBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-[0.18]"
        style={{
          background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
          animation: 'aurora-1 22s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-[0.13]"
        style={{
          background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)',
          animation: 'aurora-2 28s ease-in-out infinite',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
          animation: 'aurora-3 18s ease-in-out infinite',
          filter: 'blur(65px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
