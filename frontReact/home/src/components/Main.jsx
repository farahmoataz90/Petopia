import React from 'react'
import './main.css';
import Hero from './hero/Hero';
import Buddy from './buddy/Buddy';

function Main() {
  return (
    <>
    <main className='bg-opacity-10'>
      <Hero />
      <Buddy />
   </main>
    </>
  )
}

export default Main