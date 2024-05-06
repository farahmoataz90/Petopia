import React from 'react'
import './cardfood.css';

function CardFood(props) {
  return (
    <div>
            <div className=" p-3">
        <div class="card position-relative " >
        <div>
            <img src={props.image} class="card-img-top img" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.type}</h5>
            <p class="card-text">{props.about}</p>
            <h3><p class="card-text">{props.price}</p></h3>
         </div>
         

             <button class="btn fcolor end-100 m-3" >Add to cart</button>
             </div>
        </div>
      </div>
      </div>
  )
}

export default CardFood