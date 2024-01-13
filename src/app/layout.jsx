import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Abhilash Abin Zachariah',
  description: 'Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      </head>
      <body className="main w-screen  md:overflow-x-hidden bg-MainBlue">
         <Toaster  position="top-center"  reverseOrder={false}/>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
