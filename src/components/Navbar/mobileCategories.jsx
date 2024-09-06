import { CategoriesNav } from "./NavBar"
import { useEffect, useRef } from "react"



const MobileCategories = ({setIsCategoryNavPopup})=> {

    const navRef = useRef()
    const exitButton = useRef()
    
    const handleExitClick = (e)=>{
        if(navRef.current && !navRef.current.contains(e.target) ){
            setIsCategoryNavPopup(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('click', handleExitClick)
        document.body.style.overflow = 'hidden'
        

        return()=> {
            document.body.style.overflow ='scroll'
            document.removeEventListener('click', handleExitClick)
        }
        },[])
        
   
    return(
        <>
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"></div>

        <nav className="h-screen  w-2/3 bg-white absolute top-[75px] right-0  z-50 pt-20 flex justify-center" ref = {navRef}>
            <span  aria-label="Exit Popup" className="absolute right-0 top-5 mr-5 cursor-pointer" ref = {exitButton} onClick = {()=> setIsCategoryNavPopup(false)}> X </span>
            <CategoriesNav mobilePopup = {true} />
        </nav>
        </>
    )
}
export default MobileCategories