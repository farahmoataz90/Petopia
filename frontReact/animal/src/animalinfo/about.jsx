import React from "react";
import "./css/aboutan.css";
function Aboutan(props) {
    return(
        <div>
            <h2>About</h2>
            <p>{props.info}</p>
            <button className="buttonbg rounded-2 w-75 p-2 border-0"> Adopt me</button>
        </div>
    )
}
export default Aboutan