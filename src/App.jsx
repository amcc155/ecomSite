import { useEffect, useState } from "react";
import "./App.css";
import Header from "./layouts/Header";

import { ShopContext } from "./context/GlobalState";
import useFetchData from "./api/fetchData";
import LoaderCircle from "./components/spinner/LoaderCircle";
import BrowsePage from "./pages/BrowsePage";
import { Router, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from 'react-router-dom'
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
  ]
}
])

function App() {
  const [category, setCategory] = useState("");
  let { data, error, loading } = useFetchData(category);
  const products = data;
   console.log('rendered')
   console.log(products);

  return (
    <>
      <ShopContext.Provider value={{ products, setCategory, error, loading }}>
        <RouterProvider router = {router}/>
       
      </ShopContext.Provider>
    </>
  );
}

export default App;
