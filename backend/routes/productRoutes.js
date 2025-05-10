import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productsModel.js';

router.get('/', asyncHandler(async (req, res) => {  // Define a route for the products data. using asyncHandler to handle the promise rejection error 
    const products = await Product.find({});  // Fetch the products data from the database
    res.json(products);  // Send the products data to the client
}));

router.get('/:id', asyncHandler(async(req, res) => {  // Define a route for the product details (single product route)
    const product = await Product.findById(req.params.id);  // Fetch the product details from the database
    if(product) {
        res.json(product);  // Send the product details to the client
    }
    res.status(404).json({message: 'Product not found'});  // Send an error message to the client
    
    
}));

  


export default router; 
