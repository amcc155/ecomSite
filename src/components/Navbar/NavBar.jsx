//framer motion
//IMPORT FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import SearchForm from "../SearchForm";
//IMPORT CONTEXTS
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CategoryButton from "./CategoryButton";
import MobileCategories from "./mobileCategories";
import IconWrapper from "./IconWrapper";
import { ShopProvider } from "../../context/ShopContext";

//Categoy Nav componenet that will render the middle sub nav in the big nav
export const CategoriesNav = ({mobilePopup = false}) => {


  return (
    <nav className={`md:block ${mobilePopup? 'block' : 'hidden'} `}>
      <ul className= {`flex gap-3 ${mobilePopup? 'flex-col': 'flex-row'} `}>
        <li>
          {" "}
          <CategoryButton location={"/browse/men's clothing"}>
            {" "}
            <p className="text-dark-gray"> Men </p>{" "}
          </CategoryButton>{" "}
        </li>
        <li>
          {" "}
          <CategoryButton location={"/browse/women's clothing"}>
            {" "}
            <p className="text-dark-gray"> Women </p>{" "}
          </CategoryButton>{" "}
    </li>
    <li>
          <CategoryButton location = {"/browse/jewelery"}>
            <p className = 'text-dark-gray' > Jewlery </p>
            </CategoryButton>
      </li>
      <li>
            <CategoryButton location = {"/browse/electronics"}>
              <p className="text-dark-gray" > Electronics </p>
              </CategoryButton>
        </li>
      </ul>
    </nav>
  );
};



//main navbar component
const NavBar = () => {
  console.log("navbar");
  const [searching, setSearching] = useState(false);
  const[isCategoryNavPopup, setIsCategoryNavPopup] = useState(false)
  const {getCartLength} = useContext(CartContext)

  const cartLength = getCartLength()
  //search bar click event
  const onSearchClick = (e) => {
    e.stopPropagation();
    setSearching(!searching);
  };

  return (
    <>
       {isCategoryNavPopup&&(
        <MobileCategories setIsCategoryNavPopup = {setIsCategoryNavPopup} isCategoryNavPopup={isCategoryNavPopup}/>
      )}
      <nav className="sticky top-0  w-full bg-white h-[70px] flex z-50  items-center border border-b-2 border-cool-red  ">
        <ul className="  flex w-full  justify-between  mx-5 ">
          <NavLink to="/">
            <h2 className="text-4xl text-cool-red font-sans"> Store </h2>
          </NavLink>

       
          <CategoriesNav />

          <div className="flex  items-center">
            <IconWrapper>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                onClick={onSearchClick}
              />
            </IconWrapper>

          <NavLink to = '/cart'>
            <IconWrapper>
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
            </IconWrapper>
            </NavLink>

            <p> {cartLength} </p>

            <IconWrapper>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </IconWrapper>

            <FontAwesomeIcon icon={faBars} className="md:hidden" size='lg' onClick = {(e) => {
              e.stopPropagation()
              setIsCategoryNavPopup(true)
              }} />
           
     
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
