import React, { useEffect, useState } from 'react'
import './products.css'

function Products() {
  const[content , setContent] = useState(<ProductList showForm={showForm}/>); // initial value for the content

  // functions to switch between product list and product form
  function showList()
  {
    setContent(<ProductList showForm={showForm} />);
  }
  function showForm()
  {
    setContent(<ProductForm showList={showList} />);
  }


  return (
    <div className="container my-5">
        {/* <h2 className='text-center mb-3'>Pets Page</h2> */}
        {/* <ProductList/>
        <ProductForm/> */}
        {content}
    </div>
  )
}

export default Products


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

  return(
    <>
    <h2 className='text-center mb-3'>List of Pets</h2>
    <button onClick={() => props.showForm()} className='btn btn-primary me-2' type="button">Create</button>
    <button onClick={() => fetchProducts()} className='btn btn-outline-primary me-2' type="button">Refresh</button>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Category</th>
          <th>price</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Action</th>
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
                <td>{product.createdAt}</td>
                <td className='style'>
                  <button type='button' className='btn btn-primary btn-sm me-2'>Edit</button>
                  <button type='button' className='btn btn-danger btn-sm me-2'>Delete</button>
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
      return;
    }

    //else create new product
    product.createdAt = new Date().toISOString().slice(0,10);
    product.id++;

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




  return(
    <>
    <h2 className='text-center mb-3 mx-auto'>Create New Pet</h2>

    <div className="row">
      <div className="col-lg-6 mx-auto">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name='name' defaultValue=""/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Gender</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name='gender' defaultValue=""/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Category</label>
              <div className="col-sm-8">
                <select className="form-select" name='category' defaultValue="">
                  <option value="other">Others</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="fish">fish</option>
                  <option value="bird">Bird</option>
                  <option value="monkey">Monkey</option>
                  <option value="sol7fa">Turtle</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name='price' defaultValue=""/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea type="text" className="form-control" name='description' defaultValue=""/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Created At</label>
              <div className="col-sm-8">
                <input type="date" className="form-control" name='date' defaultValue=""/>
              </div>
            </div>
            <div className="row ">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type='submit' className="btn btn-primary btn-sm me-3">Save</button>
              </div>
              <div className="col-sm-4 d-grid">
              <button onClick={()=> props.showList()} className='btn btn-secondary me-2' type="button">Cancel</button>
              </div>
            </div>



          </form>
      </div>
    </div>
    </>
  );
}