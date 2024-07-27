import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
    const { id: productId } = useParams() //returns an object with key id (id is renamed to productId)
    const product = products.find(product => product._id === productId) //find the product with the same id as the productId
    console.log(product)
  return (
    <div>sProductScreen</div>
  )
}

export default ProductScreen