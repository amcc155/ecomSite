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
import CartPage from "./pages/Cart/CartPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    path:"/browse/:category",
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

  {
  path: '/cart',
  element: <CartPage/>
  }

  ]
}
])

function App() {
 
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
