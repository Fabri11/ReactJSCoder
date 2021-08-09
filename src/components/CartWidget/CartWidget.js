import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {

  const { cart, cartQty } = useContext(CartContext);

  const [cantCart, setCantCart] = useState(0)

  useEffect(() => {
    setCantCart(cartQty)
  }, [cart])


  return (
    <div className='btn btn-secondary CardWidget' style={{ fontSize: '20px', color: '#ccc' }}>
      <FontAwesomeIcon icon={faShoppingCart} /> <span className={`${!cart.length && "d-none"}`} >{cantCart}</span>
    </div>
  );
}
