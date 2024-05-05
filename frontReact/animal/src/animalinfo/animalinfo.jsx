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
                    
                    <div className="col-md-7">
                     < Imag  image={imageSrc} />

                    </div>
                    <div className="col-md-5">
                    <div className="my-1 mx-3">
                        <Details name="shalby" loc="madinat nasr" price="$2000"  />
                        </div>
                        <div className="d-flex  align-items-center my-3 mx-3">
                       <Anprop property="category" des=" Dog"/>
                       <Anprop property="Age" des=" 1 year"/>
                       <Anprop property="gender" des=" Male"/>
                       </div>
                       <div className="my-4 mx-3">
                       <Aboutan info="Having a dog as a pet brings a moment of joy and excitement in our life. Almost everyone wants to have a cute dog in his home."/>
                       </div>
                      
                    </div>
                </div>
           </div>
        </div>  
     </div>
    )
}
export default Info