import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'


const jost = Jost({ 
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Kauã Silva | Desenvolvedor Full Stack',
  description: 'Portfólio de desenvolvedor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={jost.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
