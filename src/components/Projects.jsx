import React from 'react'
import '../app/page.css'
import Image from "next/image"
import { skillvalues } from "./Utils"


const Projects = () => {
    return (
        <div className=' border-t-8 border-t-cyan-500 w-full h-auto bg-MainBlue z-50 md:p-[80px] md:pt-[100px] ' >
            <h1 className=' font-extrabold text-[60px] font-PT_sans'> <span className=' text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-200'> Projects</span></h1>

            <h3 className='text-slate-200 w-[800px] text-wrap text-[30px]'>I have extensive experience working with a variety of technologies as a developer.
                I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.</h3>

            <div className='w-full h-full grid grid-flow-row grid-cols-3 gap-8 pt-[100px]'>

            {skillvalues.map((values) => {
  return (
    <div
      key={values.index}
      className='md:w-300px h-[130px] rounded-md shadow-[0px_0px_12px_2px_#2b6cb0] flex flex-row transition-all duration-300   hover:bg-white group '
    >
      <div className='w-[90px] h-full pt-5 pl-6'>
        <i className={`text-white text-[40px] group-hover:text-MainBlue ${values.logo}`}></i>
      </div>
      <div className='w-full h-full pt-2 pr-3'>
        <h1 className='text-white text-[30px] font-semibold group-hover:text-MainBlue'>{values.Name}</h1>
        <h4 className='text-slate-400 group-hover:font-semibold group-hover:text-MainBlue'>{values.Description}</h4>
      </div>
    </div>
  );
})}


            </div>
        </div>
    )
}

export default Projects