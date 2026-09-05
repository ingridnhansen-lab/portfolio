import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ingrid Hansen — Product & UX Designer',
  description: 'Diseño experiencias digitales centradas en las personas, que resuelven problemas reales y generan impacto.',
  icons: {
    icon: '/icon.png'
      },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#161d40',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
