import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import { ShopContext, ShopProvider} from "./context/ShopContext";
import useFetchData from "./api/fetchData";
import BrowsePage from "./pages/BrowsePage";
import {RouterProvider, useLocation } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./context/CartContext";
import SearchResultsPage from "./pages/SearchResultsPage"


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
    path:"/searchResults",
    element: <SearchResultsPage/>
  },

  {
    path:"/product/:productId",
    element: <Product/>
  },


  ]
}
])

function App() {
 console.log('app re rendering')
  return (
    <>
    
    <CartProvider>
     <ShopProvider>
        <RouterProvider router = {router}/>
        </ShopProvider>
    
      </CartProvider>
    </>
  );
}

export default App;
