import React, { useState } from 'react'
import './card.css'
import { Link, useNavigate } from 'react-router-dom';
import Model from './Model';

function Card(props) {
  
  const [model, setModel] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (props.botton === "Buy") {
      navigate("/payment");
    } else {
      setModel(true);
    }
  };
  return (
    <>
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
                        <button class="btn bcolor position-absolute top-0 end-0 m-3"onClick={handleButtonClick}>{props.botton}</button>
             </div>
        </div>
      </div>
      </div>
      
      
      {
        model && <Model hide={() => setModel(false)} />
      }
      </>
  )
}

export default Card