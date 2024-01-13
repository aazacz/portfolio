'use client'
import React, { useRef, useState } from 'react'
import '../app/page.css'
import Image from 'next/image'
import { contacticons } from './Utils'
import { SiGmail } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [message, setMessage] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log('Email sending')
    emailjs
      .sendForm(
        'service_wx0xbld',
        'template_t045hic',
        form.current,
        'oK0i8S0Ab0raxRoXR',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <>
      <div  id="Contact"   className="px-7  border-t-8 border-t-cyan-500 w-full h-auto bg-MainBlue z-50 md:p-[80px] md:pt-[100px] "   >
       
       
        <h1 className=" font-extrabold text-[60px] md:text-[60px] font-PT_sans mb-4">
          {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-200">
            {' '}
            Contact Me
          </span>
        </h1>
       
        <div className="w-full  md:h-[600px] flex flex-col md:flex-row  gap-10">
         
         
          <div className="w-auto  px-12 bg-gray-500 bg-opacity-10  backdrop-blur-sm py-14 md:py-6 rounded-[30px]">
            <h1 id="submit-form" className="text-white text-3xl">
              Send A Message
            </h1>
            {/* form */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 pt-[40px]"
            >
              <input
                name="user_name"
                className="  md:w-[400px] h-9  bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4"
                type="text"
                placeholder="Your Name"
              />

              <input
                name="user_email"
                className=" md:w-[400px] h-9 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4"
                type="email"
                placeholder="Your Email"
              />

              <input
                name="user_subject"
                className=" md:w-[400px] h-9 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4"
                type="text"
                placeholder="Subject"
              />

              <textarea
                name="message"
                className="resize-none md:w-[400px] h-24 bg-gray-400 bg-opacity-30 placeholder:text-gray-300 placeholder:pl-4"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                value="send"
                className="w-full h-10 text-gray-300 hover:text-white bg-gray-400 bg-opacity-30"
              >
                Submit
              </button>
            </form>


            <div className='md:hidden '>
<h3 className="pt-7 pb-3 text-white text-lg leading-7">
Or find me on:
</h3>
<div className="flex gap-5 ">
{contacticons.map((values, index) => {
  const IconComponent = values.iconclass
  return (
    <div key={index} className="group">
      <div className="group-hover:bg-cyan-400  transition-colors duration-700 origin-top w-[50px] h-[50px] rounded-[50%] border-[1px] flex justify-center items-center">
        <a
          href={values.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconComponent
            className="w-[30px] h-[30px] text-white group-hover:text-black transition-all duration-1000 origin-top "
            key={index}
          />
        </a>
      </div>
    </div>
  )
})}
<div className="group">
  <div className="group-hover:bg-cyan-400  transition-colors duration-700 origin-top  w-[50px] h-[50px] rounded-[50%] border-[1px] flex justify-center items-center">
    <SiGmail
      className="group-hover:text-black transition-all duration-1000 origin-top  w-[30px] h-[30px] text-white p-0 m-0"
      onClick={() => {
        window.location.assign(
          'mailto:abhilashabinz@gmail.com?subject=Contact%20Me&body=' +
            encodeURIComponent(message),
        )
      }}
    />
  </div>
</div>
</div>
</div>


          </div>
        
        
        
          <div className="md:block hidden md:w-1/2 outline-dashed px-12 bg-gray-500 bg-opacity-10  backdrop-blur-sm pt-6 rounded-[30px]">
            <h1 className="text-white text-3xl">Send A Message</h1>

            <h3 className="pt-7 text-white text-lg leading-7">
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi, I'd love to hear from you. Simply
              fill the from and send me an email.
            </h3>

            <h3 className="pt-7 text-white text-lg leading-7">
              Or find me on:
            </h3>
            <div className="flex gap-5 ">
              {contacticons.map((values, index) => {
                const IconComponent = values.iconclass
                return (
                  <div key={index} className="group">
                    <div className="group-hover:bg-cyan-400  transition-colors duration-700 origin-top w-[50px] h-[50px] rounded-[50%] border-[1px] flex justify-center items-center">
                      <a
                        href={values.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent
                          className="w-[30px] h-[30px] text-white group-hover:text-black transition-all duration-1000 origin-top "
                          key={index}
                        />
                      </a>
                    </div>
                  </div>
                )
              })}
              <div className="group">
                <div className="group-hover:bg-cyan-400  transition-colors duration-700 origin-top  w-[50px] h-[50px] rounded-[50%] border-[1px] flex justify-center items-center">
                  <SiGmail
                    className="group-hover:text-black transition-all duration-1000 origin-top  w-[30px] h-[30px] text-white p-0 m-0"
                    onClick={() => {
                      window.location.assign(
                        'mailto:abhilashabinz@gmail.com?subject=Contact%20Me&body=' +
                          encodeURIComponent(message),
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      {/* <script  src="./script.js"></script> */}
    </>
  )
}

export default Contact
