import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";
const CategoryButton = ({location, children})=>{
    return (
        <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className='border-black-gray border-2 w-24 h-12 flex justify-center items-center '

        >
          <NavLink to = {location} > {children} </NavLink>
          </motion.button>
    )
}
export default CategoryButton