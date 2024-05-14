//framer motion 
import {motion} from "framer-motion"
//IMPORT FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickerMule } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import SearchForm from "../SearchForm";
//IMPORT CONTEXTS
import { useContext, useState } from "react";
import { ShopContext } from "../../context/GlobalState";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CategoryButton from "./CategoryButton";

//Categoy Nav componenet that will render the middle sub nav in the big nav
const CategoriesNav = () => {
  const {products} = useContext(ShopContext);

  const categories = new Set(products.map((product) => product.category));

  return (
    <nav>
      <ul className="flex gap-3 ">
        <CategoryButton location={'/men'} > Men </CategoryButton>
        <CategoryButton location = {'/women'} > Women </CategoryButton>
        
      </ul>
    </nav>
  );
};

//main navbar component
const NavBar = () => {
  const [searching, setSearching] = useState(false);

  //search bar click event
  const onSearchClick = () => {
    setSearching(!searching);
  };

  const { setCategory } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case "/men":
        setCategory("men's clothing");
        break;
      case "/women":
        setCategory("women's clothing");
        break;
      case "/":
        setCategory("");
      default:
        setCategory("");
    }
  }, [location]);

  return (
    <nav className="sticky w-full top-0 z-9 items-center overflow-auto ">
      <ul className="flex justify-between mx-5 mt-5 ">
        <NavLink to="/">

          <h2 className="text-4xl text-emerald-300 font-sans"> Store </h2>
      
        </NavLink>

        <CategoriesNav />
        <div className="flex gap-5 mr-5 items-center ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            onClick={onSearchClick}
          />
           {searching && <SearchForm/>}
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </ul>
    </nav>
  );
};
export default NavBar;
