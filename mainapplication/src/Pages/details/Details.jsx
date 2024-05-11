import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Details(props) {
  return (
    <>
    <Header />
    <div className='container d-flex flex-column justify-content-center align-items-center my-5'>
    <div className="card h-75 w-75 mx-2 d-flex flex-row">
      <img src={props.image} alt='card' className='col-6 h-100 ' />
      <div className='d-flex flex-column justify-content-center align-items-start py-4 gap-4 col-6'>
          <section>
                  <h1 className='fw-bolder'>{props.name}</h1>
                  {/* <p className='text-start'>{props.city}</p> */}
            </section>
            <section className='d-flex flex-row gap-3'>
               <div className="info bg-info px-3 py-4 rounded-1 d-flex flex-column justify-content-center col-5">
                    <h5 className='fw-bold mb-0'>Category</h5>
                    <p className='text-black-50 mb-0 mt-1'>{props.category}</p>
               </div>
               <div className="info bg-info px-3 py-4 rounded-1 d-flex flex-column justify-content-center col-5">
                    <h5 className='fw-bold mb-0'>Age</h5>
                    <p className='text-black-50 mb-0 mt-1'>{props.age}</p>
                </div>
                <div className="info bg-info px-3 py-4 rounded-1 d-flex flex-column justify-content-center col-5">
                    <h5 className='fw-bold mb-0'>Gender</h5>
                    <p className='text-black-50 mb-0 mt-1'>Male</p>
                </div>
            </section>
            <section className='d-flex flex-column align-items-start'>
              <h1 className='fw-bolder'>About</h1>
              {/* <p className='text-black-50 text-start'>{about}</p> */}
            </section>
            <section className='d-flex flex-row justify-content-between align-items-center  w-50 gap-4'>
                {/* <p className='mb-0'>Like</p> */}
                <i class="bi bi-heart"></i>
                <button className='btn bg-info w-100 py-2 fw-bold '>Adopt Me</button>
            </section>
      </div>

    </div>
    </div>
    <Footer />
    </>
  )
}

export default Details