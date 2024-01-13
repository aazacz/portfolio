'use client'
import React, { useState, useEffect, useRef } from 'react'
import { changeNavbarColor } from './Utils'
import Link from 'next/link'
import { SiOpenlayers } from 'react-icons/si'
import { list } from './Utils'

const Navbar = () => {
  const [open, setOpen] = useState(true)
  const [colorChange, setColorChange] = useState(false)
  const clickDetect = useRef()

  useEffect(() => {
    const cleanup = changeNavbarColor(setColorChange)
    return () => cleanup()
  }, [])

  return (
    <header
      className={` w-full z-50 sticky  top-0 mx-auto justify-between  px-6    ${
        colorChange
          ? 'bg-MainBlue md:bg-sky-600 transition-colors duration-200'
          : 'bg-none'
      } 
      md:backdrop-blur-sm md:shadow-[0px_3px_20px_2px_#4c51bf] md:flex justify-between`}
    >
      <div
        className={`flex z-50  sticky  top-0 justify-between  py-2  md:w-1/2 font-Oswald text-[30px] font-medium text-white `}
      >
        <span
          className={`transition-all duration-400 hover:font-Oswald hover:text-[30px] hover:font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-bl from-gray-300 via-fuchsia-600 to-orange-600`}
        >
          Abhilash Abin Zachariah
        </span>

        <button
          className={`block z-50 ${
            open ? 'rotate-180 ' : 'rotate-0 text-cyan-500 '
          } transition-all duration-200 md:hidden 
                              ${
                                colorChange
                                  ? 'text-light bg-dark'
                                  : 'bg-transparent text-muted'
                              } text-white`}
          type="button"
          onClick={() => setOpen(!open)}
        >
          {' '}
          <SiOpenlayers />{' '}
        </button>
      </div>

      <div className="md:flex-row md:w-1/2 my-auto z-40">
        <div
          className={` w-full    absolute md:relative     md:bg-transparent ${
            open ? '-translate-y-72 opacity-5   ' : 'opacity-100 '
          } md:block md:translate-y-0 md:opacity-100 transition-opacity-200  transition-all duration-700 text-white text-center backdrop-blur-sm md:backdrop-blur-0 `}
        >
          <ul className="    md:flex md:justify-end md:space-x-11  ">
            {list.map((value, index) => (
              <li
                key={index}
                className={` py-2 md:py-0 ${
                  open ? 'text-white ' : 'text-white'
                } text-lg`}
              >
                <Link href={value.link}>{value.li.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
