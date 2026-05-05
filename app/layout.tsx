import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Puan Putri Saqinah Firdaus | AI-Augmented Backend Engineer',
  description:
    'Backend engineer specializing in Java/Quarkus microservices and AI-integrated systems. Based in Jakarta.',
  keywords: ['backend engineer', 'Java', 'Quarkus', 'microservices', 'AI', 'Jakarta', 'cloud-native'],
  authors: [{ name: 'Puan Putri Saqinah Firdaus' }],
  creator: 'Puan Putri Saqinah Firdaus',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Puan Putri Saqinah Firdaus | AI-Augmented Backend Engineer',
    description: 'Backend engineer specializing in Java/Quarkus microservices and AI-integrated systems.',
    siteName: 'Puan Putri Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puan Putri Saqinah Firdaus | AI-Augmented Backend Engineer',
    description: 'Backend engineer specializing in Java/Quarkus microservices and AI-integrated systems.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
