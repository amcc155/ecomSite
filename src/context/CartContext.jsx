import { createContext } from "react";
import React, {useState} from 'react';
export const CartContext = createContext({
    cartItems: [],
    addToCart: ()=>{}
})

export const CartProvider =({children})=>{
    console.log('cart context')
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems([...cartItems,  item])
    } 

    const removeFromCart = (itemTitle)=>{
        setCartItems( cartItems.filter((item) => item.title != itemTitle) )
    }

return(
    <CartContext.Provider value={{cartItems, setCartItems, addToCart, removeFromCart}} >
        {children}
        </CartContext.Provider>
)
}