import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karan Kumar',
  description: 'A modern Astro scaffolding for agencies and studios.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text antialiased noise">
        {children}
      </body>
    </html>
  )
}
