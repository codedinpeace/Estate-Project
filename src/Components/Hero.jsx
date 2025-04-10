import React from 'react'
import {assets} from '../assets/assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(".tagline",{
      y:30,
      opacity:0,
      duration:1.8,
    })
  })
  
  return (  
    <div className='min-h-screen' id='Home'>
    <div className='text-2xl font-bold flex justify-center mt-60 max-md:mt-40'>

        <div className=''>
    

            <h1 className='tagline max-sm:text-4xl sm:text-4xl  max-w-100 text-center md:text-4xl md:max-w-100 text-white  lg:text-7xl lg:max-w-xl'>Homes that suit your Dreams</h1>
        </div>
    </div>
        <div className="herobtn flex mx-auto justify-center mt-20 gap-20 text-xl mr-5" >
        <a href="#Contact" className=' hover:bg-white hover:border-white hover:text-black transition-all border-3 bg-blue-500 border-blue-500 text-white cursor-pointer shadow-md rounded py-2 px-6 '>Contact Us</a>
          <a href="#Projects" className=' hover:bg-blue-500 hover:border-blue-500 transition-all border-3 border-white text-white cursor-pointer shadow-md rounded py-2 px-6 '>Projects</a>
        </div>
        
    </div>
  )
}

export default Hero




