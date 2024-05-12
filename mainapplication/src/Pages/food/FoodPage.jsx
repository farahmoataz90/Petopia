import React from 'react'
import Header from '../header/Header'
// import Head from './Head'
// import ItemPage from './ItemPage'
// import CardFood from './CardFood'
// import imageSrc from "../assets/dogfood.png";
// import Fpage from './Fpage';
import Footer from '../footer/Footer'
import Title from '../pets/Title'
import Item from '../pets/Item';
import Card from '../pets/Card';

import food1 from '../assets/BonesBites.png';
import food2 from '../assets/NaturalInstinctFood.png';
import food3 from '../assets/DryFoodie.png';
import food4 from '../assets/DoogieCannie.png';
import food5 from '../assets/FreshKissesFood.png';
import food6 from '../assets/HamsBites.png';

import cart from '../assets/22222-removebg-preview.png';
import BackToTop from '../dashboard/BackToTop';

function FoodPage() {
  return (
    <>
    <Header />
    <div>
    <div className="bgcontent">
    <div className="d-flex justify-content-center align-items-center">
        <Title main="Get your Pet's" spaan="Food"/>
    </div>
    <div className="container">
    <div className="d-flex justify-content-around align-items-center my-4">
        <Item name="Category" item1="Dry Food" item2="Protien" item3="Others"/>
        <Item name="Price" item1="100$-500$" item2="600$-800$" item3="800$-1000$"/>
    </div>
    </div>
    <div className="container my-4">
    <div className="row">
              <div className="col-md-4"> 
                <Card image={food5} name="Fresh Kisses" category=" exclusive formula for your dog" age="$20" imggg={cart} botton="Buy"/>
              </div>
              <div className="col-md-4"> 
                <Card image={food6} name="Hams Bites" category="Dry food for your little Hamster" age="$10" imggg={cart} botton="Buy"/>
              </div>
                <div className="col-md-4"> 
                <Card image={food1} name="Bone Bites" category="crispy bites for your dogs as a snack" age="$10" imggg={cart} botton="Buy"/>      
                </div>
                <div className="col-md-4"> 
                <Card image={food4} name="Doogie Cannie" category="canned food for dogs" age="$25" imggg={cart} botton="Buy"/>
                </div>
                <div className="col-md-4"> 
                <Card image={food3} name="Dry Food" category="Dry Food Goodies suitable as a snack" age="$10" imggg={cart} botton="Buy"/>
                </div>
                <div className="col-md-4"> 
                <Card image={food2} name="Natural Instinct" category="crispy bites for your dogs as a snack" age="$50" imggg={cart} botton="Buy"/>
                </div>

    </div>

    </div>
   
    </div>
    </div>
    <Footer />
    <BackToTop />
    </>
  )
}

export default FoodPage