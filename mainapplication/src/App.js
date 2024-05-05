import logo from './logo.svg';
import './App.css';

import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


//import router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


import Login from './Pages/login/Login';
import Sign from './Pages/signup/Sign';
import Home from './Pages/home/Home';

const router = createBrowserRouter([
  {
    path:'/', //this folder you are in 
    element:<Login />

  },
  {
    path:'/SignUP',
    element:<Sign />

  },
  {
    path:'/home',
    element: <Home/>
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
