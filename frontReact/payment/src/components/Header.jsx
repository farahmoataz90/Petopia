import React from 'react'
import "./header.css"
import mainIcon from '../assets/petopia.png';
// import Sun from '../assets/sun.svg';

function Header() {
  return (
    <nav className='navbar navbar-default  navbar navbar-expand-lg navbar-light'>
        <div className='px-0 container'>
            <a className='navbar-brand logo' href='/' >
                <img src={mainIcon} alt='petopia'/>
            </a>
          

            {/* <div className='navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap d-none'>
                <a type='checkbox' id='flexSwitchCheckDefault' className='form-check form-switch theme-switch btn btn-light btn-icon rounded-circle undifined' href='/'>
                 <input type="checkbox" className="form-check-input is-valid" value="light" />
                 <label className='form-check-label sun' >
                    <img src={Sun} alt='sun'/>
                 </label>
                </a>
            </div> */}

            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div className='navbar-collapse collapse' id='navbarSupportedContent'>
                <div className='mx-auto navbar-nav'>
                <div className='navbar-nav'>
                    <div className='nav-item show'>
                     <a role="button" className="show nav-link colr" tabindex="0" href="/">Home</a>
                    </div>

                </div>

                <div className='navbar-nav'>
                    <div className='nav-item show'>
                     <a role="button" className="show nav-link colr" tabindex="0" href="/">Services</a>
                    </div>

                </div>

                <div className='navbar-nav'>
                    <div className='nav-item show'>
                     <a role="button" className="show nav-link colr" tabindex="0" href="/">Adopt</a>
                    </div>

                </div>

                <div className='navbar-nav'>
                    <div className='nav-item show'>
                     <a role="button" className="show nav-link colr" tabindex="0" href="/">Food</a>
                    </div>

                </div>

                <div className='navbar-nav'>
                    <div className='nav-item show'>
                     <a role="button" className="show nav-link colr" tabindex="0" href="/">About Us</a>
                    </div>

                </div>

                <div className='navbar-nav'>
                    <div className='nav-item show'>
                     <a role="button" className="show nav-link colr" tabindex="0" href="/">Contact Us</a>
                    </div>

                </div>
                </div>

                <div className='d-flex align-items-center order-lg-3 flex-row navbar-nav'>
                    {/* <a type="checkbox" id="flexSwitchCheckDefault" className="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle me-2 mt-2" href="/">
                         <input type="checkbox" className="form-check-input is-valid" value="light" />
                         <label className="form-check-label" >
                             <img src={Sun} alt='sun'/>
                         </label>
                     </a> */}

                    <div className='mt-3 mt-lg-0'>
                    <a href="/" target="_blank" className="btn bttn">Sign In</a>
                    </div>
                </div>
            </div>

        </div>
    </nav>
    // </header>
  )
}

export default Header