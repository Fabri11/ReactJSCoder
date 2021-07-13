import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartComponent = ({children}) => {

    const [cart, setCart] = useState([])


    const addProduct =(product, cant) => {
        const index = cart.findIndex(item => item.id === product.id)
        
        if(index === -1) setCart([...cart, {...product, cant}])

        else {setCart(() => {
            cart [index].cant = cant

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


    return (
        <CartContext.Provider value ={{cart, addProduct}}>
            {children}
        </CartContext.Provider>
    )
};