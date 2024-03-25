import React, { useContext } from "react";
import { ShopContext } from "../context/GlobalState";
import Card from "../components/Card.";
import LoaderCircle from "../components/spinner/LoaderCircle";

// currently home function. Make this a layout componenent that will be re usable for every similar page
const BrowsePage = () => {
    const { products, loading } = useContext(ShopContext);

    return (
        <>
        <h2> {products.category} </h2>
        <div className="grid grid-cols-2 gap-1 mt-10 ">
            
            {!loading? (
                products.map((product, index) => (
                  
                    <Card productId = {product.id} className = {"border-2 border-sky-500 min-h-[200px] mb-3 hover:scale-105 transition-transform cursor-pointer"} key={index}>
                    <img className = "max-h-[200px] m-auto" src = {product.image}/>
                    <p className = 'text-center' > {product.title}</p>
                    </Card>
                    ))
                    ):(<LoaderCircle/>
                    )}
                    </div>
                    
                </>
              
            )}
    export default BrowsePage;
