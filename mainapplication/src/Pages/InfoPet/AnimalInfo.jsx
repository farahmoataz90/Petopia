import React from 'react'
import Header from '../header/Header'
import Image from './Image'
import imageSrc from '../assets/hoda.jpg';
import Details from './Details';
import Anrop from './Anrop';
import About from './About';

function AnimalInfo() {
  return (
    <>
    <Header />
    <div>
    <div className="my-5">
    <div className="my-5">
    <div className="row">
    <div className="col-md-7">
        <Image image={imageSrc}/>
    </div>
    <div className="col-md-5">
    <div className="my-1 mx-3">
        <Details  name="shalby" loc="madinat nasr" price="$2000"/>
    </div>
    <div className="d-flex  align-items-center my-3 mx-3">
        <Anrop property="category" des=" Dog"/>
        <Anrop property="Age" des=" 1 year"/>
        <Anrop property="gender" des=" Male"/>

    </div>
    <div className="my-4 mx-3">
        <About info="Having a dog as a pet brings a moment of joy and excitement in our life. Almost everyone wants to have a cute dog in his home."/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default AnimalInfo