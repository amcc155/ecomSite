import { useState, useEffect } from "react";
const BannerText = () => {
  const textList = ["Sale!", "Shop Now"];
  const [currentText, setCurrentText] = useState(textList[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); //sets when text is visible or not

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
    <div className="mx-auto bg-cool-red h-8 flex justify-center items-center">
      <p
        className={`text-center transition-opacity duration-700 ease-in-out text-light-gray ${
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
