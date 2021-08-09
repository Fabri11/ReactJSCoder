import React, { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import '../ItemCount/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const ItemCountCart = ({ product }) => {
  const { addProduct } = useContext(CartContext)
  const [valor, setValor] = useState(1);

  const add = () => {
    if (valor < product.stock) {
      setValor(valor + 1)
    }
  }

  const subtract = () => {
    if (valor > 1)
      setValor(valor - 1)
  }

  return (
    <>
      <div id="containerCount" className="input-group mb-4">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button" onClick={subtract}>-</button>
        </div>
        <input type='text' value={valor} readOnly className="form-control text-white bg-dark" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={add}>+</button>
        </div>
        <div>
          <button className='btn btn-outline-primary' type='button' onClick={() => addProduct(product, valor)}>Agregar<FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
      </div>
    </>
  );
};