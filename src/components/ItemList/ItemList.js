import React from 'react'
import { Item } from '../Item/Item';

export const ItemList = ({products}) =>{
  return(
    <div className="container d-flex justify-content-center align-item-center">
      <div className="row">
        {products.map((element)=>
          <Item key={element.data().id} product={element.data()}/>
        )}
      </div>
    </div>
  )
};