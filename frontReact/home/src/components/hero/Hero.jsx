// import mainPhoto from '../assets/mainphoto.jpg';
import main from '../../assets/mainphoto.jpg';
import React from 'react'
import './hero.css';

function Hero() {
  return (
    <section className="py-md-10 pt-5 bg-opacity-10 position-relative">
            <div className="container">
               <div className="row align-items-center py-lg-8">
                  <div className="col-md-6 col-12">
                     <div className="text-center text-md-start">
                        <div className="mb-6 pe-xl-8">
                           <h1 className="display-5">Adopt Love <br/> Adopt a <span className='orange2'>Pet</span></h1>
                           <p className="lead">Your ultimate destination for finding your perfect furry companion!</p>
                        </div>
                        <div className="mb-7">
                           <div className="mb-3">
                              <a href="#!" className="btn orange me-2">Adopt Now</a>
                              <a href="#!" className="btn btn-white">Learn More</a>
                           </div>
                           <small className='mb-2'>📣 24-Hour Pet Behavior Helpline </small>
                        </div>
                        {/* <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
                        </div> */}
                     </div>
                  </div>
                  <div className="col-md-6 col-12 position-md-absolute top-0 end-0 left-0 h-100 mt-6 mt-md-0 px-0 bbb" >
                     <div className='bbb'>
                        <figure className="figure">
                           <img src={main} alt="" class="img-fluid"/>
                        </figure>
                     </div>
                  </div>
               </div>
            </div>
         </section>
  )
}

export default Hero