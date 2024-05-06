import React from 'react'

function Details(props) {
  return (
    <div>
            <h1>{props.name}</h1>
            <p>{props.loc}</p>
            <h3>{props.price}</h3>

          
        </div>
  )
}

export default Details