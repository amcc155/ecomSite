import { createContext, useEffect } from "react";
import React, { useState } from "react";
import {toast, useToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import CustomToast from "../components/CustomToast";
import '../styles/toast.css'

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    let initialState = localStorage.getItem("cartItems");
    initialState = JSON.parse(initialState) || [];
    return initialState;
  });

  const[toastVisible, setToastVisible] = useState(false)
  

  const getCartLength = () => {
    const cartLength = cartItems.reduce((acc, curr) => {
      console.log(curr.count);
      return acc + curr.count;
    }, 0);

    console.log(cartLength);
    return cartLength;
  };

  const addToCart = (item) => {
    console.log(toast)
    let isAlreadyAdded = false;

    const updatedCartItems = [...cartItems];

    for (let cartItem of updatedCartItems) {
      if (cartItem.id === item.id) {
        cartItem.count = (cartItem.count || 0) + 1;
        isAlreadyAdded = true;
        break;
      }
    }

    if (!isAlreadyAdded) {
      updatedCartItems.push({ ...item, count: 1 });
    }

    setCartItems(updatedCartItems);

    
    toast.success(<CustomToast item = {item}/>, {
      className: 'custom-toast', 
      onClose: ()=> setToastVisible(false),
      onOpen: ()=> setToastVisible(true)
    })
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (itemTitle) => {
    setCartItems(cartItems.filter((item) => item.title !== itemTitle));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartLength,
        toastVisible
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
