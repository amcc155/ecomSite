import React, { useContext } from "react";
import { ShopContext } from "../context/GlobalState";
import Card from "../components/Card.";
import MadeUpShoeImage from '../assets/images/madeUpShoe.png'; 
import FeaturedBanner from "../components/FeaturedBanner";
import Header from "../layouts/Header";
import LoaderCircle from "../components/spinner/LoaderCircle";
import { useParams } from "react-router-dom";

// currently home function. Make this a layout componenent that will be re usable for every similar page
const BrowsePage = () => {
    const { products, loading} = useContext(ShopContext);

    return (
        <>
         
            <div className="flex justify-center">
            <FeaturedBanner image = {MadeUpShoeImage}>
                <div className="text-center">
                <p> Made Up Shoe </p>
                <h2 className="text-3xl text-slate-950 font-bold"> ABOUT THE SHOE </h2>
                <p> Some stuff about the shoe. More Stuff about the shoe </p>
                </div>
                </FeaturedBanner> 
          
            </div>
            {loading? <LoaderCircle/> :
              <div className="flex flex-row gap-10 mx-8 my-10 overflow-scroll ">
              {products && products.map((product) => (
                  <Card>
                      <img  className="min-h-[200px] max-h-[300px] min-w-[280px] m-auto" src = {product.image} />
                      <p> {product.title} </p>
                      </Card>
              ))}
              </div>
            }
          
        </>
    );
};

export default BrowsePage;
