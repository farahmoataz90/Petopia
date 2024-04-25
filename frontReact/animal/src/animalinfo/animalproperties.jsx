import React from "react";
import "./css/property.css";
function Anprop(props) {

    return(
        <div>
            
            <div className="bgcolr p-3 rounded-2 mx-1 ">
            <h3>{props.property}</h3>
           
           <p> {props.des}</p>
        </div>
        </div>
    )
}
export default Anprop