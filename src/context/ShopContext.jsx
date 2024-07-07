import React, { createContext, useState, useEffect } from "react";
import useFetchData from "../api/fetchData";



export const ShopContext = createContext({
  products: [],
});


export const ShopProvider = ({ children }) => {


  console.log('shopContext')
  console.log(window.location.pathname)
  const [category, setCategory] = useState([])
  const[products, setProducts] = useState([])
  const data = []
  const error = ''
  const loading = ''

  


  return (
    <ShopContext.Provider
      value={{ data, error, loading, products, category, setCategory, setProducts}}
    >
      {children}
    </ShopContext.Provider>
  );
};
