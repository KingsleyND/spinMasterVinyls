import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
    const { id: productId } = useParams() //returns an object with key id (id is renamed to productId)
  return (
    <div>sProductScreen</div>
  )
}

export default ProductScreen