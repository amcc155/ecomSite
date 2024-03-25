import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/GlobalState";
const Product = ({productIndividual})=>{
    //get products from context
    const {products} = useContext(ShopContext)
    const productId = useParams()
    const thisProduct = products.find((product) => product.id = productId) //search for indiicual projcet from id
    
    console.log(productIndividual);
    return(
        <>
        <h1> {thisProduct.title} </h1>
        </>

    )
}
export default Product