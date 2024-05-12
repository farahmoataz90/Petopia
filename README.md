# Welcome to Petopia!

Welcome to Petopia, where you can discover your ideal furry friend and give them a loving home! Petopia is a web application powered by React.js and Node.js that allows users to browse, connect, and adopt pets in need. Whether you're looking for a playful puppy, a cuddly kitten, or a loyal companion, Petopia has you covered.

<p align="center">
  <img src="Mockup.png" alt="Petopia Mockup">
</p>

## Installation Instructions
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both the client and server:
    ```bash
    cd mainapplication
    npm install
    cd ../backnode
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the `backNode` directory.
    - Define environment variables such as `PORT`, `DATABASE_URL`, `JWT_SECRET`, etc.

5. Start the development servers:
    - In the `mainapplication` directory: `npm start`
    - In the `backNode` directory: `npm run dev`

## Usage Guidelines
- Visit the Petopia website to start browsing available pets.
- Create an account or log in securely to access additional features.
- Browse through the catalog of pets, view their details, and connect with them.
- Add your favorite pets to your cart and proceed to checkout to give them a forever home.
- Manage your orders, view past purchases, and update order statuses as needed.
- Leave reviews and ratings for pets you've adopted to help others make informed decisions.
- Stay updated with promotions, discounts, and new arrivals to find your perfect match.

## Responsive on all Devices
<p align="center">
  <img src="Responsive.png" alt="Responsive Design">
</p>

## Additional Information
- For support or inquiries, contact our team at farahmoataz90@gmail.com.
- Follow us on social media for updates and adorable pet stories:
    - [Facebook](https://www.facebook.com/farah.moataz1/)

## Petopia Model Diagram
<p align="center">
  <img src="ModelDiagram.png" alt="Petopia Model Diagram">
</p>

## Requirements Documentation

### API Routes

# API Documentation

## Authentication API

### 1. Signup
**Endpoint:** `POST /api/v1/users/signup`  
**Description:** Creates a new user account.  
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "status": "success",
  "token": "JWT_TOKEN",
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```
**Status Code:** `201 Created`

### 2. Login
**Endpoint:** `POST /api/v1/users/login`  
**Description:** Logs in an existing user.  
**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "status": "success",
  "token": "JWT_TOKEN",
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```
**Status Code:** `200 OK`

### 3. Upload Product Picture
**Endpoint:** `POST /api/v1/users/upload_product_picture`  
**Description:** Add user profile picture.  
**Request Body:**  
*Form-data:*
- profileImage

**Protected Routes Middleware:**  
- `protect`: Middleware to protect routes by verifying JWT token.
- `restrictTo`: Middleware to restrict access based on user roles.

## Cart API

### 1. Get Cart Items
**Endpoint:** `GET /api/v1/cart/`  
**Description:** Retrieves items in the user's cart.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "_id": "60983d60242cc9a42c7c823d",
      "product": {
        "_id": "60983035efb47391c3b11846",
        "name": "Product Name",
        "price": 100,
        "quantity": 5
      },
      "quantity": 2,
      "price": 200
    }
  ]
}
```
**Status Code:** `200 OK`

### 2. Add Item to Cart
**Endpoint:** `POST /api/v1/cart/`  
**Description:** Adds a product to the user's cart.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Request Body:**
```json
{
  "product_id": "60983035efb47391c3b11846"
}
```
**Response:**
```json
{
  "status": "success",
  "numOfCartItems": 3,
  "data": {
    "_id": "60985a0f02e9b4e3a0b94b6a",
    "userId": "60983035efb47391c3b11846",
    "cartItems": [
      {
        "_id": "60985a0f02e9b4e3a0b94b6b",
        "product": "60983035efb47391c3b11846",
        "price": 100,
        "quantity": 1
      }
    ],
    "totalCartPrice": 300
  }
}
```
**Status Code:** `201 Created`

### 3. Update Item Quantity in Cart
**Endpoint:** `PUT /api/v1/cart/:itemId`  
**Description:** Update certain product quantity in cart.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Parameters:** itemId  
**Request Body:**
```json
{
  "quantity": 5
}
```
**Response:**
```json
{
  "status": "success",
  "numOfCartItems": 3,
  "data": {
    "_id": "60985a0f02e9b4e3a0b94b6a",
    "userId": "60983035efb47391c3b11846",
    "cartItems": [
      {
        "_id": "60985a0f02e9b4e3a0b94b6b",
        "product": "60983035efb47391c3b11846",
        "price": 100,
        "quantity": 5
      }
    ],
    "totalCartPrice": 500
  }
}
```
**Status Code:** `200 OK`

