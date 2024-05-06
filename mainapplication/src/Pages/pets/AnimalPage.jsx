import React from 'react'
import './animalpage.css'
import Header from '../header/Header';
import Title from './Title';
import Item from './Item';
import Card from './Card';
import imageSrc from '../assets/dog1.jpg'
import Pageno from './Pageno';
import Footer from '../footer/Footer';

function AnimalPage() {
  return (
    <>
   <Header />
    <div className="bgcontent">
         <div className="d-flex justify-content-center align-items-center">
            <Title/>
         </div>
         <div className="container">
         <div className="d-flex justify-content-around align-items-center my-4">
            <Item name="All" item1="cat" item2="3ersa" item3="dog"/>
            <Item name="Gender" item1="Male" item2="Female" />
            <Item name="Price" item1="100-300" item2="400-600" item3="700-1000" />
         </div>
         </div>
         <div className="container my-4">
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
                <div className="col-md-4"> 
                <Card image={imageSrc} name="Medhat" age="1 year" category="Dog"/>
            
                </div>
                <div className="col-md-4"> 
                <Card image={imageSrc} name="Medhat" age="1 year" category="Dog"/>
                </div>
         </div>
         <div className="container my-5"> 
         <div className="d-flex justify-content-center align-items-center " > 
         <Pageno />
         </div>
         </div>
         </div>
    </div>
    <Footer />
    </>
  )
}

export default AnimalPage