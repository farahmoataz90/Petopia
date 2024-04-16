import React from 'react'
import './sign.css'
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { Link } from 'react-router-dom';
function Sign() {
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Discover your ideal furry friend on our adoption site</h2>
                {/* <p>give a loving home to a pet in need!</p> */}
            </div>

            <div className="footerDiv flex">
                <span className="text">Already have an account?</span>
                <Link to={'/'}>
                    <button className='btn'>Log in</button>
                </Link>
            </div>

            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    {/* <img src={logo} alt='logo'/> */}
                    <h3>Welcome to Petopia!</h3>
                </div>

                <form action='' className='form grid'>
                    {/* <span className='message'>login status will go here</span> */}


                   



                    <div className="inputDiv">
                        <label htmlFor='Email'>Email</label>
                        <div className="input flex">
                            {/* <FaUserShield className='icon'/> */}
                            <input type='text' id='Email' placeholder='Enter your email address'/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor='password'>Password</label>
                        <div className="input flex">
                            {/* <BsFillShieldLockFill className='icon'/> */}
                            <input type='password' id='password' placeholder='Enter your password'/>
                        </div>
                    </div>

                   

                    <button type='submit' className='btn flex'>
                        <span>Sign up</span>
                    </button>

                    

                </form>
            </div>


        </div>
    </div>
  )
}

export default Sign