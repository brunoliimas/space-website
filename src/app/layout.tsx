import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'

// const bellefair = Bellefair({ subsets: ['latin'], weight: '400' })
// const barlowCondensed = Barlow_Condensed({
//   subsets: ['latin'],
//   weight: [
//     "100",
//     "200",
//     "300",
//     "300",
//     "400",
//     "500",
//     "600",
//     "700",
//     "800",
//     "900"]
// })

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'So, you want to travel to Space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
