import React, { useState, useEffect, useContext } from 'react'
import {ItemDetail} from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {

  const {productos} = useContext(CartContext)
  const {id} = useParams();
  const [products, setProduct] = useState(null)

  useEffect(() => {
    if (productos){
      const itemFound = productos.docs.find(producto => producto.data().id===id)
      setProduct(itemFound);
    }
    },[id, productos])

  return (
    <>
      {products && <ItemDetail product={products.data()}/>}
    </>
  )
}