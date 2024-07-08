import { NavLink } from "react-router-dom"
const Card = ({children, size, productId})=>{
    const styleOptions = {
        large: "border-2 border-black-gray min-h-[200px] mb-3 hover:scale-105 transition-transform cursor-pointer",
        small: "border-2 border-sky-500 mb-3 hover:scale-105 transition-transform cursor-pointer"
    }
    return(
        <NavLink to = {`/product/${productId}`}>
        <div className= {styleOptions[size]} >
        {children}
        </div>
        </NavLink>
    )
}
export default Card