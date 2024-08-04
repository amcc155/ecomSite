import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const ProductEdit = ({count, title})=> {
    const {removeFromCart, changeItemQuantity } =
    useContext(CartContext);
    return(
      
        <div className="flex gap-3">
        <FontAwesomeIcon className="cursor-pointer" onClick={(e) => {
          removeFromCart(e, title)}} icon={faTrash} />

          <label for = 'quantity'> Quantity </label>
          <select name = 'quantity' id = 'quantity ' value = {count} onChange = { (e) => changeItemQuantity(e, title)}>
            {/* creates array of 10 numbers and uses it for options */}
            {Array.from({length:10}, (_, i) => i + 1).map((num) => (
                <option> {num} </option>
            ))}
          
            </select>
          </div>
      
    )
}
export default ProductEdit