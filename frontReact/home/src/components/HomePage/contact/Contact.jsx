import React from 'react'
import './contact.css'
function Contact() {
  return (
    <section className="container">
         <div className=" py-lg-8 mt-5 mb-5 justify-content-center row">
                <div className="text-center col-lg-8 col-md-12 col-sm-12">
                    <h2 className=" display-8 fw-bold ">Contact <span className='orange2'>US</span></h2>
                    
                </div>
            </div>
            <div className="mb-3 d-grid gap-2 col-6 mx-auto">
               {/* <label for="exampleFormControlInput1" className="form-label">Email address</label>/ */}
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
           </div>
          <div class="mb-3 d-grid gap-2 col-6 mx-auto">
         {/* <label for="exampleFormControlTextarea1" className="form-label">Enter</label> */}
         
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter your message"></textarea>
         <div className='d-grid gap-2 col-3 mx-auto mt-2'>
         <button type="submit" className="btn mt-2 mb-3 orange3">Submit</button></div>
             </div>

        
    </section>
  )
}

export default Contact