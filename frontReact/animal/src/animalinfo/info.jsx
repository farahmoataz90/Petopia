import React from "react";

function Details(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.loc}</p>

          
        </div>
    )
}
export default Details;