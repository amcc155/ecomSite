import { useContext } from "react";
import { ShopContext } from "../context/GlobalState";
import LoaderCircle from "../components/spinner/LoaderCircle";
import Card from "../components/Card.";
import FeaturedBanner from "../components/FeaturedBanner";
import showCaseImage1 from "../assets/images/homeImage_1.jpeg"
import pic2 from "../assets/images/madeUpShoe.png"

const CategoryRow = ({ product }) => {
    const { loading } = useContext(ShopContext);
    return(
    <div className="flex flex-row gap-5 mx-8 my-10 overflow-scroll">
    
    {product.map((item) => (
      
        <Card>
          <img
            className="min-h-[200px] max-h-[300px] min-w-[280px] m-auto"
            src={item.image}
            alt={item.title} // Always add alt attribute for accessibility
          />
          <p className="mt-5">{item.title}</p>
        </Card>
     
    ))};
    </div>
  )};

const HomePage = () => {
  const { products } = useContext(ShopContext);
    //turn the json data into a object, where the category will be the keys, and the value will an array of
  //object
  let GroupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  //turn the object into an array that contains the keys and values
  GroupedProducts = Object.entries(GroupedProducts);

  return(
    <>
    <FeaturedBanner images = {[showCaseImage1 , pic2]}/>
    {GroupedProducts.map(([category, product]) => (
    
        <div key={category}>
      <h1 className="mt-7 ml-4 font-medium text-2xl"> {category}</h1>
      <CategoryRow product={product} />
      </div>
    
    
  ))};
  </>
  )
};
export default HomePage;
