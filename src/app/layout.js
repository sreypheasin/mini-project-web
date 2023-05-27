import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
      template: '%s - Odinn'
  },
  description: "Odinn is a website that provide online shoping to customer, Experience the convenience, quality, and exceptional service",
  openGraph: {
    images: 'https://i.pinimg.com/564x/54/34/8e/54348efc684dd06855387f4e2bd86a59.jpg',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        <Suspense fallback ={<Loading/>}>
        {children}
        </Suspense>
        <Footer/>
      </body>
    </html>
  )
}
