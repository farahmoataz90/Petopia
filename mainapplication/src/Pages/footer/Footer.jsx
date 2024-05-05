import React from 'react'
import './footer.css'

import logo from '../assets/petopia.png';
import appstore from '../assets/appstore.svg';
import google from '../assets/googleplay.svg';

function Footer() {
  return (
    <footer className="pt-lg-10 pt-5 footer bg-white">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-4">
                        <img src={logo} alt="" className="img-fluid"/>
                        <div className="mt-4">
                            {/* <p>Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p> */}
                            <div className="fs-4 mt-4">
                                <a className="mdi mdi-facebook text-muted me-2" href="/marketing/landings/landing-education/">
                                </a>
                                <a className="mdi mdi-twitter text-muted me-2" href="/marketing/landings/landing-education/">
                                </a><a className="mdi mdi-instagram text-muted " href="/marketing/landings/landing-education/">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-1">
                    <div className="mb-4">
                        <h3 className="fw-bold mb-3">Company</h3>
                        <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">About</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Pricing</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Blog</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Careers</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="mb-4">
                        <h3 className="fw-bold mb-3">Support</h3>
                        <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Help and Support</a>
                            </li>
                            <li className=" ">
                                <a class="nav-link" href="/marketing/landings/landing-education/">Become Instructor</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Get the app</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">FAQ’s</a>
                            </li>
                            <li className=" ">
                                <a className="nav-link" href="/marketing/landings/landing-education/">Tutorial</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="mb-4">
                        <h3 className="fw-bold mb-3">Get in touch</h3>
                        <p>339 McDermott Points Hettingerhaven, NV 15283</p>
                        <p className="mb-1">Email: <a href="/marketing/landings/landing-education/">support@geeksui.com</a></p>
                        <p>Phone: <span className="text-dark fw-semi-bold">(000) 123 456 789</span></p>
                        <div className="d-flex">
                            <a href="/marketing/landings/landing-education/">
                                <img src={appstore} alt="" className="img-fluid"/>
                            </a>
                            <a className="ms-2" href="/marketing/landings/landing-education/">
                                <img src={google} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="align-items-center g-0 border-top py-2 mt-6 row">
                <div className="col-lg-4 col-md-5 col-sm-12">
                    <span>© 2024 Petopia, Inc. All Rights Reserved</span>
                </div>
                <div className="d-md-flex justify-content-end col-lg-8 col-md-7 col-sm-12">
                    <nav className="nav nav-footer">
                        <a className="nav-link ps-0" href="/marketing/landings/landing-education/">Privacy Policy</a>
                        <a className="nav-link px-2 px-md-3" href="/marketing/landings/landing-education/">Cookie Notice </a>
                        <a className="nav-link d-none d-lg-block" href="/marketing/landings/landing-education/">Do Not Sell My Personal Information </a>
                        <a className="nav-link" href="/marketing/landings/landing-education/">Terms of Use</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer