import React, { useState, useEffect } from 'react'
import {ItemDetail} from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/components';

export const ItemDetailContainer = () => {

  const {id} = useParams();
  const [products, setProduct] = useState(null)

  useEffect(() => {
    const getItem = async () => {
      let data = await getProducts();
      const item = data.find((item)=>item.id === parseInt (id))
      console.log(data)

      setProduct(item);
    }
      setTimeout(() => {
        getItem();
      }, 500)
  }, [id])

  return (
    <>
      {products && <ItemDetail product={products}/>}
      <div>
        {/* <Spinner animation="border" variant="primary" /> */}
      </div>
    </>
  )
}