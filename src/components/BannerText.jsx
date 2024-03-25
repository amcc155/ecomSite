import { useState, useEffect } from "react";
const BannerText = () => {
  const textList = ["Sale!", "Shop Now"];
  const [currentText, setCurrentText] = useState(textList[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  //Effect that will change the text on a certain interval

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setFade(true);

        setCurrentText(textList[(currentIndex + 1) % textList.length]);
      }, 1000);

      setCurrentIndex(currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [textList]);
  return (
    <div className="w-11/12 mx-auto bg-slate-200 h-8 mt-3 flex justify-center items-center">
      <p
        className={`text-center ttransition-opacity duration-700 ease-in-out text-slate-800 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {" "}
        {currentText}{" "}
      </p>
    </div>
  );
};
export default BannerText;
