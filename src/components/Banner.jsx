import React from 'react'
import homeimage from '../../public/homeimage.png'
import Image from 'next/image'
import '../app/page.css'

const Banner = () => {
  return (
    <main
      id="Home" style={{zIndex:-1}}
      className="  md:flex md:min-h-screen  sticky top-[70px] items-center  md:overflow-x-hidden  text-white md:p-14 md:pb-0 md:-z-30"
    >
      <div className="  w-full pt-7 md:pt-0 md:w-1/2 h-full flex flex-col items-center md:items-start ">
        <p className="  text-[60px] md:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
          Hey there
        </p>

        <div className="w-auto h-auto">
          <span className="fist hidden md:block md:text-[50px] ">
            {' '}
            I'm Abhilash Abin Zachariah{' '}
          </span>

          <div className="w-full md:w-auto">
            <span className=" md:hidden text-cyan-500 text-[25px] w-[30px]  mr-2">
              {' '}
              I'm a
            </span>
            <span className=" firstText  text-[25px] md:text-[50px] z-0"></span>
          </div>
        </div>
      </div>
      <div className=" px-11 md:w-1/2 h-auto md:flex justify-center">
        <Image
      
          src={homeimage}
          alt="default"
          width={400}
          className="drop-shadow -z-30"
          loading="lazy"
        />
      </div>
    </main>
  )
}

export default Banner
