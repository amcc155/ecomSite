import { useEffect, useState } from "react"

const FeaturedBanner = ({images, children})=>{
    const[currentImage, setCurrentImage] = useState(0)
    const[visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(()=>{
                setCurrentImage(count => (count + 1) % images.length)
                setVisible(true) 
            }, 1000)
            
            console.log(currentImage);
        }, 5000);
    
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    
    return(
        <div className="mx-auto">
        <img className ={`my-3 w-11/12 min-h-[600px] mx-auto transition-opacity ease-in-out duration-750 ${visible? "translate-x-0" : ""}`} src = {images[currentImage]}/>
        {children}
        </div>
    )
}
export default FeaturedBanner