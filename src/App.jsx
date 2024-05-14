import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import { ShopContext } from "./context/GlobalState";
import useFetchData from "./api/fetchData";
import BrowsePage from "./pages/BrowsePage";
import {RouterProvider, useLocation } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";

const Layout = () =>{
  
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([


  
  {
    element: <Layout/>,
    children:[
  {
    path:"/",
    element:<HomePage/>,
  },

  {
    path:"/men",
    element: <BrowsePage/>
  },

  {
    path:"/women",
    element: <BrowsePage/>
  },

  {
    path:"/product/:productId",
    element: <Product/>
  },
  ]
}
])

function App() {

  const [category, setCategory] = useState("");
  let { data, error, loading } = useFetchData(category);
  
  const[products, setProducts] = useState(data)

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);
  console.log(products);
  console.log('app');

  return (
    <>
      <ShopContext.Provider value={{ products, setCategory, error, loading, setProducts}}>
        <RouterProvider router = {router}/>
       
      </ShopContext.Provider>
    </>
  );
}

export default App;
