import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
    const { id } = useParams()
  return (
    <div>sProductScreen</div>
  )
}

export default ProductScreen