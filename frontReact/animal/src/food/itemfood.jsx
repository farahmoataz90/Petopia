import React from "react";
import "./css/itemf.css";
function Itempage(props) {
    return(
        <div >
            <div class="dropdown itemf rounded ">
        <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            { props.name}
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{ props.item1}</a></li>
            <li><a class="dropdown-item" href="#">{ props.item2}</a></li>
           
        </ul>
        </div>
        </div>
    )
} 
export default Itempage