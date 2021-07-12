import React, { useState } from 'react';

export const ItemCount = ({stock, onAdd}) => {


  const [valor, setValor] = useState(1);

  const sumar= () => {
    if (valor < stock) {
        setValor(valor + 1)
    }
  }

  const restar= () => {
    if (valor > 1) {
        setValor(valor - 1)
    }
  }

  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" onClick={restar}>-</button>
      </div>
      <input type='text' value={valor} readOnly className="form-control" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={sumar}>+</button>
        <div>
          <button onClick={()=>onAdd (valor)} className="btn btn-outline-secondary rounded-4">Agregar Al Carrito</button>
        </div>
      </div>
    </div>
  )
}