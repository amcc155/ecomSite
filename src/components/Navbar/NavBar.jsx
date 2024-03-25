// IMPORT FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickerMule } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
//IMPORT CONTEXTS
import { useContext } from "react";
import { ShopContext } from "../../context/GlobalState";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

//Categoy Nav componenet that will render the middle sub nav in the big nav
const CategoriesNav = () => {
  return (
    <nav>
      <ul className="flex gap-3 ">
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
      </ul>
    </nav>
  );
};

//main navbar component
const NavBar = () => {
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
    <nav>
      <ul className="flex justify-between ml-5 mt-5">
        <NavLink to="/">
          <FontAwesomeIcon icon={faStickerMule} size="2x" />
        </NavLink>
        <CategoriesNav />
        <div className="flex gap-5 mr-5">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </ul>
    </nav>
  );
};
export default NavBar;
