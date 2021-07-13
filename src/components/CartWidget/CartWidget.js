import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = (cantidad) => {

  const {cart} = useContext(CartContext);

  return (
    <>
      <button type="button" className="btn btn-secundary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className='CardWidget' style={{ fontSize: '20px', color: '#ccc' }}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {cart.lenght}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <Link to="/cart">
                <button type="button" className="btn btn-primary">Comprar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
