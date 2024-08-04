const CustomToast = ({item}) => {
    return(
        <>
        <div className="flex items-center gap-5">
        <img className="h-44" src = {item.image} />
        <p> {item.title} </p>
        </div>
        <div className="flex justify-center">
        <button className="w-auto min-w-24 rounded-md border border-solid border-cool-red h-[50px] "> Go To Cart </button>
        </div>
        </>
    )
}
export default CustomToast