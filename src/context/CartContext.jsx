import { createContext, useEffect } from "react";
import React, { useState } from "react";
import { toast, useToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "../components/CustomToast";
import "../styles/toast.css";

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

  const [toastVisible, setToastVisible] = useState(false);

  const getCartLength = () => {
    const cartLength = cartItems.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);

    console.log(cartLength);
    return cartLength;
  };

  const addToCart = (item) => {
    let isAlreadyAdded = false;

    const updatedCartItems = [...cartItems];

    for (let cartItem of updatedCartItems) {
      if (cartItem.id === item.id) {
        cartItem.count += 1;
        isAlreadyAdded = true;
        break;
      }
    }

    if (!isAlreadyAdded) {
      updatedCartItems.push({ ...item, count: 1 });
    }

    setCartItems(updatedCartItems);

    toast.success(<CustomToast item={item} />, {
      className: "custom-toast",
      onClose: () => setToastVisible(false),
      onOpen: () => setToastVisible(true),
    });
  };

  const changeItemQuantity = (e, itemName) => {
    const newItems = cartItems.map((item) => {
      if (item.title === itemName) {
        return { ...item, count: parseInt(e.target.value) };
      } else {
        return item;
      }
    });
    setCartItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (e, itemTitle) => {
    e.stopPropagation();
  
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
        toastVisible,
        changeItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
