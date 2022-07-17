import React, { context, useState } from "react";


export const CartContext = React.createContext()
export const CarritoContext = ({ children }) => {
    const [cart, setCart] = useState([])
console.log("el carrito", cart)

    const añadirItem = (item) => { cart.push(item) }
    const quitarItem = (id) => {  }
    const vaciarCarrito = () => { }
    const estaEnCarrito = (id) => { }


    return (
        <CartContext.Provider value={[cart, añadirItem]}>
            {children}
        </CartContext.Provider>
    )
}    