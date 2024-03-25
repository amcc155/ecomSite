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

//Categoy Nav componenet that will render the middle sub nav in the big nav
const CategoriesNav = () => {
  const { setCategory } = useContext(ShopContext);
  return (
    <nav>
      <ul className="flex gap-3 ">
        <li onClick={() => setCategory("men's clothing")}>
          <NavLink to="/men">Men</NavLink>
        </li>

        <li onClick={() => setCategory("women's clothing")}>
          <NavLink to="/women">Women</NavLink>
        </li>
      </ul>
    </nav>
  );
};

//main navbar component
const NavBar = () => {
  const { setCategory } = useContext(ShopContext);
  return (
    <nav>
      <ul className="flex justify-between ml-5 mt-5">
        <li onClick={() => setCategory("")}>
          <FontAwesomeIcon icon={faStickerMule} size="2x" />
        </li>
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
