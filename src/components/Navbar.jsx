'use client'
import React, { useState, useEffect } from 'react'
import { changeNavbarColor } from './Utils';



const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const list = ["Home", "About", "Skills", "Education", "Projects", "Contact", "Resume"]
  useEffect(() => {
    const cleanup = changeNavbarColor(setColorchange);
    return () => {
      cleanup(); // Cleanup the event listener when the component unmounts
    };
  }, [])


  return (
    <div id='header' className={`md:overflow-x-hidden  md:w-full md:h-[70px] md:sticky z-50 md:top-0  ${colorChange ? "bg-sky-600 transition-colors duration-200" : "bg-none"}  md:backdrop-blur-sm  md:shadow-[0px_3px_20px_2px_#4c51bf]  md:flex justify-between`}  >
      <div className='md:flex md:w-1/2 h-full  font-Oswald text-[30px] font-medium text-white items-center md:pl-10     ' > <span className='hover:transition-all hover:duration-400 hover:font-Oswald hover:text-[30px] hover:font-medium  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-bl from-gray-300 via-fuchsia-600 to-orange-600'>  Abhilash Abin Zachariah </span></div>
     
      <div className='md:w-1/2 h-full text-white  flex ' >

        <ul className='flex gap-x-9 items-center'>

        {
         list.map((value, index) => {
         
         return (    <li key={index} className='text-white text-lg'><a href='#'>{value}</a></li>      )
                  })
          }
        </ul>

      </div>

    </div>
  )
}

export default Navbar