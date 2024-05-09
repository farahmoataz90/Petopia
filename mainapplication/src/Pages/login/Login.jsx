import React, { useState } from 'react'
import './login.css'
import video from '../assets/video.mp4';
import logo from '../assets/logo.png';


import { Link } from 'react-router-dom';


function Login() {
    
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Discover your ideal furry friend on our adoption site</h2>
                
            </div>

            <div className="footerDiv flex ">
                <span className="text">Don't have an account?</span>
                <Link to={'/SignUP'}>
                    <button className='btn my-2'>Sign Up</button>
                </Link>
            </div>

            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    
                    <h3>Welcome Back!</h3>
                </div>

                <form action='POST' className='form grid'>
                    <span className='message'>login status will go here</span>

                    <div className="inputDiv">
                        <label htmlFor='Email'>Email</label>
                        <div className="input flex">
                            
                            <input className='in' type=''  id='Email' placeholder='Enter your email address' />
                        </div>
                    </div>

                    <div className="inputDiv mb-3">
                        <label htmlFor='password'>Password</label>
                        <div className="input flex">
                            
                            <input className='' type='password'  id='password' placeholder='Enter your password'/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Log in</span>
                    </button>

                    

                </form>
            </div>


        </div>
    </div>
  )
}

export default Login