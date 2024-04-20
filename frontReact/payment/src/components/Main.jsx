import React from 'react'
import './main.css'
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import paypal from '../assets/paypal.svg';
function Main() {
  return (
    <>
    <section className='p-5 pb-md-7'>
        <div className='container'>
            <h1 class="h3 mb-0 mt-3 cols">Checkout</h1>
        </div>
    </section>
    <section className='pt-0'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mb-6 mb-lg-0">
                    <div className="card bg-transparent mb-6 border-0">
                        <div className="card-header bg-transparent border-bottom d-flex justify-content-between align-items-center px-0">
                           <h5 className='cols'>Personal info</h5>
                           <a href="/" className="btn btn-light border mb-0">
                             <i className="bi bi-plus-lg me-1"></i>Add new
                            </a>
                        </div>
                        <div className="card-body px-0 pb-0">
                            <div className="card-body p-0">
                                <form action="" className="row g-3">
                                   <div className="col-md-6 ">
								   	   <label className="form-label">First name</label>
								   	   <input type="text" className="form-control" value="Jacqueline" aria-label="First name"/>
								   </div>
                                   <div className="col-md-6">
									   <label className="form-label">Last name</label>
									   <input type="text" className="form-control" value="Miller" aria-label="Last name"/>
								    </div>
                                    <div className="col-md-6">
									   <label className="form-label">Email</label>
									   <input type="email" value="example@gmail.com" className="form-control"/>
								    </div>
                                    <div className="col-md-6">
									    <label className="form-label">Mobile number</label>
									    <input type="text" value="9154857896" className="form-control"/>
								    </div>
                                    <div className="col-12">
									   <label className="form-label">Address</label>
									   <input type="text" value="1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548." className="form-control"/>
								   </div>
                                   <div className="col-12">
									   <label className="form-label">Address 2 (Optional)</label>
									   <input type="text" className="form-control"/>
								    </div>
                                    <div className="col-md-4">
									    <label className="form-label">Country</label>
									    <select className="form-select select" aria-label="Default select example">
										    <option value="1">UK</option>
										    <option value="2">USA</option>
										    <option value="3">India</option>
									    </select>
								   </div>
                                   <div className="col-md-4">
									<label className="form-label">State</label>
									<select className="form-select select" aria-label="Default select example">
										<option value="1">New York</option>
										<option value="2">California</option>
										<option value="3">Mumbai</option>
										<option value="3">Peru</option>
									</select>
								   </div>
                                   <div className="col-md-4">
									<label className="form-label">Zip</label>
									<input type="text" value="444555" className="form-control"/>
								    </div>
                                    <div className="col-md-12">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
										<label className="form-check-label" for="flexCheckDefault">The shipping address is the same as my billing address </label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
										<label className="form-check-label" for="flexCheckDefault2">Save this information for next time </label>
									</div>
								</div>
                                <div className="col-12">
									<label className="form-label me-2">Your saved cards</label>
									<a href="/"><img src={visa} class="w-40px me-2" alt=""/></a>
									<a href="/"><img src={mastercard} class="w-40px me-2" alt=""/></a>
								</div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 bg-transparent">
					{/* <!-- Card header --> */}
					<div className="card-header bg-transparent border-bottom px-0 pt-5">
						<h5 className='cols'>Payment options</h5>
					</div>

					{/* <!-- Card body --> */}
					<div className="card-body  border-0 px-0">
						<div class="row g-4">
							{/* <!-- Options item --> */}
							<div className="col-md-6 col-lg-12 col-xl-6">
								<div className="form-check border rounded p-3">
									<div className="d-flex justify-content-between">
										<label className="form-check-label d-flex align-items-start pe-4" for="standard">
											<img src={visa} className="w-40px me-3 mt-1" alt=""/>
											<span>
												<span className="d-block fw-semibold heading-color mb-1">Visa ending in 1245</span>
												<span className="d-block small">Expiry 08/2024</span>
											</span>
										</label>
										<input className="form-check-input" type="radio" name="payOptions" id="standard"/>
									</div>

									<div className="d-flex justify-content-end gap-3 mt-3">
										<a href="/" className="text-body-secondary text-primary-hover small">Set as default</a>
										<a href="/" className="heading-color text-primary-hover fw-semibold small" data-bs-toggle="modal" data-bs-target="#editcard">
											<i className="bi bi-pencil-square me-1"></i>
											Edit
										</a>
									</div>
								</div>
							</div>

							{/* <!-- Options item --> */}
							<div className="col-md-6 col-lg-12 col-xl-6">
								<div className="form-check border rounded p-3">
									<div className="d-flex justify-content-between">
										<label className="form-check-label d-flex align-items-start pe-4" for="standard2">
											<img src={mastercard} className="w-40px me-3 mt-1" alt=""/>
											<span>
												<span className="d-block fw-semibold heading-color mb-1">Mastercard ending in 1245</span>
												<span className="d-block small">Expiry 06/2024</span>
											</span>
										</label>
										<input className="form-check-input" type="radio" name="payOptions" id="standard2"/>
									</div>

									<div className="d-flex justify-content-end gap-3 mt-3">
										<a href="/" className="text-body-secondary text-primary-hover small">Set as default</a>
										<a href="/" className="heading-color text-primary-hover fw-semibold small" data-bs-toggle="modal" data-bs-target="#editcard"><i className="bi bi-pencil-square me-1"></i>Edit</a>
									</div>
								</div>
							</div>

							{/* <!-- Options item --> */}
							<div className="col-md-6 col-lg-12 col-xl-6">
								<div className="form-check border rounded p-3">
									<div className="d-flex justify-content-between">
										<label className="form-check-label d-flex align-items-start pe-4" for="standard3">
											<img src={paypal} className="w-40px me-3 mt-1" alt=""/>
											<span>
												<span className="d-block fw-semibold heading-color mb-1">Pay using PayPal</span>
												<span className="d-block small">Fast, easy an secure</span>
											</span>
										</label>
										<input className="form-check-input" type="radio" name="payOptions" id="standard3"/>
									</div>

									<div className="d-flex justify-content-end gap-3 mt-3">
										<a href="/" className="text-body-secondary text-primary-hover small">Set as default</a>
										<a href="/" className="heading-color text-primary-hover fw-semibold small"><i class="bi bi-pencil-square me-1"></i>Edit</a>
									</div>
								</div>
							</div>

							{/* <!-- Options item --> */}
							<div className="col-md-6 col-lg-12 col-xl-6">
								<div className="form-check border rounded p-3">
									<div className="d-flex justify-content-between">
										<label className="form-check-label d-flex align-items-start pe-4" for="standard4">
											<span className="w-40px"><i class="bi bi-truck fs-5"></i></span>
											<span>
												<span className="d-block fw-semibold heading-color mb-1">Cash on delivery</span>
												<span className="d-block small">You have to pay <b>$25</b> for delivery.</span>
											</span>
										</label>
										<input className="form-check-input" type="radio" name="payOptions" id="standard4"/>
									</div>

									<div className="mt-3 text-end">
										<a href="/" className="text-body-secondary text-primary-hover small">Set as default</a>
									</div>
								</div>
							</div>

						</div>
					</div>	
				</div>

                </div>
                <div className="col-lg-4 ps-xl-6">
                <div className="card border p-4">
					{/* <!-- card header --> */}
					<div className="card-header bg-white p-0 pb-3">
						<h5 className="card-title mb-0 cols">Promo code</h5>

						{/* <!-- Input --> */}
						<form className="input-group mt-4">
							<input className="form-control rounded me-1" type="email" placeholder="Type here.."/>
							<button type="button" className="btn bttn rounded-2 mb-0">Apply</button>
						</form>
					</div>

					{/* <!-- Card body --> */}
					<div className="card-body p-0 pb-3 mt-2">
						<ul className="list-group list-group-borderless">
							<li className="list-group-item d-flex justify-content-between align-items-center">
								<span>Subtotal</span>
								<span className="heading-color fw-semibold mb-0">$473.00</span>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-center">
								<span>Service Charge</span>
								<span className="heading-color fw-semibold mb-0">-$50</span>	
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-center">
								<span>Tax</span>
								<span className="heading-color fw-semibold mb-0">$10</span>
							</li>
						</ul>
					</div>

					{/* <!-- Card footer --> */}
					<div className="card-footer bg-transparent border-top p-0 pt-3">
						<div className="d-flex justify-content-between align-items-center mb-4">
							<span className="heading-color fw-normal">Payable Now</span>
							<span className="h6 mb-0">$410.00</span>
						</div>

						{/* <!-- Button --> */}
						<div className="d-grid"><a href="/" className="btn btn-lg bttn mb-0">Place order</a></div>
					</div>
				</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Main