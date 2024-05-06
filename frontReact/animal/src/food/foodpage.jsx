import React from "react";
import Head from "./headerfood";
import Itempage from "./itemfood";
import "./css/headerfood.css";
import Cardfood from "./cardfood";
import imageSrc from "../../src/img/dogfood.png";
import Fpage from "./fpages";
function Foodpage(){
    return(
        <div>
         <div className="bgcontent">
            <div className="d-flex justify-content-center align-items-center">


           <Head/>
            </div>
            <div className="container">
            <div className="d-flex justify-content-around align-items-center my-4">
            <Itempage name="category" item1="Dogsfood" item2="Catfood"/>
            <Itempage name="Price" item1="100" item2="200" />
           
           
            </div> 
            </div>
            <div className="container my-4">
            <div className="row">

                <div className="col-md-4"> 
                <Cardfood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
            
                </div>
                <div className="col-md-4"> 
                <Cardfood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
            
                </div>
                <div className="col-md-4"> 
                <Cardfood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>         
                </div>
                
                <div className="col-md-4"> 
                <Cardfood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
                </div>
                
                <div className="col-md-4"> 
                <Cardfood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
            
                </div>
                <div className="col-md-4"> 
                <Cardfood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
                </div>
                
                
            </div>
            </div>
            <div className="container my-5 "> 
   
   <div className="d-flex justify-content-center align-items-center " > 
   <Fpage/> 
   </div>
  
   </div>
           
            
 </div>
 </div>

    )
        
        
    
}
export default Foodpage