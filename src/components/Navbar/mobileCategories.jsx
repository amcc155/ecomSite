import { CategoriesNav } from "./NavBar"
const MobileCategories = ()=> {
    const handleExitClick = ()=>{

    }
    return(
        <div className="h-screen w-2/3 bg-black absolute top-0 right-0 text-white z-50 pt-20 flex justify-center">
            <span onClick={handleExitClick} aria-label="Exit Popup" className="absolute right-0 top-5 mr-5 "> X </span>
            <CategoriesNav mobilePopup = {true} />
        </div>
    )
}
export default MobileCategories