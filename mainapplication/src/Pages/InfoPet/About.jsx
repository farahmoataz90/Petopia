import React from 'react'
import './about.css';
import { Link } from 'react-router-dom';

function About(props) {
  return (
    <div>
    <h2>About</h2> 
    
    <p>{props.info}</p>
    <Link to={'/payment'}>
    <button className="buttonbg rounded-2 w-75 p-2 border-0"> Adopt me</button>
    </Link>
</div>
  )
}

export default About