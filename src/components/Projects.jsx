import React from 'react'
import '../app/page.css'
import Image from "next/image"
import pcimage from "../../public/pcimage.png"
import { skillvalues } from "./Utils"
import { projectDetails } from "./Utils"
import { FaInternetExplorer } from "react-icons/fa";


const Projects = () => {
  return (
    <div id='Projects' className=' border-t-8 border-t-cyan-500 w-full h-auto bg-MainBlue z-50 md:p-[80px] md:pt-[100px] ' >
      <h1 className=' font-extrabold text-[60px] font-PT_sans px-[100px]'> <span className=' text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-200'> Projects</span></h1>

      <h3 className='text-slate-200  text-wrap text-[30px] px-[100px]'>Here are some of the projects I've worked on, utilizing various technology stacks..</h3>





      <div className='mx-[100px] mt-[100px]'>

        <div className='w-auto h-auto   text-white grid grid-flow-row grid-cols-2  gap-14 '>

          {/* here arrow function starts */}
          {projectDetails.map((values, index) => {
            return (
              <div key={index} className='w-[400px] shadow-[0px_0px_12px_2px_#2b6cb0] rounded-2xl  bg-opacity-10 bg-transparent bg-black relative group p-10 pb-6  flex flex-col justify-between overflow-hidden'>
                <div className=''>

                  <h1 className='font-PT_sans font-bold text-4xl text-white'>{values.title}</h1>
                  <h1 className='w-full h-24 text-white '>{values.description}</h1>
                  <div className='w-full  text-center '>

                    <div className='w-full h-8  '>

                      <span className='projectcardText text-xl text-white'>Tech Stack</span>
                    </div>

                    <div className='w-full h-28 mt-5 flex  flex-wrap justify-center gap-4 gap-y-0 ' >
                      {values.technology.map((tech, techIndex) => (
                        <span key={techIndex} className='text-sky-600 h-[35px] px-2  rounded-lg border-[1px] border-cyan-500  '>{`${tech}`}</span>
                      ))}

                    </div>

                  </div>
                </div>
                <div className='flex items-center justify-center gap-6 pt-10 '>
                 
                <a href={values.git} target="_blank" rel="noopener noreferrer " >
                     <i className="text-4xl devicon-github-original text-white"> </i>
                </a>
                  <FaInternetExplorer className='text-4xl text-white' />
                </div>

                <div className='w-full h-[350px] pb-0 p-7 shadow-[0px_0px_12px_2px_#2b6cb0]   bg-MainBlue  absolute inset-0 opacity-100 group group-hover:opacity-0  transition-all duration-700'>
                  <div className='relative'>

                    <Image src={pcimage} className='absolute' alt='default' />
                    <Image src={projectDetails[0].image} className=' top-3.5 left-3.5 absolute w-[317px] h-[180px]' alt='default' />
                  </div>
                  <h1 className='text-white text-lg relative top-[90%] text-center font-Oswald'>{values.title}</h1>
                </div>
              </div>

            )
          })}


        </div>


      </div>
    </div>
  )
}

export default Projects