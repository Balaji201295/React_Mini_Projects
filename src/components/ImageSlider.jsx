import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async (url) => {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setErrorMsg("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    if (url) fetchImages(url);
  }, [url, page, limit]);
  // console.log("Images:", images);

  if (loading) return <div>Loading Data! Please Wait</div>;

  if (errorMsg !== null) return <div>Error Occur. Please Check</div>;

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    // (0 === 0 ? 9 : currentSlide - 1)
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    // (9 === 10 - 1 ? 0 : currentSlide + 1)
  };

  return (
    <section>
      <h1>Image Slider</h1>
      <div className="relative flex justify-center items-center w-full max-w-[600px] h-[450px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 text-white  hover:text-amber-200 filter drop-shadow-md left-4 cursor-pointer transition-all duration-300 ease-linear"
        />

        {images.length > 0 ? (
          <div className="flex justify-center items-center">
            {images.map((item, index) => (
              <img
                key={item.id}
                src={item.download_url}
                alt={item.download_url}
                className={`rounded-md shadow-md w-full h-full ${
                  currentSlide === index ? "block" : "hidden"
                }`}
              />
            ))}
          </div>
        ) : (
          <p>No Images Found</p>
        )}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 text-white hover:text-amber-200 filter drop-shadow-md right-4 cursor-pointer transition-all duration-300 ease-linear"
        />
        <span className="absolute bottom-12 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={` h-4 w-4 rounded-full border-none outline-none cursor-pointer ${
                currentSlide === index ? "bg-amber-200" : "bg-white"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </span>
      </div>
    </section>
  );
};
export default ImageSlider;
