"use client"
import { useEffect } from 'react';

import Banner from '@/components/Banner';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
// import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {

  // useEffect(() => {
  //   const handleLoad = () => {
  //     const preloader = document.getElementById('preloader');
  //     if (preloader) {

  //       preloader.style.transition = 'opacity 0.5s ease';
  //       preloader.style.opacity = '0';

  //       setTimeout(() => {
  //         if (preloader.parentNode) {
  //           preloader.parentNode.removeChild(preloader);
  //         }
  //       }, 500); 
  //     }
  //   };

  //   window.addEventListener('load', handleLoad);
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []); 




  return (
    <>
    
    <Navbar/>
    <Banner />
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>

    </>
  )
}
