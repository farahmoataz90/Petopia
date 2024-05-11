import logo from './logo.svg';
import './App.css';

import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';


//import router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


import Login from './Pages/login/Login';
import Sign from './Pages/signup/Sign';
import Home from './Pages/home/Home';
import AnimalPage from './Pages/pets/AnimalPage';
import FoodPage from './Pages/food/FoodPage';
// import AnimalInfo from './Pages/InfoPet/AnimalInfo';
import Pay from './Pages/payment/Pay';
import FullDashbord from './Pages/dashboard/FullDashbord';
import Admin from './Pages/admin/Admin';
// import Details from './Pages/details/Details';

const router = createBrowserRouter([
  {
    path:'/',  
    element:<Login />

  },
  {
    path:'/SignUP',
    element:<Sign />

  },
  {
    path:'/home',
    element: <Home/>
  },
  {
    path:'/adopt',
    element: <AnimalPage />
  },
  {
    path:'/food',
    element: <FoodPage />
  },
  // {
  //   path:'/details',
  //   element: <Details />
  // },
  {
    path:'/payment',
    element: <Pay />
  },
  {
    path:'/dashboard',
    element: <FullDashbord />
  },
  {
    path:'/admin',
    element: <Admin />
  }



])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
