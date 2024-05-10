import React from 'react'
import './animalpage.css'
import Header from '../header/Header';
import Title from './Title';
import Item from './Item';
import Card from './Card';
import Medhat from '../assets/Medhat.png'
// import Pageno from './Pageno';
import Footer from '../footer/Footer';
import male from '../assets/male.png';
import female from '../assets/FemaleIcon.png';
import Bor3y from '../assets/Bora3y.png';
import Mello from '../assets/Mello.png';
import Mos3ad from '../assets/Masoad.png';
import Mojo from '../assets/Mojo.png';
import Hamatro from '../assets/Hamtaro.png';


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
                     <Card image={Bor3y} name="Bor3y" age="2 years" category="Cat" imggg={male}/>         
                   </div>
                   <div className="col-md-4"> 
                     <Card image={Mello} name="Mello" age="1 year" category="Cat" imggg={female}/>
                    </div>
                    <div className="col-md-4"> 
                      <Card image={Mos3ad} name="Sa3dya" age="1 year" category="Monkey" imggg={female}/>
                    </div>
                    <div className="col-md-4"> 
                      <Card image={Mojo} name="Mojo" age="3 months" category="Monkey" imggg={male}/>
                    </div>
                    <div className="col-md-4"> 
                      <Card image={Hamatro} name="Hamtaro" age="3 months" category="Hamster" imggg={female}/>
                    </div>
                </div>
         <div className="container my-5"> 
         </div>
         </div>
    </div>
    <Footer />
    </>
  )
}

export default AnimalPage