import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import useFetchData from "../api/fetchData";
const Product = () => {
  //get products from context
  const { products } = useContext(ShopContext);
  const { productId } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetchData(`https://fakestoreapi.com/products/${productId}`);

  return (
    <>

    {loading && (
      <p> Fetching Product </p>
    )}
      {!loading && !error && (
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-3 md:flex-row pl-6 bg-slate-500 mt-5 lg:mt-28">
            <img
              className="h-[350px] mt-20 mb-6"
              src={product.image}
              alt={`image of ${product.title}`}
            />
            <div className="flex flex-col">
              <h1 className="text-center"> {product.title} </h1>
              <p className="leading-8 ml-6 mr-6 w-[90%] max-w-[700px]">
                {" "}
                {product.description}{" "}
              </p>
              <div className="mx-6 mt-5">
              <p> &#36;{product.price} </p>
              <button className=" text-slate-50 w-[200px] h-[50px] bg-cool-red">
                {" "}
                Add To Cart{" "}
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
