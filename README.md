# Welcome to Petopia!

Welcome to Petopia, where you can discover your ideal furry friend and give them a loving home! Petopia is a web application powered by React.js and Node.js that allows users to browse, connect, and adopt pets in need. Whether you're looking for a playful puppy, a cuddly kitten, or a loyal companion, Petopia has you covered.

### Installation Instructions
1.  Clone this repository to your local machine.
2.  Navigate to the project directory.
3.  Install dependencies for both the client and server:

        cd mainapplication
        npm install
        cd ../backnode
        npm install

1.  Set up environment variables:
    -   Create a `.env` file in the `server` directory.
    -   Define environment variables such as `PORT`, `DATABASE_URL`, `JWT_SECRET`, etc.
2.  Start the development servers:
    -   In the `client` directory: `npm start`
    -   In the `server` directory: `npm run dev`
### Usage Guidelines
-   Visit the Petopia website to start browsing available pets.
-   Create an account or log in securely to access additional features.
-   Browse through the catalog of pets, view their details, and connect with them.
-   Add your favorite pets to your cart and proceed to checkout to give them a forever home.
-   Manage your orders, view past purchases, and update order statuses as needed.
-   Leave reviews and ratings for pets you've adopted to help others make informed decisions.
-   Stay updated with promotions, discounts, and new arrivals to find your perfect match.

### Requirements Documentation
#### API Routes

-   **GET /api/v1/products**
    
    -   Retrieves all products.
    -   Parameters: None
    -   Headers: None
    -   Response Sample:
    -   `{
      "status": "success",
      "data": [
        {
          "_id": "60983d60242cc9a42c7c823d",
          "name": "Product Name",
          "description": "Product Description",
          ...
        },
        ...
      ]
    }
    `

**POST /api/v1/products**

-   Adds a new product.
-   Parameters: None
-   Headers: None
-   Request Body Sample:
- `{
  "name": "Product Name",
  "description": "Product Description",
  ...
}
`

Response Sample:

        {
      "status": "success",
      "data": {
        "_id": "60983d60242cc9a42c7c823d",
        "name": "Product Name",
        "description": "Product Description",
        ...
      }

}
### Thank you for using Petopia! We hope you find your perfect furry friend. If you have any questions or feedback, feel free to reach out to us.

