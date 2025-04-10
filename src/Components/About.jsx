import React from 'react'
import { assets } from '../assets/assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(".brand",{
            x:-500,
            opacity:0,
            duration:1,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".over",
                
                start:"top 100%",
                end:"top 50%"
                
            }

            
        })

        tl.from(".About-Head",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".About-Head h1"
            }
        })
        tl.from(".about-text ",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".about-text"
            }
        })
       
    })

    return (
        <div className='over' id='About'>
            <div className='About-Head gap-3 relative bottom-70 flex justify-center m-auto text-4xl max-sm:mt-10 '>
                <h1 className='font-medium max-sm:text-2xl'>About</h1>
                <h1 className='font-light underline underline-offset-2 max-sm:text-2xl'>Our Company</h1>
            </div>
            <div className=" relative bottom-30 about-content max-sm:flex-col max-sm:justify-center md:flex justify-center gap-20 mx-auto">
                <img src={assets.brand_img} className='brand w-100 max-sm:mx-auto max-sm:w-60' alt="" />
                <div>
                    <div className="about-text grid grid-cols-2  max-sm:mt-10 "></div>
                    <div className='grid grid-cols-2 gap-8  max-sm:place-content-center max-sm:grid '>
                        <div className='about-text grid place-content-center items-center    '>
                            <h1 className='  text-xl md:text-2xl font-medium'>20+</h1>
                            <h1>Projects Completed</h1>
                        </div>
                        <div className='about-text grid place-content-center'>
                            <h1 className='text-xl md:text-2xl font-medium ' >12+</h1>
                            <h1>Positive Reviews</h1>
                        </div>
                        <div className='about-text place-content-center grid mr-3 max-sm:grid max-sm:place-content-center '>
                            <h1 className='text-xl font-medium md:text-2xl'>41+</h1>
                            <h1>Ongoing Projects</h1>
                        </div>
                        <div className='about-text grid place-content-center'>
                            <h1 className='text-xl  md:text-2xl font-medium ' >10+</h1>
                            <h1>Homes Donated</h1>
                        </div>
                        <div className='about-text grid place-content-center col-span-2'>
                            <p className='  max-w-86 text-[14px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore explicabo nisi rerum eveniet. Quae blanditiis odio vel sapiente odit, alias illo. Delectus qui autem facere optio aspernatur</p>
                        </div>
                        <div className='col-span-2 max-sm:col-span-2 max-sm:grid max-sm:place-content-center'>
                            <button className=' hover:bg-white hover:border-blue-500 hover:text-black transition-all border-3 border-blue-500 text-white cursor-pointer shadow-md rounded py-1 px-6 bg-blue-500 '>Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-center ml-165'>
                        <p className='max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore explicabo nisi rerum eveniet. Quae blanditiis odio vel sapiente odit, alias illo. Delectus qui autem facere optio aspernatur ad quidem illo dicta! Saepe, magni maxime.</p>
                        </div>    */}
        </div>
    )
}

export default About