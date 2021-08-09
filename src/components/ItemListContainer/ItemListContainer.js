import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemListContainer = () => {
  const { products } = useContext(CartContext);
  const { categoryId } = useParams();
  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    if (categoryId && products) {
      const productsFound = products.filter(item => item.category === categoryId);
      setFilterItem(productsFound);
    } else if (products) {
      setFilterItem(products)
    };

  }, [categoryId, products]);

  return (
    <div>
      <ItemList products={filterItem} />
    </div>
  )
}
