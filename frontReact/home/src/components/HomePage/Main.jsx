import React from 'react'
import './main.css';
import Hero from './hero/Hero';
import Buddy from './buddy/Buddy';
import Service from './service/Service';
import About from './about/About';
import Contact from './contact/Contact';


function Main() {
  return (
    <>
    <main className='bg-opacity-10'>
     
      <Hero />
      <Buddy />
      <Service />
      <About />
      <Contact />
   </main>
    </>
  )
}

export default Main