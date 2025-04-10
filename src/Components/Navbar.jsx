import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Navbar = () => {

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(".logo",{
      y:-30,
      duration:0.6,

      opacity:0,
    })

    tl.from(".PC-Nav a",{
      y:-30,
      duration:1,
      stagger:0.2 ,
      opacity:0,
    })

    tl.from(".navbtn",{
      y:-30,
      opacity:0,
      duration:0.25,
    })

    tl.from(".Mobile-Nav a",{
      y:-30,
      duration:0.5,
      stagger:0.2 ,
      opacity:0,
    })

    

  },[])

  const [menu, setMenu] = useState(false)

  const handleMenu = () =>{
    setMenu(m => !m)
  }

  useEffect(()=>{
    if(menu){
      document.body.style.overflow = "hidden"
    }

    else{
      document.body.style.overflow = "auto"
    }

  },[menu])

  return (  
    <div className=''>
      <div className='flex justify-end'>
        <img onClick={handleMenu} src={assets.menu_icon} className='block md:hidden relative top-15 cursor-pointer w-7 right-10' alt="" />
      </div>
      <div className="flex mx-auto justify-between py-8 px-6 bg-transparent items-center md:px-20 lg:px-25 ">
        <img src={assets.logo} alt="" className='logo w-30' />
        <ul className='PC-Nav hidden md:flex gap-10 text-[18px] text-white py-3 px-9'>
          <a className='hover:text-gray-300' href="#Home">Home</a>
          <a className='hover:text-gray-300' href="#About">About</a>
          <a className='hover:text-gray-300' href="#Projects">Project</a>
          <a className='hover:text-gray-300' href="#Testimonials">Testimonials</a>
        </ul>
        <button className='navbtn hidden md:flex bg-white  shadow-md cursor-pointer py-2 text-black px-9 border-white rounded-full  '>Sign Up</button>
      </div>


      {/* // Mobile Navbar Layout */}
      <div className='bg-white absolute overflow-hidden max-sm:w-full sm:w-full z-30 '>
      <div className='flex '>
          <div className='Mobile-Nav mx-auto '>
            <ul className={`md:hidden flex flex-col p-10 font-md text-lg gap-4 text-center ${menu ? "flex" : "hidden"} transition delay-500 items-center`}>
            <a className='hover:text-gray-300' onClick={()=>setMenu(false)} href="#Home">Home</a>
            <a className='hover:text-gray-300' onClick={()=>setMenu(false)} href="#About">About</a>
            <a className='hover:text-gray-300' onClick={()=>setMenu(false)} href="#Projects">Projects</a>
            <a className='hover:text-gray-300' onClick={()=>setMenu(false)} href="#Testimonials">Testimonials</a>
            <img onClick={handleMenu} src={assets.cross_icon} className='w-5 cursor-pointer ' alt="" />
            </ul>
          </div>
      </div>
      </div>
    </div>


  )
}

export default Navbar