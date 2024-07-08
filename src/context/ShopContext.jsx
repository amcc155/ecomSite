import React, { createContext, useState, useEffect } from "react";
import useFetchData from "../api/fetchData";

export const ShopContext = createContext({
  products: [],
});

export const ShopProvider = ({ children }) => {
  const { data, error, loading } = useFetchData(
    "https://fakestoreapi.com/products"
  );
  console.log("shopContext");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data); 
    }
  }, [data]);

  return (
    <ShopContext.Provider
      value={{ data, error, loading, products, setProducts }}
    >
      {children}
    </ShopContext.Provider>
  );
};
