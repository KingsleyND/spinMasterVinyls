import express from 'express';  // Import express using ES6 syntax
import products from './data/products.js';  // Import the products data
const port = 5000;  // Define the port number (frontend uses 3000)

const app = express();  

app.get('/', (req, res) => {  // Define a route for the root URL
    res.send('Server is running..');  // Send a response to the client
});

app.get('/api/products', (req, res) => {  // Define a route for the products data
    res.json(products);  // Send the products data to the client
});

app.listen(port, () => console.log(`Server is running on port ${port}`));  

// The server is now running on port 5000
