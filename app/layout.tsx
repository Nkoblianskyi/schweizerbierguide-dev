import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Schweizer Bier Guide – schweizerbierguide.com',
  description:
    'Ihr umfassender Führer durch die Schweizer Bierwelt – Craft-Bier, klassische Biere und die beliebtesten Schweizer Brauereien.',
  keywords: [
    'Schweizer Bier',
    'Craft Beer Schweiz',
    'Schweizer Brauerei',
    'Bier Guide',
    'schweizerbierguide',
  ],
  authors: [{ name: 'schweizerbierguide.com' }],
  metadataBase: new URL('https://schweizerbierguide.com'),
  openGraph: {
    title: 'Schweizer Bier Guide',
    description: 'Entdecken Sie die besten Schweizer Biere – Craft, Klassisch und Populär.',
    url: 'https://schweizerbierguide.com',
    siteName: 'Schweizer Bier Guide',
    locale: 'de_CH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-CH" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
