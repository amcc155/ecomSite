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
            
            
        }, 5000);
    
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    
    return(
        <div className="">
        <img className ={`mb-7 w-full mx-auto min-h-[200px] max-h-[550px]  object-cover transition-opacity ease-in-out duration-750 ${visible? "translate-x-0" : ""}`} src = {images[currentImage]} alt = 'Banner photo of model'/>
        {children}
        </div>
    )
}
export default FeaturedBanner