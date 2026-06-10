import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter} from "react-router-dom"
import Navbar from './Components/Navbar'
import About from './Components/About'
import Hero from './Components/Hero'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import { div } from 'framer-motion/client'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      
      <div className=''>
      <BrowserRouter>
      <div className=''>
        <div className='h-[100vh]'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
      
        <hr className='mt-10' />
        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    </div>
 
  )
}

export default App
