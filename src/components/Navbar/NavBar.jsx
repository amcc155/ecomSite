//framer motion
import { motion } from "framer-motion";
//IMPORT FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import SearchForm from "../SearchForm";
//IMPORT CONTEXTS
import { useContext, useState } from "react";
import { ShopContext} from "../../context/ShopContext";

import { useEffect } from "react";
import CategoryButton from "./CategoryButton";
import IconWrapper from "./IconWrapper";

//Categoy Nav componenet that will render the middle sub nav in the big nav
const CategoriesNav = () => {
  const { products } = useContext(ShopContext);

  return (
    <nav>
      <ul className="flex gap-3 ">
      <li>  <CategoryButton location={"/men"}>  <p className="text-dark-gray"> Men </p> </CategoryButton> </li>
       <li>  <CategoryButton location={"/women"}> <p className="text-dark-gray"> Women </p> </CategoryButton> </li>
      </ul>
    </nav>
  );
};

//main navbar component
const NavBar = () => {
  console.log('navbar')
  const [searching, setSearching] = useState(false);

  



  //search bar click event
  const onSearchClick = (e) => {
    e.stopPropagation();
    setSearching(!searching);
  };



  return (
    <>
      <nav className="sticky w-full top-0 z-9 items-center overflow-auto ">
        <ul className="flex justify-between mx-5 mt-5 ">
          <NavLink to="/">
            <h2 className="text-4xl text-cool-red font-sans"> Store </h2>
          </NavLink>

          

          <CategoriesNav />

          <div className="flex  mr-5 items-center ">
            <IconWrapper>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                onClick={onSearchClick}
              />
            </IconWrapper>

            <IconWrapper>
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
          
            </IconWrapper>
        

            <IconWrapper>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </IconWrapper>
          </div>
        </ul>
      </nav>
      {searching && (
        <SearchForm searching={searching} setSearching={setSearching} />
      )}
    </>
  );
};
export default NavBar;
