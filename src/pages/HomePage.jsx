import { useContext } from "react";
import homePageData from "../../public/assets/data/homepagePicturesData";
import { ShopContext } from "../context/GlobalState";
import Card from "../components/Card";
import FeaturedBanner from "../components/FeaturedBanner";
import showCaseImage1 from "../../public/assets/images/james-marty-h1BuNJZzpC8-unsplash.jpg";
import pic2 from "../../public/assets/images/brooke-cagle-ezgW6z6oIvA-unsplash.jpg";
import yellowOutfit from "../../public/assets/images/dom-hill-nimElTcTNyY-unsplash.jpg";


// Category Row Component
const CategoryRow = ({ products }) => {
  const { loading } = useContext(ShopContext);

  return (
    <div className="flex flex-row gap-5 mx-8 my-10 overflow-scroll">
      {products.map((item) => (
        <Card
          key={item.id}
          className="min-w-[280px] min-h-[100px] flex justify-center flex-col"
        >
          <img
            className="min-h-[200px] max-h-[300px] min-w-[280px] m-auto"
            src={item.image}
            alt={item.title}
          />
          <p className="mt-5">{item.title}</p>
        </Card>
      ))}
    </div>
  );
};

const PreviewImages = () => {
  return (
    <>
      {homePageData.map(({images, header, type, description}) => (
        <div className="mx-9">

          <div className=" flex bg-cyan-200">
            <img className=" h-96 w-2/4" src={images[0]} />
            <img className="h-96 w-2/4" src={images[1]} />
          </div>

          <h1 className=" font-extrabold text-xl pb-1 mt-5 "> {header} </h1>
          <p> {description} </p>
          <button className=" bg-emerald-500 text-slate-50 px-2 py-1 mt-2 mb-9"> Shop {type} </button>
        </div>
      ))}
    </>
  );
};

const HomePage = () => {

  return (
    <>
      <FeaturedBanner images={[showCaseImage1, pic2, yellowOutfit]} />

      <PreviewImages />
    </>
  );
};

export default HomePage;
