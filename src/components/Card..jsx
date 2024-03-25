import { NavLink } from "react-router-dom"
const Card = ({children, className, productId})=>{
    
    return(
        <NavLink to = {`/product/${productId}`}>
        <div className= {className} >
        {children}
        </div>
        </NavLink>
    )
}
export default Card