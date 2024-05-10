import React, { useState } from 'react'
import './login.css'
import video from '../assets/video.mp4';
// import logo from '../assets/logo.png';


import { Link , useNavigate } from 'react-router-dom';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if email and password match admin credentials
        if (email === 'admin@gmail.com' && password === 'admin') {
            // Redirect to Admin component
            navigate('/admin');
        }
        else {
            // Display login error message
            // You can set up a state variable for displaying error message if needed
            console.log('Invalid credentials');
        }
    };
    
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

                <form onSubmit={handleLogin} className='form grid'>
                    <span className='message'>login status will go here</span>

                    <div className="inputDiv">
                        <label htmlFor='Email'>Email</label>
                        <div className="input flex">
                            
                            <input 
                              className='in' 
                              type='' 
                              id='Email'
                              placeholder='Enter your email address'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="inputDiv mb-3">
                        <label htmlFor='password'>Password</label>
                        <div className="input flex">
                            
                            <input 
                              className='' 
                              type='password'  
                              id='password' 
                              placeholder='Enter your password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
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