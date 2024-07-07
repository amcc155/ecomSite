import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";


// currently home function. Make this a layout componenent that will be re usable for every similar page
const BrowsePage = () => {
    const { products, loading } = useContext(ShopContext);
   
   
    return (
        <>
        <h2> {products.category} </h2>
        <div className="grid grid-cols-2 gap-3 mt-10  mx-auto lg:max-w-[90%]">
            
            {!loading? (
                products.map((product, index) => (
                    <Card productId = {product.id} className = {"border-2 border-black-gray min-h-[200px] mb-3 hover:scale-105 transition-transform cursor-pointer"} key={index}>
                    <img className = "max-h-[200px] m-auto" src = {product.image} alt = {product.title}/>
                    <p className = 'text-center' > {product.title}</p>
                    </Card>
                    ))
                    ):(products.map(() => (
                        <SkeletonCard/>
                    ))
                    )}
                    </div>
                    
                </>
              
            )}
    export default BrowsePage;
