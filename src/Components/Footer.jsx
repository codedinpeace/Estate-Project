import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' mt-30 w-full  h-100 bg-gray-800 mb-10 text-gray-400'>
        <div className='flex mx-auto py-10 px-20 max-sm:hidden sm:hidden lg:block'>
          <img src={assets.logo_dark} alt="" />
          <p className='w-150 text-[] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum at aperiam quis ipsam sunt omnis porro, fugit, eligendi aliquam cum commodi, adipisci exercitationem dolores!</p>
          <span>
          
          </span>
        <div className="comapny">
          <ul className='flex  mt-20 gap-10  text-gray-300 text-xl text-left'>
            
            <a className='underline underline-offset-2' href="#Home">Home</a>
            <a className='underline underline-offset-2'  href="#About">About</a>
            <a className='underline underline-offset-2' href="#Projects">Projects</a>
            <a className=' underline underline-offset-2' href="#Testimonails">Testimonails</a>
                <span className='ml-auto flex space-x-4 justify-end gap-4 underline-none'>

                  <input type="email" placeholder='Subscribe' className='w-69 h-9 pl-3 border border-white rounded ' required/>
                  <button className=' items-center : hover:bg-white hover:border-blue-500 hover:text-black transition-all border-3 border-blue-500 text-white cursor-pointer shadow-md rounded px-6 bg-blue-500 ' type='submit'>Subscribe  </button>
                </span>
          </ul>
        </div>
        <br />
        
          <hr />
          <span className='flex justify-center mt-3'>
          © 2025 Pranam Shaw. All rights reserved
          </span> 
        </div>

        {/* phone layout */}

        <div className=' md:flex lg:hidden items-center mx-auto  '>
          <div className=' items-center mx-auto'>
            <img src={assets.logo_dark} alt="" className='py-4 px-3 w-50 items-center mx-auto  ' />
            <span className='flex justify-center'>
            <p className='w-120 text-[] mt-3 text-center max-md:w-90'>Find your dream property with Estate. We specialize in luxury homes and investment opportunities, providing personalized service to meet your unique real estate needs.</p>
            </span>
            <div className="company">
              <ul className='flex items-center mx-auto justify-center mt-10 gap-4 pl-5'>
              <a className='underline underline-offset-2' href="#Home">Home</a>
            <a className='underline underline-offset-2'  href="#About">About</a>
            <a className='underline underline-offset-2' href="#Projects">Projects</a>
            <a className='underline underline-offset-2' href="#Testimonails">Testimonails</a>
              </ul>
            <span className='mt-5'>
              <form action="" className='mt-10 flex justify-center h-8 gap-3'>
              <input type="email" required className='h-7 border border-white' placeholder='Subscribe' />
              <button className=' items-center : hover:bg-white hover:border-blue-500 hover:text-black transition-all border-3 border-blue-500 text-white cursor-pointer shadow-md rounded px-6 bg-blue-500 ' type='submit'>Subscribe  </button>
              </form>
            </span>
            </div>
            <br />
            <hr />
            <span className='flex justify-center mt-3'>
          © 2025 Pranam Shaw. All rights reserved
          </span> 
          </div>
        </div>
    </div>
  )
}

export default Footer