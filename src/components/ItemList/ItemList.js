import React from 'react'
import '../ItemList/style.css'
import { Item } from '../Item/Item';

export const ItemList = ({ products }) => {
  
  return (
    <>
    <h1 className= 'mostRequested'>MOST REQUESTED</h1> 
      <div id='containerItem' className="container d-flex justify-content-center align-item-center">
        <div className="row">
          {
            products.map((element) =>
              <Item key={element.id} product={element} />
            )
          }
        </div>
      </div>
    </>
  )
};