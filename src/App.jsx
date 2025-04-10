import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <ToastContainer position="top-right" autoClose={3000}/>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App  