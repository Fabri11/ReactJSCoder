import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {

  const {cart} = useContext(CartContext);
  let CantCart = cart.reduce((reunir, Item)=>{
    return (reunir +=(Item.cant))
  },0)

  return (
    <>
      <button type="button" className="btn btn-secundary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className='CardWidget' style={{ fontSize: '20px', color: '#ccc' }}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className={cart.lenght? "modal-body" : "d-none"}>{CantCart}</div>
      </button>
    </>
  );
}
