import React from 'react'
import './anrop.css'

function Anrop(props) {
  return (
    <div>
            
    <div className="bgcolr p-3 rounded-2 mx-1 ">
    <h5>{props.property}</h5>
   
   <p> {props.des}</p>
</div>
</div>
  )
}

export default Anrop