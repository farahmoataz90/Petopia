import React from "react";
import "./css/property.css";
function Anprop(props) {

    return(
        <div>
            
            <div className="bgcolr p-3 rounded-2 mx-1 ">
            <h5>{props.property}</h5>
           
           <p> {props.des}</p>
        </div>
        </div>
    )
}
export default Anprop