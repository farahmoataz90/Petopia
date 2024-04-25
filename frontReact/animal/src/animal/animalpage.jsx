import React from "react";
import Header from "./header";
import Item from "./item";
import Card from "./card";
import imageSrc from "../../src/img/dog1.png";
import Page from "./pages";
import "./css/animal.css";
function Animalpage() {


    return(
        <div className="bgcontent">
            <div className="d-flex justify-content-center align-items-center">


           <Header/>
            </div>
            <div className="container">
            <div className="d-flex justify-content-around align-items-center my-4">
            <Item name="All" item1="cat" item2="3ersa" item3="dog" />
            <Item name="Gender" item1="Male" item2="Female" />
            <Item name="Price" item1="100-300" item2="400-600" item3="700-1000" />
            <Item name="Name"/>
            </div> 
            </div>
            <div className="container">
            <div className="row">

                <div className="col-md-4"> 
                <Card image={imageSrc} name="Medhat" age="1 year" category="Dog"/>
            
                </div>
                <div className="col-md-4"> 
                <Card image={imageSrc} name="Medhat" age="1 year" category="Dog"/>
            
                </div>
                <div className="col-md-4"> 
                <Card image={imageSrc} name="Medhat" age="1 year" category="Dog"/>
            
                </div>
            </div>
            </div>
   <div className="container my-5"> 
   
   <div className="d-flex justify-content-center align-items-center " > 
   <Page/> 
   </div>
  
   </div>
           
            
        </div>
  
    )
}
export default Animalpage