'use client'
import React, { useState, useEffect, useRef } from 'react'
import { changeNavbarColor } from './Utils';
import Link from 'next/link';
import { list } from './Utils';
import { SiOpenlayers } from "react-icons/si";


const Navbar = () => {
  const [open, setOpen] = useState(true)
  const [colorChange, setColorchange] = useState(false);
  const clickdetect = useRef()

  useEffect(() => {
    const cleanup = changeNavbarColor(setColorchange);
    return () => {
      cleanup(); 
    };
  }, [])


  return (
    <div style={{ zIndex: 1000 }} className={` w-full sticky h-auto flex flex-col py-3 md:pt-0 md:flex-row items-center  top-0 px-3  overflow-x-hidden md:overflow-x-hidden  md:w-full md:h-[70px] md:sticky  md:top-0 
     ${colorChange ? "bg-sky-600 transition-colors duration-200" : "bg-none"}  md:backdrop-blur-sm  md:shadow-[0px_3px_20px_2px_#4c51bf]  md:flex justify-between`}  >

      <div className={`flex justify-between w-full pr-3 md:pr-0 md:flex md:w-1/2 h-full  font-Oswald text-[30px] font-medium text-white items-center md:pl-10`} >

        <span className='z-50  pl-3 md:pl-0 hover:transition-all hover:duration-400 hover:font-Oswald hover:text-[30px] hover:font-medium  
                      hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-bl from-gray-300 via-fuchsia-600 to-orange-600'>
          Abhilash Abin Zachariah     </span>

        <button className={`block  z-50  ${open ? "rotate-180 " : "rotate-0 text-cyan-500 "} transition-all duration-200  md:hidden navbar-toggler ${colorChange ? "text-light bg-dark" : "bg-transparent text-muted"} text-white`}
          type="button" onClick={() => { setOpen(!open) }} >
          <SiOpenlayers />
        </button>

      </div>

      <div className={` bg-white md:bg-transparent ${open ? " -translate-y-72  opacity-5 " : "translate-y-10 opacity-100 z-50 "} 
                          md:translate-y-0 md:opacity-100 transition-opacity-200  transition-all duration-700 
                          absolute  w-full md:h-full text-white     text-center  md:relative md:top-0  
                           backdrop-blur-sm md:backdrop-blur-0  flex md:flex-row    md:w-1/2`} >

        <ul className=' w-full  flex flex-col py-3 md:py-0 px-2 md:px-0 md:flex-row md:gap-x-9 md:items-center md:justify-center '>

          {list.map((value, index) => {
            const menuitems = value.li.toUpperCase()
            return (<li key={index} className={` w-full py-2 md:py-0   ${open ? " text-white " : "text-black"}  text-lg`}><Link href={value.link}>{menuitems}</Link></li>)
          })
          }
        </ul>

      </div>

    </div>
  )
}

export default Navbar