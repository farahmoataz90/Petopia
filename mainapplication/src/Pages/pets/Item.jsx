import React from 'react'
import './item.css'

function Item(props) {
  return (
    <div >
            <div class="dropdown item rounded ">
        <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            { props.name}
        </button>
        <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">{ props.item1}</a></li>
            <li><a className="dropdown-item" href="#">{ props.item2}</a></li>
            <li><a className="dropdown-item" href="#">{ props.item3}</a></li>
        </ul>
        </div>
       
        </div>
  )
}

export default Item