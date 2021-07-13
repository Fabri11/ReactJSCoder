import React, { useEffect, useState } from 'react'
import './style.css'
import {ItemList} from '../ItemList/ItemList'
import { useParams} from 'react-router-dom';
import { getProducts } from '../../utils/components';

export const ItemListContainer = () => {
  const { id } = useParams()
  console.log(id)
  const [products, setProducts] = useState([]);
    useEffect(() => {
        const waitForData = async () => {
          let data = await getProducts();
          console.log(data)
          if(id) data = data.filter(item=>item.category === id)
          setProducts(data)
        };
      setTimeout(() => {
        waitForData();
      },1000)
}, [id]);

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}
