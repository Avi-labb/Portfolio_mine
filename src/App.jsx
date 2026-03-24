
import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import About from './sections/About'
import Project from './sections/Project'
import Education from './sections/Education'
import Services from './sections/Services'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Project />
        <Education />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default App