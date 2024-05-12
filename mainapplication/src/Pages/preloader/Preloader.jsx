import React from 'react';
import './preloader.css';
import pre from '../assets/Running_dog.gif';

function Preloader() {
  return (
    <div className="loader">
    <div className="svg-wrapper">
      {/* copy svg image and past it here */}
      <img src={pre} alt='running dog' className='preimg'/>
    </div>
  </div>
  )
}

export default Preloader