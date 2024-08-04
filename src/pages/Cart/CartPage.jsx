import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import ProductEdit from "./ProductEdit";
const CartList = () => {
  return <></>;
};
const CartPage = () => {
  const { cartItems } =
    useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, curr) => {
      return acc + curr.price * curr.count;
    }, 0)
    .toFixed(2);

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-center text-xl"> Bag | ${totalPrice} </h2>

      {cartItems.length === 0 && <p> There are no items in your bag </p>}

      {cartItems.map(({ count, category, price, id, image, title }) => (
        <>
          <div className=" mt-7 w-[95%] mx-auto h-[250px] border-b-4  ">
            <div className="flex gap-5">
              <NavLink to={`/product/${id}`}>
                <img
                  className="h-[150px] w-[150px] object-contain"
                  src={image}
                />
              </NavLink>

              <div className="flex flex-col gap-2">
                <NavLink to={`/product/${id}`}>
                  <p className=" font-bold text-wrap">
                    {" "}
                    {` ${count}X ${title}`}{" "}
                  </p>
                </NavLink>
                <p>  ${count * price} </p>
                <p className="font-extralight"> {category} </p>
                <ProductEdit count={count} title={title} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default CartPage;
