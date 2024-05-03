import logo from './logo.svg';
import './App.css';


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
 <>
 <BrowserRouter>
 {/* header */}
 <Routes>

 <Route path='/' element={<Home />}/>
 <Route path='/products' element={<Products/>}/>


 </Routes>
 {/* <Footer /> */}
 </BrowserRouter>
 </>
  );
}

export default App;
