import React, { useState, useEffect, useContext } from 'react'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Alert from 'react-bootstrap/Alert'

export const ItemDetailContainer = () => {

  const { products } = useContext(CartContext)
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    
      const itemFound = products?.find(product => product.id === id)
      setProduct(itemFound);
    
  }, [id, products])

  return (
    <>
      {
        product && <ItemDetail product={product} /> 
      }
    </>
  )
}