import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import {ItemList} from '../ItemList/ItemList'
import { useParams} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemListContainer = () => {
  const {productos} = useContext(CartContext);
  const {categoryId} = useParams();
  const [filterItem, setFilterItem] = useState([]);

  useEffect(()=> {
    if(categoryId && productos){
      const productsFound = productos.docs.filter(item => item.data().categoria === categoryId);
      setFilterItem(productsFound);
    }else if(productos){
      setFilterItem(productos.docs)
    };
    setTimeout(() => {
      useEffect();
    }, 1000);
  },[categoryId, productos]);

  return (
    <div>
      <ItemList products={filterItem}/>
    </div>
  )
}
