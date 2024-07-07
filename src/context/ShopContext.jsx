import React, { createContext, useState, useEffect } from "react";
import useFetchData from "../api/fetchData";

export const ShopContext = createContext({
  products: [],
});

export const ShopProvider = ({ children }) => {
  console.log('shopContext')
  const [category, setCategory] = useState("");
  let { data, error, loading } = useFetchData(
    `https://fakestoreapi.com/products/category/${category}`
  );

  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (data) {
      setProducts(data);
  
    }
  }, [data]);



  return (
    <ShopContext.Provider
      value={{ data, error, loading, products, category, setCategory, setProducts }}
    >
      {children}
    </ShopContext.Provider>
  );
};
