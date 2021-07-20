import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/client";

export const CartContext = createContext()

export const CartContextElement = ({children}) => {

    const [cart, setCart] = useState([])
    const [productos, setproductos] = useState(null);

    useEffect(()=>{
        async function fetch(){
            const docs = await db.collection("productos").get();
            setproductos(docs);
        }
        fetch();
    })

    const addProduct =(product, cant) => {
        const index = cart.findIndex(item => item.id === product.id)
        if(index === -1) setCart([...cart, {...product, cant}])
        else {setCart(() => {
            cart[index].cant = cant
            return [...cart]
        })}
    }

    function clear (){
        setCart([])
    }


    function deleteProduct(id) { 
        const filterCart =cart.filter((item)=> item.id !== id);

        setCart(filterCart);
    }

    function total(){
        const valor = cart.reduce((reunir, item)=>{
            return(reunir += (item.price * item.cant)

            )
        },0);
        return valor;
    }


    return (
        <CartContext.Provider value ={{cart, addProduct, clear, deleteProduct, total, productos}}>
            {children}
        </CartContext.Provider>
    )
};