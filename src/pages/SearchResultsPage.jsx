import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import NotFoundSVG from "../../public/assets/images/undraw_void_-3-ggu (1).svg";
const SearchResultsPage = () => {
  const location = useLocation();
  const products = location.state.filteredProducts;
  const searchTerm = location.search;

  console.log(location);
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-10  mx-auto lg:max-w-[90%]">
        {products?.map((product, index) => (
          <Card productId={product.id} size={"large"} key={index}>
            <img
              className="max-h-[200px] m-auto"
              src={product.image}
              alt={product.title}
            />
            <p className="text-center"> {product.title}</p>
          </Card>
        ))}
      </div>
      {products.length === 0 && (
        <>
          <p> {`No Items Found for Search ${searchTerm}`} </p>

          <div className="flex justify-center ">
            <img src={NotFoundSVG} alt="not found" />
          </div>
        </>
      )}
    </>
  );
};

export default SearchResultsPage;
