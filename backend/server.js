import express from 'express';  // Import express using ES6 syntax
import dotenv from 'dotenv';  // Import dotenv
dotenv.config();  // Configure dotenv
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';  // Import the product routes

const port = process.env.PORT || 5000;//the port number is stored in the .env file and process.env.PORT is the prefix used to access it(5000 is the default port number and fallback)

connectDB();  // Connect to the database

const app = express();  

app.get('/', (req, res) => {  // Define a route for the r
    res.send('Server is running..');  // Send a response to the client,
});

app.use('/api/products', productRoutes);  // Use the product routes. The product routes are prefixed with /api/products 


app.listen(port, () => console.log(`Server is running on port ${port}`));  

// The server is now running on port 5000
