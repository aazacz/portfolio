import React from 'react'
import homeimage from "../../public/homeimage.png"
import Image from "next/image"
import '../app/page.css'

const Banner = () => {
  return (
    <main className=" md:flex min-h-screen h-auto overflow-y-hidden md:sticky md:top-[70px] items-center  md:overflow-x-hidden  text-white md:p-14 md:pb-0 -z-10">


      <div className='w-1/2 h-full md:flex flex-col '>

        <p className='text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200'>Hey there,</p>
      
        <div className='w-auto h-auto'>
          <span className='fist text-[50px] '> I'm Abhilash Abin Zachariah </span>
         
          <div>

          <span className=' firstText  text-[50px]'></span>
          </div>
          <div>
            <span>I'm working with  </span>
          </div>
        </div>

      </div>
      <div className='w-1/2 h-auto md:flex justify-center'>
        <Image src={homeimage} alt='default' width={400} className='drop-shadow ' loading='lazy' />
      
      </div>

      {/* <div id='parentNode'>
     <div id="preloader" className='absolute top-0 bottom-0 w-full h-screen bg-black'>
     </div>
  </div> */}
    </main>
  )
}

export default Banner