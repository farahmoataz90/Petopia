import React from 'react'

function Image(props) {
  return (
    <div>
             <img src={props.image} class="card-img-top" alt="..."/>
        </div>
  )
}

export default Image