import express from 'express';  // Import express using ES6 syntax
import dotenv from 'dotenv';  // Import dotenv
dotenv.config();  // Configure dotenv
import products from './data/products.js';  // Import the products data

const port = process.env.PORT || 5000;//the port number is stored in the .env file and process.env.PORT is the prefix used to access it(5000 is the default port number and fallback)

const app = express();  

app.get('/', (req, res) => {  // Define a route for the r
    res.send('Server is running..');  // Send a response to the client,
});

app.get('/api/products', (req, res) => {  // Define a route for the products data
    res.json(products);  // Send the products data to the client
});

app.get('/api/products/:id', (req, res) => {  // Define a route for the product details (single product route)
    const product = products.find((p) => p._id === req.params.id);  // Find the product by id
    res.json(product);  // Send the product details to the client
});

app.listen(port, () => console.log(`Server is running on port ${port}`));  

// The server is now running on port 5000
