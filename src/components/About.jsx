import React from 'react'
import '../app/page.css'
import Image from "next/image"
import profileimage from '../../public/Photo2.jpg'

const About = () => {

    return (
        <div className='box w-full h-auto  z-50 bg-sky-100 md:p-[180px] md:pt-[100px]' >
            
            <div className=' flex flex-col items-center justify-center ' >



                <div className='Underline text-3xl  font-bold'>ABOUT ME</div>

                <div className='w-full h-auto flex '>

                    <div className='w-1/3 h-auto flex justify-center items-center '>

                        <div className='profile '>
                            <Image className='profile' src={profileimage} loading='lazy'  alt="ProfilePicture" />
                        </div>
                    </div>
                    <div className='w-2/3  bg-red p-12 '>

                        <p className='text-xl leading-loose '>
                        <span className='waving'>👋</span> Hello! I'm Abhilash, a passionate and dedicated MERN (MongoDB, Express.js, React, Node.js) Stack Developer. With a strong foundation in both front-end and back-end technologies, 
                        I strive to create seamless and efficient web applications.,
                                  Self-believing and enthusiastic, with a keen interest in building and designing frontend. Looking forward to sharpening his skills in a challenging environment.

                            I guarantee enthusiasm in work and fulfilling my projects with inexpressible efforts.
                        </p>
                       

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About