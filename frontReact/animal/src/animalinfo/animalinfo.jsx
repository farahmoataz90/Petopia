import React from "react";
import Imag from "./animalphoto";
import imageSrc from "../../src/img/dog1.png";
import Details from "./info";
import Anprop from "./animalproperties";
import Aboutan from "./about";

function Info(){
    return(
        <div>
           
            <div className="my-5">
            <div className="my-5">
                <div className="row">
                    
                    <div className="col-md-8">
                     < Imag  image={imageSrc} />

                    </div>
                    <div className="col-md-4">
                    <div className="my-3">
                        <Details name="shalby" loc="madinat nasr" />
                        </div>
                        <div className="d-flex justify-content-around align-items-center my-3">
                       <Anprop property="category" des=" Dog"/>
                       <Anprop property="Age" des=" 1 year"/>
                       <Anprop property="gender" des=" Male"/>
                       </div>
                       <div className="my-3">
                       <Aboutan info="hhfuhdihfouerh;f;ishdf;uhsedu;fhydfhvdhvhbfhfisd"/>
                       </div>
                      
                    </div>
                </div>
           </div>
        </div>  
     </div>
    )
}
export default Info