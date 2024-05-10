import React , { useEffect, useState } from 'react';
import Header from '../header/Header';
import './admin.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

function Admin() {
  const[content , setContent] = useState(<ProductList showForm={showForm}/>); // initial value for the content

  // functions to switch between product list and product form
  function showList()
  {
    setContent(<ProductList showForm={showForm} />);
  }
  function showForm(product)
  {
    setContent(<ProductForm product={product} showList={showList} />);
  }

  return (
    <>
    <Header />
    <div className="container my-5">
      {content}
    </div>
    <Footer />
    </>
  )
}

export default Admin;


function ProductList(props)
{
  const[products, setProducts] = useState([]);


  function fetchProducts()
  {
    fetch("http://localhost:3000/products")
    .then((response)=>{
       if(!response.ok)
        {
          throw new Error("Unexpected Server Response");
        }
       return response.json()
    })
    .then((data) => {
      // console.log(data);
      setProducts(data);
    })
    .catch((error)=>console.log("Error:" , error));
  }

  //use effect allows us to use a function only one time
  useEffect(() => fetchProducts() , []);

  function deleteProduct(id)
  {

    fetch("http://localhost:3000/products/" + id,{
      method: "DELETE" 
    })
    .then((response)=> response.json())
    .then((data) => fetchProducts())
  }



  return(
    <>
    <h2 className='text-center mb-3'>List of Products</h2>
    <button onClick={() => props.showForm({})} className='btn botton-orange me-2 my-3' type="button">Create</button>
    <button onClick={() => fetchProducts()} className='btn botton-refresh me-2 my-3' type="button">Refresh</button>
   
   <Link to={'/dashboard'}>
    <button className='btn botton-refresh me-2 my-3' type="button">Dashboard</button>
    </Link>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Category</th>
          <th>price</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product,index) => {
            return(
              <tr key={index}>

                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.gender}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td className='style'>
                  <button onClick={() => props.showForm(product)} type='button' className='btn btn-primary edit-btn btn-sm me-2'>Edit</button>
                  <button onClick={() => deleteProduct(product.id)} type='button' className='btn btn-danger edit-btn btn-sm me-2'>Delete</button>
                </td>

              </tr>
            );
          })
        }
      </tbody>
    </table>
    </>
  );
}

function ProductForm(props)
{

  const [errorMessage,setErrorMessage] = useState("");

  
  function handleSubmit(event)
  {
    event.preventDefault();

    //read the data of the form
    const formData = new FormData(event.target);

    //convert form data to object
    const product = Object.fromEntries(formData.entries());

    //form validation
    if(!product.name || !product.gender || !product.category || !product.price || !product.description)
    {
      console.log("please fill all the required fields");
      setErrorMessage(
        <div className="alert alert-warning" role="alert">
          Please fill all the required fields!       
        </div>
      )
      return;
    }

    if(props.product._id)
    { 
    //update the product
    fetch("http://localhost:3000/products/" + props.product._id,{
      method: "PATCH" ,
      header :
      {
        "Content-Type": "application.json"
      },
      body : JSON.stringify(product)
    })
    .then((response)=>{ 

      if(!response.ok)
        {
          throw new Error("Unexpected Server Response");
        }
       return response.json()

    })
    .then((data) => props.showList())
    .catch((error)=>console.log("Error:" , error));


       
    } 

    else {
    
    fetch("http://localhost:3000/products",{
      method: "POST" ,
      header :
      {
        "Content-Type": "application.json"
      },
      body : JSON.stringify(product)
    })
    .then((response)=>{ 

      if(!response.ok)
        {
          throw new Error("Unexpected Server Response");
        }
       return response.json()

    })
    .then((data) => props.showList())
    .catch((error)=>console.log("Error:" , error));

  }
  }




  return(
    <>
    <h2 className='text-center mb-3 mx-auto'>{props.product._id ? "Edit Product" : "Create New Product"}</h2>

    <div className="row">
      <div className="col-lg-6 mx-auto">

          {errorMessage}

          <form onSubmit={(event) => handleSubmit(event)}>
           

            { props.product.id &&  <div className="row mb-3">
              <label className="col-sm-4 col-form-label">ID</label>
              <div className="col-sm-8">
                <input readOnly className="form-control-plaintext" name='_id' defaultValue={props.product._id}/>
              </div>
            </div>
            }


            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name='name' defaultValue={props.product.name}/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Gender</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name='gender' defaultValue={props.product.gender}/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Category</label>
              <div className="col-sm-8">
                <select className="form-select" name='category' defaultValue={props.product.category}>
                  <option value="other">Food</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="fish">fish</option>
                  <option value="bird">Bird</option>
                  <option value="monkey">Monkey</option>
                  <option value="sol7fa">Turtle</option>
                  <option value="parrot">Parrot</option>
                  <option value="rabit">Rabit</option>

                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name='price' defaultValue={props.product.price}/>
              </div>
            </div>
            
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea type="text" className="form-control" name='description' defaultValue={props.product.description}/>
              </div>
            </div>
     
            <div className="row ">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type='submit' className="btn botton-orange btn-sm me-3">Save</button>
              </div>
              <div className="col-sm-4 d-grid">
              <button onClick={()=> props.showList()} className='btn btn-secondary edit-btn me-2' type="button">Cancel</button>
              </div>
            </div>



          </form>



      </div>
    </div>
    </>
  );
}