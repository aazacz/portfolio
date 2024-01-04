import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhilash Abin Zachariah',
  description: 'Full Stack Developer',
  
}

export default function RootLayout({ children }) {




  return (
    <html lang="en">
       <head>

       <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
          
  </head>
      <body className='main w-screen h-auto md:overflow-x-hidden bg-MainBlue'>
       
        {children}
       
        </body>
    </html>
  )
}
