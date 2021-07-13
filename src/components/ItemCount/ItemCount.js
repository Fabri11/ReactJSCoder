import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../ItemCount/style.css';

export const ItemCount = ({product, onAdd}) => {


  const [initial, setValor] = useState(1);

  const {addElement} = useContext(CartContext);

  const sumar= () => {
    if (initial < product) {
        setValor(initial + 1)
    }
  }

  const restar= () => {
    if (initial > 1) {
    setValor(initial-1)    }
  }

  return (
    <div id="containerCount" className="input-group mb-4">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" onClick={restar}>-</button>
      </div>
      <input type='text' value={initial} readOnly className="form-control" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={sumar}>+</button>
        <div>
        <button id="carritoButton" onClick={()=> {addElement(product, initial)
            onAdd(initial)}}>
            Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}