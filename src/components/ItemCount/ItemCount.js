import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../ItemCount/style.css';

export const ItemCount = ({ product }) => {
  const { addProduct } = useContext(CartContext)

  const [valor, setValor] = useState(1);

  const sumar = () => {
    if (valor < product.stock) {
      setValor(valor + 1)
    }
  }

  const restar = () => {
    if (valor > 1)
      setValor(valor - 1)
  }

  return (
    <>
      <div id="containerCount" className="input-group mb-4 bg-dark">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button" onClick={restar}>-</button>
        </div>
        <input type='text' value={valor} readOnly className="form-control text-white bg-dark" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={sumar}>+</button>
        </div>
      </div>
      <button className="btn btn-outline-primary m-3" id="carritoButton" onClick={() => addProduct(product, valor)}>Agregar al Carrito </button>
    </>
  );
};