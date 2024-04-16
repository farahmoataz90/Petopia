import './App.css';
import Login from './components/Login/Login';
import Sign from './components/Sign/Sign';


//import router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/', //this folder you are in 
    element:<div><Login/></div>

  },
  {
    path:'/SignUP',
    element:<div><Sign/></div>

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
