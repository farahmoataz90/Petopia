import React from 'react'
import Hero from './Hero'
import Header from '../header/Header'
import Service from './Service'
import Buddy from './Buddy'
import About from './About'
import Contact from './Contact'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
    <main className='backg'>
      <Header />
      <Hero />
      <Buddy />
      <Service />
      <About />
      <Contact />
      <Footer />

   </main>
    </>
  )
}

export default Home