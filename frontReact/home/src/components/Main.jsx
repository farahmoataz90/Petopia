import React from 'react'
import './main.css';
import bluebbs from '../assets/blueBubbles.svg';
import mainPhoto from '../assets/mainphoto.jpg';
import orangebbs from '../assets/orangbbs.svg';




function Main() {
  return (
    <main>
      <section className='py-lg-16 py-6 m-5'>
        <div className='container'>
          <div className='d-flex align-items-center row'>

            {/*start of the photo */}
            <div className='d-lg-flex col-xxl-5 col-xl-6 col-lg-6 col-12 '>
              <div className='mt-12 mt-lg-0 position-relative'>
                <div className='position-absolute top-0 start-0 translate-middle d-none d-md-block'>
                  <img src={bluebbs} alt='graphics-2'/>
                </div>
                  <img src={mainPhoto} alt='main' className='img-fluid rounded-4 w-100 z-1 position-relative'/>
                <div className='position-absolute top-100 start-100 translate-middle d-none d-md-block'>
                  <img src={orangebbs} alt='graphics-1'/>
                </div>
              </div>
            </div>
            {/* end of the photo */}

            <div className='mt-12 mt-lg-0 jusify-content-end col-xxl-5 col-xl-6 col-lg-6 col-12 offset-xxl-1'>
              <div>
                <h1 className='display-8 title'>Adopt Love </h1>
                <h1 className='mb-3 title'>Adopt a <span className='Orangecol'>Pet</span></h1>
                <p className="titleP mb-4">
                Welcome to Petopia, your ultimate destination for finding your perfect furry
                companion! At Petopia, we believe that every pet deserves a loving home, 
                and every home deserves a loving pet. We provide detailed information 
                about each of them , including their medical history ,and behavior to help adapters make the best decision.
                </p>
              </div>
              <a className='btn m-1 bttn' href='/'>
                  Adopt Now
              </a>
              <a className='btn m-1 bttn2' href='/'>
                  Learn More
              </a>

            </div>


          </div>

        </div>

      </section>
    </main>
  )
}

export default Main