import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iOdINN',
  description: 'Mini-project that focus on SEO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
