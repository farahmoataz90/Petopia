import React from 'react'
import Header from '../header/Header'
import Head from './Head'
import ItemPage from './ItemPage'
import CardFood from './CardFood'
import imageSrc from "../assets/dogfood.png";
import Fpage from './Fpage';
import Footer from '../footer/Footer'

function FoodPage() {
  return (
    <>
    <Header />
    <div>
    <div className="bgcontent">
    <div className="d-flex justify-content-center align-items-center">
        <Head />
    </div>
    <div className="container">
    <div className="d-flex justify-content-around align-items-center my-4">
        <ItemPage name="category" item1="Dogsfood" item2="Catfood"/>
        <ItemPage name="Price" item1="100" item2="200" />
    </div>
    </div>
    <div className="container my-4">
    <div className="row">
    <div className="col-md-4"> 
        <CardFood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30" />
    </div>
    <div className="col-md-4"> 
                <CardFood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
            
                </div>
                <div className="col-md-4"> 
                <CardFood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>         
                </div>
                <div className="col-md-4"> 
                <CardFood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
                </div>
                <div className="col-md-4"> 
                <CardFood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
            
                </div>
                <div className="col-md-4"> 
                <CardFood image={imageSrc} type="Dog pits" about="Dry food for your dog" price="$30"/>
                </div>

    </div>

    </div>
    <div className="container my-5 "> 
    <div className="d-flex justify-content-center align-items-center " > 
    <Fpage />
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default FoodPage