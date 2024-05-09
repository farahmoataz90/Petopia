import React from 'react'
import './buddy.css'

import hoda from '../assets/hoda.jpg';
import eaters from '../assets/eaters.jpg';
import solhefa from '../assets/solhefa.jpg';

import mon from '../assets/mon.jpg';
import male from '../assets/male.png';

function Buddy() {
  return (
    <section className="py-5 mt-5 py-lg-18 bg-cust">
        <div className="container">
            <div className="mb-10 justify-content-center row">
                <div className="text-center col-lg-8 col-md-12 col-sm-12">
                    <h2 className="mb-2 display-8 fw-bold ">Find Your <span className='orange2'>Buddy</span></h2>
                    <p className="lead display-14 mb-5">the perfect friend is just a click away.</p>
                </div>
            </div>



            {/* start of the cards  1*/}
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-4 card-hover  card border-0">
                        <a href="/">
                            <img src={mon} alt="" className="card-img-top rounded-top-md"/>
                        </a>
                        <div className="card-body">
                            <h3 className="h4 my-2 text-truncate-line-2 ">
                               <a className="text-inherit orange2" href="/adopt">Mojo</a>
                            </h3>

                          <div className="lh-1 mt-3 ">
                              <span className="fs-6 text-muted">Monkey</span> 
                          </div>
                          
                        </div>
                        <div className="card-footer border-0 bg-white">
                            <div className="align-items-center g-0 row">
                                <div class="col-auto">
                                    <img src={male} alt="" className="rounded-circle avatar-xs"/>
                                </div>
                               <div className="col ms-2 col">
                                  <span>3 months</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* start of the cards  1.2*/}
            
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-4 card-hover  card border-0">
                        <a href="/adopt">
                            <img src={hoda} alt="" className="card-img-top rounded-top-md"/>
                        </a>
                        <div className="card-body">
                            <h3 className="h4 my-2 text-truncate-line-2 ">
                               <a className="text-inherit orange2" href="/adopt">Medhat</a>
                            </h3>

                          <div className="lh-1 mt-3 ">
                              <span className="fs-6 text-muted">Golden Dog</span> 
                          </div>
                          
                        </div>
                        <div className="card-footer border-0 bg-white">
                            <div className="align-items-center g-0 row">
                                <div class="col-auto">
                                    <img src={male} alt="" className="rounded-circle avatar-xs"/>
                                </div>
                               <div className="col ms-2 col">
                                  <span>1 year</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            {/* end of the cards 1.2*/}
                        {/* start of the cards  1.2*/}
            
                        <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-4 card-hover  card border-0">
                        <a href="/adopt">
                            <img src={eaters} alt="" className="card-img-top rounded-top-md"/>
                        </a>
                        <div className="card-body">
                            <h3 className="h4 my-2 text-truncate-line-2 ">
                               <a className="text-inherit orange2" href="/adopt">Sondo2 & Bondo2</a>
                            </h3>

                          <div className="lh-1 mt-3 ">
                              <span className="fs-6 text-muted">Hamsters</span> 
                          </div>
                          
                        </div>
                        <div className="card-footer border-0 bg-white">
                            <div className="align-items-center g-0 row">
                                <div class="col-auto">
                                    <img src={male} alt="" className="rounded-circle avatar-xs"/>
                                </div>
                               <div className="col ms-2 col">
                                  <span>5 months</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            {/* end of the cards 1.2*/}
             {/* start of the cards  1.2*/}
            
             <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-4 card-hover  card border-0">
                        <a href="/">
                            <img src={solhefa} alt="" className="card-img-top rounded-top-md"/>
                        </a>
                        <div className="card-body">
                            <h3 className="h4 my-2 text-truncate-line-2 ">
                               <a className="text-inherit orange2" href="/">Mos3ad</a>
                            </h3>

                          <div className="lh-1 mt-3 ">
                              <span className="fs-6 text-muted">parrot</span> 
                          </div>
                          
                        </div>
                        <div className="card-footer border-0 bg-white">
                            <div className="align-items-center g-0 row">
                                <div class="col-auto">
                                    <img src={male} alt="" className="rounded-circle avatar-xs"/>
                                </div>
                               <div className="col ms-2 col">
                                  <span>3 years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            {/* end of the cards 1.2*/}
            </div>
            {/* end of the cards 1*/}
            
        </div>
    </section>
  )
}

export default Buddy