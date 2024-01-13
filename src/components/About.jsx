import React from "react";
import "../app/page.css";
import Image from "next/image";
import profileimage from "../../public/Photo2.jpg";

const About = () => {
  return (
    <div  id="About"   className="box w-full h-auto  z-50 bg-sky-100 md:p-[180px] md:pt-[100px]"    >
   
      <div className=" flex flex-col items-center justify-center ">

        <div className="Underline text-3xl        mt-20 md:mt-0 font-bold">ABOUT ME</div>

            <div className="w-full h-auto flex flex-col md:flex-row ">
             
                <div className="md:w-1/3 h-auto flex justify-center items-center mt-20 md:mt-0">
                 
                    <div className="profile relative md:w-[280px] md:h-[280px]
                  before:bg-red-100 
                    before:md:w-[285px]  before:w-[200px] 
                    before:md:h-[285px]  before:h-[200px]
                    before:content-[''] 
                    before:rounded-full 
                    before:absolute  
                    md:z-40
                    flex items-center justify-center">
                                <Image className=" w-[200px] h-[200px]  md:w-[270px] md:h-[270px] object-cover rounded-full
                                                                   z-50" src={profileimage} loading="lazy" alt="ProfilePicture"/>
                    </div>
                    
                </div>

                <div className="md:w-2/3 px-12 md:px-0  bg-red p-12 ">
                    <p className="text-xl leading-loose text-justify ">
                    <span className="waving">👋</span> Hello! I'm Abhilash, a
                    passionate and dedicated MERN (MongoDB, Express.js, React,
                    Node.js) Stack Developer. With a strong foundation in both
                    front-end and back-end technologies, I strive to create seamless
                    and efficient web applications., Self-believing and enthusiastic,
                    with a keen interest in building and designing frontend. Looking
                    forward to sharpening his skills in a challenging environment. I
                    guarantee enthusiasm in work and fulfilling my projects with
                    inexpressible efforts.
                    </p>
                  
                    <div className="w-full flex justify-center md:justify-start mx-auto ">
                    <a   target="_blank"
                        rel="noopener noreferrer" href="https://drive.google.com/file/d/1LVl384aQqlKQsq6nuPAkQXUu4v22XtUF/view?usp=sharing" className=" resume px-6 w-[200px] h-[38px] text-center flex items-center justify-center text-xl font-Oswald border-sky-600 border-[1px]  " >
                    Resume
                    </a>
                    </div>
                </div>


        </div>
      </div>
    </div>
  );
};

export default About;
