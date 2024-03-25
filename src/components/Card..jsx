const Card = ({children})=>{
    
    return(
        <div className="min-w-[280px] min-h-[100px]flex justify-center flex-col" >
        {children}
        </div>
    )
}
export default Card