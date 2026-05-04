'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      {children}
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(20, 20, 35, 0.95)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#F8F8FF',
          },
        }}
      />
    </ThemeProvider>
  )
}
