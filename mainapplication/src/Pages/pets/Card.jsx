import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div>
            <div className="p-3">
              <div class="card position-relative ss" >
                <div>
                  <img src={props.image} class="card-img-top img-fluid " alt="..."/>
                  <div class="card-body">
                  <h5 class="card-title">{props.name}</h5>
                  <p class="card-text">{props.category}</p>
                  
                </div>
                <div className="card-footer border-0 bg-white ss">
                            <div className="align-items-center g-0 row">
                                <div class="col-auto">
                                    <img src={props.imggg} alt="" className="rounded-circle avatar-xs"/>
                                </div>
                               <div className="col ms-2 col">
                                  <span>{props.age}</span>
                                </div>
                            </div>
                        </div>
         

                <Link to={"/info"}>
                 <button class="btn bcolor position-absolute top-0 end-0 m-3" >View</button>
                 </Link>
             </div>
        </div>
      </div>
      </div>
  )
}

export default Card