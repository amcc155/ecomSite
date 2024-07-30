 
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'

const SearchResultsPage = ()=>{
    const location = useLocation()
    console.log(location)
    const products = location.state
    return(
        <>
        
        <div className="grid grid-cols-2 gap-3 mt-10  mx-auto lg:max-w-[90%]">
        {products?.map((product , index) =>(
            
         
            <Card productId = {product.id} size = {'large'} key={index}>
                    <img className = "max-h-[200px] m-auto" src = {product.image} alt = {product.title}/>
                    <p className = 'text-center' > {product.title}</p>
                </Card>
                
        ))}
        </div>
         </>
    )
}

export default SearchResultsPage