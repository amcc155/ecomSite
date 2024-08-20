import { useContext, useEffect } from "react";
import homePageData from "../../public/assets/data/homepagePicturesData";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";
import FeaturedBanner from "../components/FeaturedBanner";
import showCaseImage1 from "../../public/assets/images/james-marty-h1BuNJZzpC8-unsplash.jpg";
import pic2 from "../../public/assets/images/brooke-cagle-ezgW6z6oIvA-unsplash.jpg";
import yellowOutfit from "../../public/assets/images/dom-hill-nimElTcTNyY-unsplash.jpg";


const PreviewImages = () => {
  return (
    <>
      {homePageData.map(({images, header, type, description}) => (
        <div className="">

          <div className="flex bg-cyan-200">
            <img className=" h-96 w-2/4 object-cover" src={images[0]}  />
            <img className="h-96 w-2/4 object-cover" src={images[1]} />
          </div>

          <h1 className=" font-extrabold text-xl pb-1 mt-5 "> {header} </h1>
          <p> {description} </p>
          <button className=" bg-cool-red text-light-gray px-2 py-1 mt-2 mb-9"> Shop {type} </button>
        </div>
      ))}
    </>
  );
};

const HomePage = () => {
  useEffect(() => {
    // List all images that you want to preload
    const imagesToPreload = [
      showCaseImage1,
      pic2,
      yellowOutfit,
      ...homePageData.flatMap((data) => data.images),
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="">
      <FeaturedBanner images={[showCaseImage1, pic2, yellowOutfit]} />

      <PreviewImages />
    </div>
  );
};

export default HomePage;
