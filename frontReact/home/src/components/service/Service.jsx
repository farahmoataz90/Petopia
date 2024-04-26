import React from 'react'
import './service.css'
import photo from '../../assets/ourservicess.png';

function Service() {
  return (
    <section className='container'>

          <div className=" justify-content-center row">
                <div className="text-center col-lg-8 col-md-12 col-sm-12">
                    <h2 className=" display-8 fw-bold ">Our <span className='orange2'>Services</span></h2>
                    {/* <p className="lead display-14">the perfect friend is just a click away.</p> */}
                </div>
            </div>

        <img src={photo} alt='pho' className='img-fluid mw-100'/>
    </section>
  )
}

export default Service