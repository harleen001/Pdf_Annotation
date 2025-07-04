import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF Annotation Tool',
  description: 'A browser-based tool to annotate PDF files easily.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
