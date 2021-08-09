import { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "../../firebase/client";
import { CartContext } from "../../context/CartContext";
import Alert from 'react-bootstrap/Alert';
import { Button } from "react-bootstrap";
import { render } from "ejs";
import Form from 'react-bootstrap/Form'

const CheckoutForm = (e) =>{
  const {cart, subTotal, clear} = useContext(CartContext);

  async function itemUpdate() { 
      const itemsToUpdate = db.collection("productos")
      .where("id", "in", cart.map(i => i.id));

      const query = await itemsToUpdate.get();
      const batch = db.batch();
      const outOfStock = [];

      cart.forEach(producto => {
          const item = query.docs.find(item => producto.id === item.data().id);
          if (item.data().stock >= producto.cantidad) {
              batch.update(item.ref, {stock: item.data().stock - producto.cantidad});
          } else{
              outOfStock.push(producto)};
      })

          if (outOfStock.length === 0){
          await batch.commit();
          return {status: 'ok'}
      } else {
          return {status: 'sin stock', outOfStock}
      }
  }

  const finalizarCompra = async (comprador) => {
      const orden = {
          comprador,
          items: cart,
          total: subTotal(),
          fecha: firebase.firestore.FieldValue.serverTimestamp()
      }

      const respuesta = await db.collection('orders').add(orden);
      return respuesta
  }

  const obtenerComprador = async (e) => {
      e.preventDefault();

      const formulario = e.target;

      const comprador = {
          nombre: formulario['nombre'].value,
          telefono: formulario['telefono'].value,
          email: formulario['email'].value,
      }
      const respuesta = await itemUpdate();
      if (respuesta.status === "ok"){
          await finalizarCompra(comprador);

      formulario.reset();
      clear();
      }
      else{
          alert(respuesta.status);
      }
  }

    return(
      <Form className='card card-body border border-secondary bg-dark' onSubmit={(e)=>obtenerComprador}>
          <div className='form-group input-group'>
              <input
              type='text'
              className='form-control'
              placeholder='Nombre'
              name='nombre'
              />
          </div>
          <div className='form-group input-group'>
              <input
              type='text'
              className='form-control'
              placeholder='Email'
              name='email'
              />
    
          </div>
          <div className='form-group input-group'>
              <input
              type='text'
              className='form-control'
              placeholder='Teléfono. Ej:111-233'
              name='telefono'
              />
          </div>
          <div>
              <button id='btnConfirmOrder' type='submit' onClick={finalizarCompra} className='btn btn-primary'>Confirmar</button>
          </div>
      </Form>
    );
};

export default CheckoutForm;
