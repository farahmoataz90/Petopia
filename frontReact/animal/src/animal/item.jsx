import React from "react";
import "./css/item.css";
function Item(props){
    return(
        <div >
            <div class="dropdown item ">
        <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            { props.name}
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{ props.item1}</a></li>
            <li><a class="dropdown-item" href="#">{ props.item2}</a></li>
            <li><a class="dropdown-item" href="#">{ props.item3}</a></li>
        </ul>
        </div>
        </div>
    )
}
export default Item;