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

#### Authentication Routes

**POST /api/v1/users/signup**

- Creates a new user account.
- Request Body Sample:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- Response Sample:
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

**POST /api/v1/users/login**

- Logs in an existing user.
- Request Body Sample:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- Response Sample:
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

**POST /api/v1/users/upload_product_picture**

- Add user profile picture.
- Request Body: Form-data: profileImage

#### Cart Routes

**GET /api/v1/cart/**

- Retrieves items in the user's cart.

**POST /api/v1/cart/**

- Adds a product to the user's cart.
- Request Body Sample:
    ```json
    {
      "product_id": "60983035efb47391c3b11846"
    }
    ```

**PUT /api/v1/cart/:itemId**

- Update certain product quantity in cart.
- Request Body Sample:
    ```json
    {
      "quantity": 5
    }
    ```

**DELETE /api/v1/cart/:itemId**

- Remove product from cart.

**DELETE /api/v1/cart/**

- Delete the whole cart.

#### Order Routes

**POST /api/v1/order/**

- Creates a new order.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order**

- Retrieves all orders placed by the current user.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order/delivered**

- Retrieves all delivered orders placed by the current user.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order/undelivered**

- Retrieves all undelivered orders placed by the current user.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order/:id**

- Retrieves details of a certain order of the user.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order/pay/:order_id**

- Update certain order status to paid.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order/deliver/:order_id**

- Update certain order status to delivered.
- Request Headers: Authorization: Bearer JWT_TOKEN

**GET /api/v1/order/dashboard**

- Returns details from a certain start date to a certain end date.
- Request Headers: Authorization: Bearer JWT_TOKEN
- Query parameters: startDate, endDate

**GET /api/v1/order/all-orders**

- Retrieve all orders details from all users.
- Request Headers: Authorization: Bearer JWT_TOKEN

#### Product Routes

**GET /api/v1/products/**

- Retrieves all products.
- Request Query Parameters (Optional): price[gte], price[lte], sort, fields, page, limit

**GET /api/v1/products/:id**

- Retrieve specific product data by ID.
- Request Parameters: id (Product ID)

**POST /api/v1/products**

- Adds new product.
- Request Body Sample:
    ```json
    {
      "name": "Product Name",
      "price": 100,
      "description": "Product Description",
      "category": "Category Name",
      "image": "Image URL"
    }
    ```
- Request Headers: Authorization: Bearer JWT_TOKEN

**PUT /api/v1/products/:id**

- Update certain product.
- Request Parameters: id (Product ID)
- Request Body Sample:
    ```json
    {
      "name": "Updated Product Name",
      "price": 150,
      "description": "Updated Product Description",
      "category": "Updated Category Name",
      "image": "Updated Image URL"
    }
    ```
- Request Headers: Authorization: Bearer JWT_TOKEN

**DELETE /api/v1/products/:id**

- Remove certain product.
- Request Parameters: id (Product ID)
- Request Headers: Authorization: Bearer JWT_TOKEN


## Thank you for using Petopia! We hope you find your perfect furry friend. If you have any questions or feedback, feel free to reach out to us.
<p align="center">
  <img src="mainapplication/src/Pages/assets/funcat.gif" alt="GitHub Logo" width="300" height="300">
</p>

