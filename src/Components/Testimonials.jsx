import React from 'react'
import { assets } from '../assets/assets'
import pfp from '../assets/profile_img_1.png'
import pfp2 from '../assets/profile_img_2.png'
import pfp3 from '../assets/profile_img_3.png'
import { testimonialsData } from '../assets/assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(".testi-head",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".testi-head"
            }
        })
        tl.from(".testi-para",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".testi-para"
            }
        })
        tl.from(".Testimonails-Card",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".Testimonails-Card",
                end:"top 60%"
            }
        })
    })

  return (
    <div className='mt-40  ' id='Testimonials'>
        <div className='testi-head flex justify-center gap-3'>    
            <h1 className='font-medium text-2xl md:text-4xl'>Testimonials</h1>
            <h1 className='font-light underline underline-offset-2 text-2xl md:text-4xl'>Of Our Customers</h1>
        </div>
        <div className='testi-para flex justify-center text-[14px] text-gray-600 mt-2 '>
            <p className='w-90 text-center'>See what others are saying about us! Real experiences, real results.</p>
        </div>
 
        <div className='Testimonails-Card flex justify-evenly    mt-20 cursor-pointer flex-wrap space-y-14 space-x-6 '>
            <div className=' card1 max-md:w-70 w-100 max-md:h-60 h-85 border-none rounded-md  transition-all ease-in-out duration-300 '>
                <img className='items-center mx-auto max-md:w-10 w-15 mt-5' src={pfp} alt="" />
                <h1 className='max-md:text-[16px] mx-auto text-center mt-3 text-2xl'>Donald Jackman</h1>
                <h2 className='text-center max-md:text-[12px] text-[18px] text-gray-600'>Marketing Manager</h2>
                <span className='flex justify-center mt-2'>
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                </span>
                <span className='flex justify-center'>
                <p className='text-gray-600 text-center max-md:text-[10px] text-[16px] max-md:w-60 w-80 mt-3 '>From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.</p>
                </span>
            </div>
            <div className=' card1 max-md:w-70 w-100 max-md:h-60 h-85 border-none rounded-md  transition-all ease-in-out duration-300 '>
                <img className='items-center mx-auto max-md:w-10 w-15 mt-5' src={pfp2} alt="" />
                <h1 className='max-md:text-[16px] mx-auto text-center mt-3 text-2xl'>Richard Nelson</h1>
                <h2 className='text-center max-md:text-[12px] text-[18px] text-gray-600'>UI/UX Designer</h2>
                <span className='flex justify-center mt-2'>
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                </span>
                <span className='flex justify-center'>
                <p className='text-gray-600 text-center max-md:text-[10px] text-[16px] max-md:w-60 w-80 mt-3 '>Their collaborative approach made the design process smooth and effective. They listened carefully to requirements and delivered excellent results on schedule. I appreciate their attention to usability</p>
                </span>
            </div>
            <div className=' card1 max-md:w-70 w-100 max-md:h-60 h-85 border-none rounded-md  transition-all ease-in-out duration-300 '>
                <img className='items-center mx-auto max-md:w-10 w-15 mt-5' src={pfp3} alt="" />
                <h1 className='max-md:text-[16px] mx-auto text-center mt-3 text-2xl'>James Washington</h1>
                <h2 className='text-center max-md:text-[12px] text-[18px] text-gray-600'>Co-Founder</h2>
                <span className='flex justify-center mt-2'>
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                <img src={assets.star_icon} alt="" className='w-5' />
                </span>
                <span className='flex justify-center'>
                <p className='text-gray-600 text-center max-md:text-[10px] text-[16px] max-md:w-60 w-80 mt-3 '>Working with this team transformed our business outlook. They provided innovative solutions to our challenges and were committed to our success. Their industry expertise is truly remarkable</p>
                </span>
            </div>
            
        </div>
        
    </div>
  )
}   

export default Testimonials