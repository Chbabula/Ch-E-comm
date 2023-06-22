import React from 'react'
import {useParams, Navigate } from 'react-router-dom'

function ProductDetailes() {
  const {productId}=useParams()
  const {product, setProduct}=React.useState({})

  console.log(productId)

  fetch(`https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list/${productId}.json`)
  .then(response=>response.json())
  .then(data=>{
    setProduct(data)
  })
  if(product === null){
    return<Navigate to="/" />
  }
  return (
    <div><h1>ProductDetailes{productId}</h1></div>
  )
}

export default ProductDetailes