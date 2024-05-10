import React from 'react'
import './title.css'

function Title(props) {
  return (
    <div className="my-5" >
           
            <h1>{props.main}<span className="header shadow-none bg-transparent">{props.spaan}</span></h1>
          
        </div>  
  )
}

export default Title