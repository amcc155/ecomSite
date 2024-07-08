import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import useFetchData from "../api/fetchData";
import { useLocation } from "react-router-dom";
import getCategoryFromPathname from "../utils/getDataFromPathName";


// currently home function. Make this a layout componenent that will be re usable for every similar page
const BrowsePage = () => {
    const location = useLocation()
    const category = getCategoryFromPathname(location.pathname)
    const{data: categorizedProducts, loading, error} = useFetchData( `https://fakestoreapi.com/products/category/${category}`)
    return (
        <>
   
        <div className="grid grid-cols-2 gap-3 mt-10  mx-auto lg:max-w-[90%]">
            
            {!loading? (
                categorizedProducts.map((product, index) => (
                    <Card productId = {product.id} className = {"border-2 border-black-gray min-h-[200px] mb-3 hover:scale-105 transition-transform cursor-pointer"} key={index}>
                    <img className = "max-h-[200px] m-auto" src = {product.image} alt = {product.title}/>
                    <p className = 'text-center' > {product.title}</p>
                    </Card>
                    ))
                    ):(new Array(4).fill(0).map(() => (
                        <SkeletonCard/>
                    ))
                    )}
                    </div>
                    
                </>
              
            )}
    export default BrowsePage;
