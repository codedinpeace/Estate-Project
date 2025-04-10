import React from 'react'
import { assets } from '../assets/assets'
import { projectsData } from '../assets/assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(".projects",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".projects"
            }
        })
        tl.from(".tag",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".tag p"
            }
        })
        tl.from(".projects2",{
            y:-30,
            opacity:0,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                scrub:2,
                scroller:"body",
                trigger:".projects2 img",
                end:"top 60%"
            }
        })



        
    })

    return (
        <div id='Projects' className='' >
            <div className='projects flex gap-2 justify-center mt-10'>
                <h1 className='text-2xl md:text-4xl font-medium'>Projects</h1>
                <h1 className='text-2xl md:text-4xl font-light underline underline-offset-2' >We Completed</h1>
            </div>
            <div className='tag flex justify-center text-gray-600 text-[14px] mt-2'>
                <p className='w-70 text-center' >Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
            </div>
            <div className='mx-auto px-4 py-10'>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative right-0 left-0">
                    {projectsData.map((project, index) => (
                        <div key={index} className='projects2 relative shrink-0 mx-auto w-70 max-sm:w-'>
                            <img src={project.image} alt="" className=' w-full mx-auto mt-20 ' />
                            <div className='absolute right-0 left-0 bottom-5'>
                                <div className=' info inline-block bg-white shadow-md w-3/4 px-4 py-2 '>
                                    <span>{project.title} <span className='text-[14px] text-gray-600'>{project.price}</span> <span className='text-gray-600'>|</span> <span className='text-[14px] text-gray-600'>{project.location}</span> </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects

// import React from 'react'
// import { assets } from '../assets/assets'
// import { projectsData } from '../assets/assets'

// const Projects = () => {
//     return (
//         <div id='Projects'> {/* Removed overflow-x-hidden here */}
//             <div className='flex gap-2 justify-center mt-10'>
//                 <h1 className='text-2xl md:text-4xl font-medium'>Projects</h1>
//                 <h1 className='text-2xl md:text-4xl font-light underline underline-offset-2'>We Completed</h1>
//             </div>
//             <div className='flex justify-center text-gray-600 text-[14px] mt-2'>
//                 <p className='w-70 text-center'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
//             </div>
//             {/* Container with proper padding and constraints */}
//             <div className='container mx-auto px-4 py-10'>
//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//                     {projectsData.map((project, index) => (
//                         <div key={index} className='relative mx-auto w-full'>
//                             <img src={project.image} alt="" className='w-full h-auto object-cover' />
//                             <div className='absolute right-0 left-0 bottom-5'>
//                                 <div className='info inline-block bg-white shadow-md w-3/4 px-4 py-2'>
//                                     <span>{project.title} <span className='text-[14px] text-gray-600'>{project.price}</span> <span className='text-gray-600'>|</span> <span className='text-[14px] text-gray-600'>{project.location}</span></span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Projects