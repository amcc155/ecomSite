import React, { useContext, useEffect, useState } from "react";

import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import useFetchData from "../api/fetchData";
import { useLocation } from "react-router-dom";
import getCategoryFromPathname from "../utils/getDataFromPathName";
import { ShopContext } from "../context/ShopContext";




const BrowsePage = () => {
    console.log('browse page')
    const[priceSort, setPriceSort] = useState(null)
    const location = useLocation()
    const {products} = useContext(ShopContext)
    const category = getCategoryFromPathname(location.pathname)
    const{data: categorizedProducts, loading, error} = useFetchData( `https://fakestoreapi.com/products/category/${category}?sort=${priceSort}`)
    console.log(products)

    
    const onSelectChange = (e) =>{
        console.log(e.target.value)
        setPriceSort(e.target.value)
    }


    return (
        <>
   
        <form>
            <select onChange = {onSelectChange}>
                <option value ='asc'> $Lowest - Highest </option>
                <option value = 'desc' > $Highest - Lowesst </option>
                </select>
            </form>
   
        <div className="grid grid-cols-2 gap-3 mt-10  mx-auto lg:max-w-[90%]">
       
            {!loading? (
                categorizedProducts.map((product, index) => (
                    <Card productId = {product.id} size = {'large'} key={index}>
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
