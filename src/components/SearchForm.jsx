import { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../context/GlobalState";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const SearchForm = ({ searching, setSearching }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, setProducts } = useContext(ShopContext);
  const [oldProducts, setOldProducts] = useState([products]);

  const navigate = useNavigate();
  const inputRef = useRef();

  //Use effect to add event listener
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target))
        setSearching(false);
    };
    if (searching) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [searching]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setProducts(filteredProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchResults");
  };

  return (
    <div className=" absolute pl-10 top-0 w-full z-50 left-0 bg-white h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="h-full">
          <form
            onSubmit={handleSubmit}
            className=""
          >
            <div className="flex gap-4 mt-2 justify-center items-center">
            <input
              className=" bg-slate-300 rounded-full w-96 pl-3 h-8 "
              type="text"
              onChange={handleInputChange}
              ref={inputRef}
              placeholder="Search"
            />
            <p> Cancel </p>
            </div>
          </form>
          
          <div className="mt-8">
          <h2> Popular Search Terms </h2>
          <ul>
            <li className=" font-bold"> Backpack </li>
            <li className="font-bold"> Shirt </li> 

            </ul>
            </div>
        </div>
        
      </motion.div>

      <div className="flex flex-col">
        {searching & (searchTerm.length > 3) &&
          products.map((product, index) => (
            <Card
              productId={product.id}
              className={
                "border-2 border-sky-500 mb-3 hover:scale-105 transition-transform cursor-pointer"
              }
              key={index}
            >
              <img className="max-h-[200px] m-auto" src={product.image} />
              <p className="text-center"> {product.title}</p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default SearchForm;
