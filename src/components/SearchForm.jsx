import { useContext, useState } from "react";
import { ShopContext } from "../context/GlobalState";
import { motion } from 'framer-motion'

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, setProducts } = useContext(ShopContext);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredProducts = products.filter((product) => {
      return product.title.includes(searchTerm);
    });

    console.log(filteredProducts);
    setProducts(filteredProducts);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity set to 0 (fully transparent)
      animate={{ opacity: 1 }} // Animation to change opacity to 1 (fully visible)
      transition={{ ease: "easeOut", duration: 1 }} // Transition effect and duration
    >
      <div className="h-full">
        <form className="w-full left-0 bg-black h-screen z-50 absolute">
          <input
            className=" bg-slate-500 ml-10 "
            type="text"
            onChange={handleInputChange}
          />
        </form>
        <p className="text-slate-400"> {searchTerm} </p>
      </div>
    </motion.div>
  );
};

export default SearchForm;
