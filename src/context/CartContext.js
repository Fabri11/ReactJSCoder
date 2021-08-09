import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/client";

export const CartContext = createContext()

export const CartContextElement = ({ children }) => {

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await db.collection("productos").get();
      let items = data.docs.map((doc) => { return { ...doc.data(), id: doc.id } });
      setProducts(items);
    }
    fetch();
  }, [])

  const addProduct = (product, cant) => {
    const index = cart.findIndex(item => item.id === product.id)
    if (index === -1) setCart([...cart, { ...product, cant }])
    else {
      setCart(() => {
        cart[index].cant = cant
        return [...cart]
      })
    }
  }

  function clear() {
    setCart([])
  }


  function deleteProduct(id) {
    const filterCart = cart.filter((item) => item.id !== id);

    setCart(filterCart);
  }

  function total() {
    const valor = cart.reduce((reunir, item) => {
      return reunir += item.price * item.cant
    }, 0);
    return valor;
  }


  let cartQty = () => {
    return cart.reduce((acc, item) => {
      return acc += item.cant
    }, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, clear, deleteProduct, total, products, cartQty }}>
      {children}
    </CartContext.Provider>
  )
};