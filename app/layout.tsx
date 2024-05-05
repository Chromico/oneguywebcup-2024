import './css/style.css'

import { Inter, Architects_Daughter, Noto_Sans, Orbitron } from 'next/font/google'

import Header from '@/components/ui/header'


const noto_sans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: '400',
  display: 'swap'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: '500',
  display: 'swap'
})


export const metadata = {
  title: 'United Government',
  description: 'Guide to Survive Godzilla and Kingkong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans.variable} ${orbitron.variable} font-noto antialiased bg-ugdark text-white tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 