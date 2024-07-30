import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartList = ()=>{
    return(
        <>
        </>
    )
}
const CartPage = () => {
  const { cartItems } = useContext(CartContext);
    
const totalPrice = cartItems.reduce((acc, curr)=>{
    return acc + (curr.price * curr.count)
},0).toFixed(2)

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-center text-xl"> Bag | ${totalPrice} </h2>

      {cartItems.length === 0 && <p> There are no items in your bag </p>}

      {cartItems.map((item) => (

        <div className=" mt-7 w-[95%] mx-auto h-[250px] border-b-4  ">
            <div className="flex gap-5">
            <img className="h-[150px] w-[150px object-contain]" src = {item.image}  />
            <div className = 'flex flex-col'>
          <p className=" font-bold text-wrap"> {` ${item.count}X ${item.title}`} </p>
          <p> {item.count * item.price} </p>
          <p className="font-extralight"> {item.category} </p>
          </div>
        
          </div>
        
       
        </div>
      
      ))}
    </div>
  );
};
export default CartPage;