### 4. Remove Product from Cart
**Endpoint:** `DELETE /api/v1/cart/:itemId`  
**Description:** Remove product from cart.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Parameters:** cartId  
**Status Code:** `204 No Content`

### 5. Delete Whole Cart
**Endpoint:** `DELETE /api/v1/cart/`  
**Description:** To delete whole cart.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Status Code:** `204 No Content`

## Order API

### 1. Create Order
**Endpoint:** `POST /api/v1/order/`  
**Description:** Creates a new order.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:**
```json
{
  "status": "success",
  "data": {
    "_id": "60983d60242cc9a42c7c823d",
    "user": "60983035efb47391c3b11846",
    "cartItems": [
      {
        "product": "60983035efb47391c3b11846",
        "quantity": 1,
        "price": 200
      }
    ],
    "totalOrderPrice": 200
  }
}
```
**Status Code:** `201 Created`

### 2. Get All Orders
**Endpoint:** `GET /api/v1/order`  
**Description:** Retrieves all orders placed by the current user.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 3. Get Delivered Orders
**Endpoint:** `GET /api/v1/order/delivered`  
**Description:** Retrieves all delivered orders placed by the current user.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 4. Get Undelivered Orders
**Endpoint:** `GET /api/v1/order/undelivered`  
**Description:** Retrieves all undelivered orders placed by the current user.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 5. Get Order Details by ID
**Endpoint:** `GET /api/v1/order/:id`  
**Description:** Retrieves details of a certain order of the user.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format

.  
**Status Code:** `200 OK`

### 6. Update Order Payment Status
**Endpoint:** `GET /api/v1/order/pay/:order_id`  
**Description:** Update certain order status to paid.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 7. Update Order Delivery Status
**Endpoint:** `GET /api/v1/order/deliver/:order_id`  
**Description:** Update certain order status to delivered.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 8. Get Order Dashboard
**Endpoint:** `GET /api/v1/order/dashboard`  
**Description:** Returns details from a certain start date to a certain end date.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Query parameters:** startDate, endDate  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 9. Get All Orders (Admin)
**Endpoint:** `GET /api/v1/order/all-orders`  
**Description:** Retrieve all orders details from all users.  
**Request Headers:**
- Authorization: Bearer JWT_TOKEN  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

## Product API

### 1. Get All Products
**Endpoint:** `GET /api/v1/products/`  
**Description:** Retrieves all products.  
**Request Query Parameters (Optional):**
- price[gte]: Filter products with a price greater than or equal to the specified value.
- price[lte]: Filter products with a price less than or equal to the specified value.
- sort: Sort products based on specified fields (e.g., price, createdAt).
- fields: Select specific fields to include in the response.
- page: Specify the page number for paginated results.
- limit: Specify the maximum number of products per page.  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 2. Get Product by ID
**Endpoint:** `GET /api/v1/products/:id`  
**Description:** Retrieve specific product data by ID.  
**Request Parameters:**
- id: Product ID  
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 3. Add Product
**Endpoint:** `POST /api/v1/products`  
**Description:** Adds new product.  
**Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "gender": "female",
  "age": 2,
  "breed": "yes",
  "price": 3923
}
```
**Response:** See Create Order response format.  
**Status Code:** `201 Created`

### 4. Upload Product Picture
**Endpoint:** `POST /api/v1/products/upload_product_picture`  
**Description:** Add product picture.  
**Request Parameters:** id: Product ID  
**Request Body:**  
*Form-data:*
- productImage  
**Status Code:** `200 OK`

### 5. Update Product
**Endpoint:** `PUT /api/v1/products/:id`  
**Description:** Updates an existing product price or description.  
**Request Parameters:**
- id: Product ID  
**Request Body:**
```json
{
  "description": "Updated Product Description",
  "price": 120
}
```
**Response:** See Create Order response format.  
**Status Code:** `200 OK`

### 6. Delete Product
**Endpoint:** `DELETE/api/v1/products/:id`  
**Description:** Deletes an existing product from products list.  
**Request Parameters:**
- id: Product ID  
**Response:**  
```json
{
  "status": "success",
  "data": null
}
```
**Status Code:** `204 No Content`

## Usage Guidelines
- Refer to individual endpoints for usage guidelines.

## Thank you for using Petopia! We hope you find your perfect furry friend. If you have any questions or feedback, feel free to reach out to us.
<p align="center">
  <img src="mainapplication/src/Pages/assets/funcat.gif" alt="GitHub Logo" width="300" height="300">
</p>

