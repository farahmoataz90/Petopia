import React from 'react'
import './animalpage.css'
import Header from '../header/Header';
import Title from './Title';
import Item from './Item';
import Card from './Card';
import Medhat from '../assets/hoda.jpg'
// import Pageno from './Pageno';
import Footer from '../footer/Footer';
import male from '../assets/male.png';


function AnimalPage() {
  return (
    <>
   <Header />  
    <div >
         <div className="d-flex justify-content-center align-items-center">
            <Title main="Adopt your" spaan="Pet"/>
         </div>
         <div className="container">
              <div className="d-flex justify-content-around align-items-center my-4">
                 <Item name="All" item1="Cat" item2="Dog" item3="Monkey"/>
                 <Item name="Gender" item1="Male" item2="Female" />
                 <Item name="Name" item1="Lucy" item2="Oreo" item3="Brown" />
                </div>
          </div>
          <div className="container my-4">
                <div className="row">
                  <div className="col-md-4"> 
                     <Card image={Medhat} name="Medhat" age="1 year" category="Dog" imggg={male}/>
                   </div>
                  <div className="col-md-4"> 
                     <Card image={Medhat} name="Medhat" age="1 year" category="Dog"imggg={male}/>         
                   </div>
                   <div className="col-md-4"> 
                     <Card image={Medhat} name="Medhat" age="1 year" category="Dog" imggg={male}/>
                    </div>
                    <div className="col-md-4"> 
                      <Card image={Medhat} name="Medhat" age="1 year" category="Dog" imggg={male}/>
                    </div>
                    <div className="col-md-4"> 
                      <Card image={Medhat} name="Medhat" age="1 year" category="Dog" imggg={male}/>
                    </div>
                    <div className="col-md-4"> 
                      <Card image={Medhat} name="Medhat" age="1 year" category="Dog" imggg={male}/>
                    </div>
                </div>
         <div className="container my-5"> 
         {/* <div className="d-flex justify-content-center align-items-center " > 
         <Pageno />
         </div> */}
         </div>
         </div>
    </div>
    <Footer />
    </>
  )
}

export default AnimalPage