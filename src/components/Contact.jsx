import React, { useState } from 'react'
import '../app/page.css'
import Image from "next/image"
import { contacticons } from "./Utils"
import { SiGmail } from "react-icons/si";


const Contact = () => {
    const [message, setMessage] = useState('')
    return (
        <div className=' border-t-8 border-t-cyan-500 w-full h-auto bg-MainBlue z-50 md:p-[80px] md:pt-[100px] ' >
            <h1 className=' font-extrabold text-[60px] font-PT_sans'> <span className='text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-200'> Contact Me</span></h1>
            <div className='w-full h-[600px] flex  gap-10'>

                <div className='w-auto px-12 bg-gray-500 bg-opacity-10  backdrop-blur-sm pt-6 rounded-[30px]'>
                    <h1 className='text-white text-3xl'>Send A Message</h1>
                    <form action="" method="post" className='flex flex-col gap-5 pt-[40px]'>
                        <input className=' md:w-[400px] md:h-9 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4' type="text" placeholder='Your Name' />
                        <input className=' md:w-[400px] md:h-9 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4' type="email" placeholder='Your Email' />
                        <input className=' md:w-[400px] md:h-9 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4' type="text" placeholder='Subject' />
                        {/* <input className=' md:w-[400px] md:h-24 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4' name='' type="text" placeholder='Message' /> */}
                        <textarea name="message" className='resize-none md:w-[400px] md:h-24 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4' placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} ></textarea>
                        <button type="submit" className='w-full h-10 text-gray-300 hover:text-white bg-gray-400 bg-opacity-30'>Submit</button>
                    </form>

                </div>
                <div className='w-1/2 outline-dashed px-12 bg-gray-500 bg-opacity-10  backdrop-blur-sm pt-6 rounded-[30px]'>

                    <h1 className='text-white text-3xl'>Send A Message</h1>

                    <h3 className='pt-7 text-white text-lg leading-7'>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</h3>


                    <h3 className='pt-7 text-white text-lg leading-7'>Or find me on:</h3>
                    <div className='flex gap-5 '>
                        {contacticons.map((values, index) => {
                            const IconComponent = values.iconclass;
                            return (
                                <div key={index} className='group'>

                                    <div className='group-hover:bg-cyan-400  transition-colors duration-700 origin-top w-[50px] h-[50px] rounded-[50%] border-[1px] flex justify-center items-center'>
                                    <a href={values.link} target="_blank" rel="noopener noreferrer">
                                        <IconComponent className='w-[30px] h-[30px] text-white group-hover:text-black transition-all duration-1000 origin-top ' key={index} />
                                    
                                        </a> 
                                    </div>
                                </div>)
                        })}
                        <div className='group'>

                            <div className='group-hover:bg-cyan-400  transition-colors duration-700 origin-top  w-[50px] h-[50px] rounded-[50%] border-[1px] flex justify-center items-center'>

                                <SiGmail className='group-hover:text-black transition-all duration-1000 origin-top  w-[30px] h-[30px] text-white p-0 m-0'
                                    onClick={() => {
                                        window.location.assign("mailto:abhilashabinz@gmail.com?subject=Contact%20Me&body="
                                            + encodeURIComponent(message))
                                    }} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Contact