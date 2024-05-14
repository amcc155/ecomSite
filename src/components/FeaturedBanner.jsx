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
        <div className="mr-9 ml-9">
        <img className ={`my-3 w-full mx-auto min-h-[200px] max-h-[550px]  transition-opacity ease-in-out duration-750 ${visible? "translate-x-0" : ""}`} src = {images[currentImage]}/>
        {children}
        </div>
    )
}
export default FeaturedBanner